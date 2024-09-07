import React, { useState } from 'react';
import { ChevronLeft, Ticket, CircleDollarSign, Plus } from 'lucide-react';
import './EventDetailsPage.css';
import Navbar from './components/Navbar';

const EventDetailsPage = () => {
  const [eventType, setEventType] = useState('ticketed');
  const [ticketName, setTicketName] = useState('');
  const [ticketPrice, setTicketPrice] = useState('0.00');

  return (
    <>
    <Navbar />
    <div className="event-details-container">
      
      <main className="main-content">
        <div className="back-link">
          <ChevronLeft size={24} />
        </div>
        
        <h1 className="event-title">Event Title</h1>
        <p className="event-info">Location</p>
        <p className="event-info">Time</p>

        <h2 className="section-title">What type of event are you running?</h2>
        <div className="event-type-selection">
          <button 
            className={`event-type-button ${eventType === 'ticketed' ? 'selected' : ''}`}
            onClick={() => setEventType('ticketed')}
          >
            <Ticket size={48} />
            <h3>Ticketed Event</h3>
            <p>My event requires tickets for entry</p>
          </button>
          <button 
            className={`event-type-button ${eventType === 'free' ? 'selected' : ''}`}
            onClick={() => setEventType('free')}
          >
            <CircleDollarSign size={48} />
            <h3>Free Event</h3>
            <p>I'm running a free event</p>
          </button>
        </div>

        {eventType === 'ticketed' && (
          <>
            <h2 className="section-title">What tickets are you selling?</h2>
            <div className="ticket-form">
              <div className="input-group">
                <label htmlFor="ticketName">Ticket Name</label>
                <input 
                  type="text" 
                  id="ticketName"
                  value={ticketName}
                  onChange={(e) => setTicketName(e.target.value)}
                  placeholder="Ticket Name e.g. General Admission"
                />
              </div>
              <div className="input-group">
                <label htmlFor="ticketPrice">Ticket Price</label>
                <div className="price-input">
                  <span className="currency-symbol">₹</span>
                  <input 
                    type="number" 
                    id="ticketPrice"
                    value={ticketPrice}
                    onChange={(e) => setTicketPrice(e.target.value)}
                    step="0.01"
                  />
                </div>
              </div>
              <button className="add-ticket-button">
                <Plus size={24} />
              </button>
            </div>
          </>
        )}

        <div className="action-buttons">
          <button className="secondary-button">Go back</button>
          <button className="primary-button">Publish Event</button>
        </div>
      </main>
    </div>
    </>
  );
};

export default EventDetailsPage;