import streamlit as st
import pandas as pd
import plotly.express as px
import numpy as np

df = pd.read_csv('streamlit/Mumbai_places.csv')

# Set page configuration
st.set_page_config(
    page_title="Mumbai Tourism Explorer",
    page_icon="🏖️",
    layout="wide"
)


# Custom CSS for better styling
st.markdown("""
    <style>
        .stApp {
            background-color: #f5f7f9;
        }
        .main-header {
            font-size: 2.5rem;
            color: #1E3D59;
            text-align: center;
            padding: 1.5rem 0;
            margin-bottom: 2rem;
            
        }
        .subheader {
            color: #2C3E50;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        .card {
            background-color: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.05);
            margin-bottom: 1rem;
        }
        .metric-card {
            text-align: center;
            padding: 1rem;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .location-card {
            background-color: white;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 0.5rem;
            border-left: 4px solid #4ECDC4;
        }
        .location-name {
            color: #1E3D59;
            font-weight: bold;
            font-size: 1.1rem;
        }
        .filter-section {
            background-color: white;
            padding: 1.5rem;
            border-radius: 10px;
            margin-bottom: 2rem;
            box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
    </style>
""", unsafe_allow_html=True)

# Load and prepare data
@st.cache_data
def load_data():
    df = pd.read_csv('streamlit/Mumbai_places.csv')
    df['Rating'] = pd.to_numeric(df['Rating'], errors='coerce')
    df['Cost'] = df['Cost'].replace('₹', '', regex=True).replace(',', '', regex=True).apply(pd.to_numeric, errors='coerce')
    df['Name'] = df['Name'].replace(r'^\d+\.\s+', '', regex=True)
    df['Type'] = df['Type'].fillna('')
    df['Location'] = df['Location'].fillna('')
    return df.dropna(subset=['Rating', 'Name'])

try:
    df = load_data()
    
    # Main title with custom styling
    st.markdown('<h1 class="main-header">Mumbai Tourism Explorer</h1>', unsafe_allow_html=True)
   
    # Filters section
    
    st.markdown('<h2 class="subheader">🔍 Customize Your Experience</h2>', unsafe_allow_html=True)
    
    col1, col2 = st.columns(2)
    with col1:
        types = ['All'] + sorted(df['Type'].unique().tolist())
        selected_type = st.selectbox('🎯 Experience Type:', types)
        
        min_rating = float(df['Rating'].min())
        max_rating = float(df['Rating'].max())
        rating_range = st.slider(
            '⭐ Rating Range:',
            min_rating, max_rating,
            (min_rating, max_rating)
        )
    
    with col2:
        min_cost = float(df['Cost'].min())
        max_cost = float(df['Cost'].max())
        cost_range = st.slider(
            '💰 Cost Range (₹):',
            min_cost, max_cost,
            (min_cost, max_cost)
        )
        
        locations = ['All'] + sorted(df['Location'].unique().tolist())
        selected_location = st.selectbox('📍 Location:', locations)
    
    st.markdown('</div>', unsafe_allow_html=True)
    
    # Filter data
    filtered_df = df.copy()
    if selected_type != 'All':
        filtered_df = filtered_df[filtered_df['Type'] == selected_type]
    if selected_location != 'All':
        filtered_df = filtered_df[filtered_df['Location'] == selected_location]
    filtered_df = filtered_df[
        (filtered_df['Rating'] >= rating_range[0]) &
        (filtered_df['Rating'] <= rating_range[1]) &
        (filtered_df['Cost'] >= cost_range[0]) &
        (filtered_df['Cost'] <= cost_range[1])
    ]
    
    # Tabs with custom styling
    tab1, tab2, tab3 = st.tabs(["📊 Top Destinations", "📈 Analytics", "🗺️ Location Analysis"])
    
    with tab1:
        st.markdown('<h2 class="subheader">Top Rated Destinations</h2>', unsafe_allow_html=True)
        top_5 = filtered_df.nlargest(5, 'Rating')
        
        for _, row in top_5.iterrows():
            st.markdown(f'''
                <div class="card">
                    <h3>{row['Name']}</h3>
                    <p>⭐ {row['Rating']} | 💰 ₹{row['Cost']:,.0f} | 📍 {row['Location']}</p>
                    <p>Type: {row['Type']}</p>
                </div>
            ''', unsafe_allow_html=True)
    
    with tab2:
        st.markdown('<h2 class="subheader">Insights & Trends</h2>', unsafe_allow_html=True)
        col1, col2 = st.columns(2)
        
        with col1:
            fig_rating = px.histogram(
                filtered_df,
                x='Rating',
                title='Rating Distribution',
                nbins=20,
                color_discrete_sequence=['#4ECDC4']
            )
            fig_rating.update_layout(
                plot_bgcolor='white',
                paper_bgcolor='white',
                margin=dict(t=40, b=0, l=0, r=0)
            )
            st.plotly_chart(fig_rating, use_container_width=True)
            
        with col2:
            fig_scatter = px.scatter(
                filtered_df,
                x='Cost',
                y='Rating',
                color='Type',
                title='Rating vs Cost Analysis',
                hover_data=['Name'],
                color_discrete_sequence=px.colors.qualitative.Set3
            )
            fig_scatter.update_layout(
                plot_bgcolor='white',
                paper_bgcolor='white',
                margin=dict(t=40, b=0, l=0, r=0)
            )
            st.plotly_chart(fig_scatter, use_container_width=True)
        
        # Average cost by type
        avg_cost_by_type = filtered_df.groupby('Type')['Cost'].mean().reset_index()
        fig_cost = px.bar(
            avg_cost_by_type,
            x='Type',
            y='Cost',
            title='Average Cost by Experience Type',
            color_discrete_sequence=['#FF6B6B']
        )
        fig_cost.update_layout(
            xaxis_tickangle=45,
            plot_bgcolor='white',
            paper_bgcolor='white',
            margin=dict(t=40, b=0, l=0, r=0)
        )
        st.plotly_chart(fig_cost, use_container_width=True)
    
    with tab3:
        st.markdown('<h2 class="subheader">Location Overview</h2>', unsafe_allow_html=True)
        
        # Location distribution pie chart
        location_counts = filtered_df['Location'].value_counts()
        fig_locations = px.pie(
            values=location_counts.values,
            names=location_counts.index,
            title='Distribution of Destinations',
            color_discrete_sequence=px.colors.qualitative.Set3
        )
        fig_locations.update_layout(
            margin=dict(t=40, b=0, l=0, r=0)
        )
        st.plotly_chart(fig_locations, use_container_width=True)
        
        # Location details
        for location in filtered_df['Location'].unique():
            location_df = filtered_df[filtered_df['Location'] == location]
            st.markdown(f'''
                <div class="location-card">
                    <div class="location-name">📍 {location}</div>
                    <p>Destinations: {len(location_df)} | Average Rating: ⭐ {location_df['Rating'].mean():.1f} | 
                    Average Cost: ₹{location_df['Cost'].mean():,.0f}</p>
                    <details>
                        <summary>View Destinations</summary>
                        <ul>
                            {''.join(f"<li>{row['Name']} (⭐{row['Rating']})</li>" for _, row in location_df.iterrows())}
                        </ul>
                    </details>
                </div>
            ''', unsafe_allow_html=True)

except Exception as e:
    st.error(f"An error occurred: {str(e)}")
    st.write("Please make sure the CSV file is in the correct format and location.")