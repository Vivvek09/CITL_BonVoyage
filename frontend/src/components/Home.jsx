
import '../styles/Home.css';
import { MapPin, Calendar, DollarSign, Search } from 'react-feather';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import img from '../assets/images/bg.png';
import Navbar from './Navbar.jsx';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


const Home = () => {
  const [location, setLocation] = useState([19.0760, 72.8777]);
  const [zoom, setZoom] = useState(11.5);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting location: ", error);
          setLocation([19.0760, 72.8777]); // Fallback to Mumbai
        }
      );
    } else {
      setLocation([19.0760, 72.8777]); // Fallback to Mumbai
    }
  }, []);

  const SetViewOnClick = ({ coords }) => {
    const map = useMap();
    map.setView(coords, zoom);
    return null;
  };

  return (
    <div>
      <Navbar />
      <section className="banner">
        <div className="search-bar">
          <div className="search-item">
            <MapPin size={20} />
            <input type="text" placeholder="Where to go?" />
          </div>
          <div className="search-item">
            <Calendar size={20} />
            <input type="text" placeholder="Choose date" />
          </div>
          <div className="search-item">
            <DollarSign size={20} />
            <input type="text" placeholder="Choose your budget" />
          </div>
          <button className="explore-btn">
            <Search size={20} />
            Explore Now
          </button>
        </div>
      </section>

      <section className="things-to-do">
        <h2>Things To Do</h2>
        <div className="things-to-do-cards">
          <div className="card">
            <img src={img} alt="Hotel Room" />
            <h3>Book A Hotel ?</h3>
            <p>Book hotels for your favorite destination, compare prices and find the best suitable hotels with authentic reviews.</p>
          </div>
          <div className="card">
            <img src={img} alt="Local Guide" />
            <h3>Find a local Guide or Be One</h3>
            <p>Find locals so you can roam the place better, or be a local guide and generate a side income for yourself while making new friends.</p>
          </div>
          <div className="card">
            <img src={img} alt="Community" />
            <h3>Join Local Community</h3>
            <p>Want to watch a movie but lack friends? No worries! Here you can find people with same interests and hangout with them.</p>
          </div>
        </div>
      </section>

      <section className="discover">
        <h2>Discover New Places Around You</h2>
        <div className="discover-content">
          <div className="discover-text">
            <p>Want to go to this amazing places but lack friends ?</p>
            <button className="discover-button">FIND NEW FRIENDS</button>
            <hr />
            <p>Want to explore the local way ? Make a new local friend</p>
            <button className="discover-button">FIND LOCAL GUIDES</button>
          </div>
          <div className="map">
            <MapContainer center={location} zoom={zoom} style={{ height: "300px", width: "800px" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={location}>
                <Popup>
                  You are here
                </Popup>
              </Marker>
              <SetViewOnClick coords={location} />
            </MapContainer>
          </div>
        </div>
      </section>

      <section className="top-destinations">
        <h2>Top Destinations</h2>
        <div className="destination-cards">
        <div className="card card-dest">
  <img src={img} alt="Rome" />
  <div className="card-header">
    <h3>Rome, Italy</h3>
    <p className="price">$5.42k</p>
  </div>
  <p>10 Days Trip</p>
</div>
<div className="card card-dest">
  <img src={img} alt="London" />
  <div className="card-header">
    <h3>London, UK</h3>
    <p className="price">$4.2k</p>
  </div>
  <p>12 Days Trip</p>
</div>
<div className="card card-dest">
  <img src={img} alt="Europe" />
  <div className="card-header">
    <h3>Full Europe</h3>
    <p className="price">$15k</p>
  </div>
  <p>28 Days Trip</p>
</div>
        </div>
      </section>

      <section className="travel-community">
  <h2>Connect With Other Travelers In The Community</h2>
  <div className="community-cards-container">
    <div className="community-cards">
      <div className="community-card">
        <img src={img} alt="India" />
        <h3>India</h3>
        <p>Travel community</p>
        <p>360+ followers</p>
      </div>
      <div className="community-card">
        <img src={img} alt="Travel Talk" />
        <h3>Travel Talk</h3>
        <p>Travel community</p>
        <p>360+ followers</p>
      </div>
      <div className="community-card">
        <img src={img} alt="Beach" />
        <h3>Beach</h3>
        <p>Travel community</p>
        <p>360+ followers</p>
      </div>
      <div className="community-card">
        <img src={img} alt="Mountains" />
        <h3>Mountains</h3>
        <p>Travel community</p>
        <p>360+ followers</p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;