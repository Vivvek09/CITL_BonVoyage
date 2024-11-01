// StreamlitPage.jsx
import React from 'react';
import Navbar from './components/Navbar'; // Adjust the import path based on your project structure

const StreamlitPage = () => {
  return (
    <div>
      <Navbar />
      <iframe
        src="http://localhost:8501" // Change this to the URL where your Streamlit app is hosted
        width="100%"
        height="800px" // Adjust height as needed
        style={{ border: 'none' }}
        title="Streamlit App"
      />
    </div>
  );
};

export default StreamlitPage;
