const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    try {
        const url = 'https://www.holidify.com/places/mumbai/sightseeing-and-things-to-do.html';
        const browser = await puppeteer.launch({ 
            headless: false,
            defaultViewport: { width: 1366, height: 768 }
        });
        const page = await browser.newPage();
        
        // Add error handling for navigation
        await page.goto(url, { 
            waitUntil: 'networkidle2',
            timeout: 60000 
        }).catch(e => {
            console.error('Navigation failed:', e);
            throw e;
        });

        // Wait for the cards to load with timeout
        await page.waitForSelector('.card.content-card', { timeout: 30000 });

        // Extract structured data with improved selectors
        const structuredData = await page.evaluate(() => {
            const cards = document.querySelectorAll('.card.content-card');
            return Array.from(cards).map(card => {
                // Get the main heading (place name)
                const nameElement = card.querySelector('h3');
                const name = nameElement ? nameElement.textContent.trim() : '';

                // Get the location - improved selector and parsing
                const locationElement = card.querySelector('.location-info, .mb-2');
                let location = '';
                if (locationElement) {
                    const locationText = locationElement.textContent;
                    const locationMatch = locationText.match(/Located in\s*:\s*(.*?)(?=\s*$)/);
                    location = locationMatch ? locationMatch[1].trim() : '';
                }

                // Get the rating - try multiple possible selectors
                const ratingElement = card.querySelector('.rating-text, .review-rating, .place-rating , .rating-badge');
                let rating = '';
                if (ratingElement) {
                    const ratingText = ratingElement.textContent.trim();
                    // Extract numeric rating if present
                    const ratingMatch = ratingText.match(/(\d+(\.\d+)?)/);
                    rating = ratingMatch ? ratingMatch[1] : ratingText;
                }

                // Get the type/category with fallback
                const typeElement = card.querySelector('.category-text, .place-type , .must-visit');
                const type = typeElement ? typeElement.textContent.trim() : '';

                // Get the cost with better parsing
                const costElement = card.querySelector('.price, .cost-info');
                let cost = '';
                if (costElement) {
                    const costText = costElement.textContent.trim();
                    // Extract cost if in expected format
                    const costMatch = costText.match(/₹[\d,]+/);
                    cost = costMatch ? costMatch[0] : costText;
                }

                // Add debug information
                console.log(`Extracted data for ${name}:`, {
                    location,
                    rating,
                    type,
                    cost
                });

                return {
                    name: name.replace(/[\n\r]+/g, ' ').trim(),
                    location: location.replace(/[\n\r]+/g, ' ').trim(),
                    rating: rating.replace(/[\n\r]+/g, ' ').trim(),
                    type: type.replace(/[\n\r]+/g, ' ').trim(),
                    cost: cost.replace(/[\n\r]+/g, ' ').trim()
                };
            });
        });

        // Improved filtering
        const validData = structuredData.filter(place => {
            return place.name && 
                   !place.name.includes('km from city center') && 
                   !place.name.includes('Taj Hotels') &&
                   place.name.length > 3; // Basic validation
        });

        // Create CSV content with proper escaping and BOM for Excel
        const headers = ['Name', 'Location', 'Rating', 'Type', 'Cost'];
        const csvContent = '\ufeff' + [
            headers.join(','),
            ...validData.map(place => [
                `"${place.name.replace(/"/g, '""')}"`,
                `"${place.location.replace(/"/g, '""')}"`,
                `"${place.rating.replace(/"/g, '""')}"`,
                `"${place.type.replace(/"/g, '""')}"`,
                `"${place.cost.replace(/"/g, '""')}"`
            ].join(','))
        ].join('\n');

        // Write to CSV file
        const filePath = path.join(__dirname, 'mumbai_places.csv');
        fs.writeFileSync(filePath, csvContent, 'utf8');

        // Save JSON with debug info
        const debugInfo = {
            timestamp: new Date().toISOString(),
            totalCards: structuredData.length,
            validEntries: validData.length,
            data: validData
        };

        fs.writeFileSync(
            path.join(__dirname, 'mumbai_places_debug.json'),
            JSON.stringify(debugInfo, null, 2),
            'utf8'
        );

        console.log(`Data saved to ${filePath}`);
        console.log('\nSummary:');
        console.log(`Total cards found: ${structuredData.length}`);
        console.log(`Valid entries: ${validData.length}`);
        console.table(validData.slice(0, 5));

        await browser.close();
    } catch (error) {
        console.error('An error occurred:', error);
        // Save error log
        fs.writeFileSync(
            path.join(__dirname, 'scraper_error.log'),
            `${new Date().toISOString()}\n${error.stack}\n`,
            'utf8'
        );
        process.exit(1);
    }
})();