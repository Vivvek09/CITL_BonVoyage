// import React, { useState } from 'react';
// import { ChevronLeft, Ticket, CircleDollarSign, Plus } from 'lucide-react';
// import './EventDetailsPage.css';
// import Navbar from './components/Navbar';

// const EventDetailsPage = () => {
//   const [eventType, setEventType] = useState('ticketed');
//   const [ticketName, setTicketName] = useState('');
//   const [ticketPrice, setTicketPrice] = useState('0.00');

//   return (
//     <>
//     <Navbar />
//     <div className="event-details-container">
      
//       <main className="main-content">
//         <div className="back-link">
//           <ChevronLeft size={24} />
//         </div>
        
//         <h1 className="event-title">Event Title</h1>
//         <p className="event-info">Location</p>
//         <p className="event-info">Time</p>

//         <h2 className="section-title">What type of event are you running?</h2>
//         <div className="event-type-selection">
//           <button 
//             className={`event-type-button ${eventType === 'ticketed' ? 'selected' : ''}`}
//             onClick={() => setEventType('ticketed')}
//           >
//             <Ticket size={48} />
//             <h3>Ticketed Event</h3>
//             <p>My event requires tickets for entry</p>
//           </button>
//           <button 
//             className={`event-type-button ${eventType === 'free' ? 'selected' : ''}`}
//             onClick={() => setEventType('free')}
//           >
//             <CircleDollarSign size={48} />
//             <h3>Free Event</h3>
//             <p>I'm running a free event</p>
//           </button>
//         </div>

//         {eventType === 'ticketed' && (
//           <>
//             <h2 className="section-title">What tickets are you selling?</h2>
//             <div className="ticket-form">
//               <div className="input-group">
//                 <label htmlFor="ticketName">Ticket Name</label>
//                 <input 
//                   type="text" 
//                   id="ticketName"
//                   value={ticketName}
//                   onChange={(e) => setTicketName(e.target.value)}
//                   placeholder="Ticket Name e.g. General Admission"
//                 />
//               </div>
//               <div className="input-group">
//                 <label htmlFor="ticketPrice">Ticket Price</label>
//                 <div className="price-input">
//                   <span className="currency-symbol">₹</span>
//                   <input 
//                     type="number" 
//                     id="ticketPrice"
//                     value={ticketPrice}
//                     onChange={(e) => setTicketPrice(e.target.value)}
//                     step="0.01"
//                   />
//                 </div>
//               </div>
//               <button className="add-ticket-button">
//                 <Plus size={24} />
//               </button>
//             </div>
//           </>
//         )}

//         <div className="action-buttons">
//           <button className="secondary-button">Go back</button>
//           <button className="primary-button">Publish Event</button>
//         </div>
//       </main>
//     </div>
//     </>
//   );
// };

// export default EventDetailsPage;

// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, Ticket, CircleDollarSign, Plus } from 'lucide-react';
// import './EventDetailsPage.css';
// import Navbar from './components/Navbar';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const EventDetailsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [eventData, setEventData] = useState(location.state?.eventData || {});
//   const [ticketType, setTicketType] = useState('ticketed');
//   const [ticketName, setTicketName] = useState('');
//   const [ticketPrice, setTicketPrice] = useState('0.00');

//   useEffect(() => {
//     if (!location.state?.eventData) {
//       navigate('/create-event');
//     }
//   }, [location, navigate]);

//   const handlePublishEvent = async () => {
//     try {
//       const finalEventData = {
//         ...eventData,
//         ticketType,
//         ticketName: ticketType === 'ticketed' ? ticketName : '',
//         ticketPrice: ticketType === 'ticketed' ? parseFloat(ticketPrice) : 0,
//       };
//       await axios.post('http://localhost:3000/api/events', finalEventData);
//       navigate('/event-published');
//     } catch (error) {
//       console.error('Error publishing event:', error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="event-details-container">
//         <main className="main-content">
//           <div className="back-link">
//             <ChevronLeft size={24} onClick={() => navigate(-1)} />
//           </div>
//           <h1 className="event-title">{eventData.title}</h1>
//           <p className="event-info">{eventData.location}</p>
//           <p className="event-info">{eventData.startTime} - {eventData.endTime}</p>
//           <h2 className="section-title">What type of event are you running?</h2>
//           <div className="event-type-selection">
//             <button
//               className={`event-type-button ${ticketType === 'ticketed' ? 'selected' : ''}`}
//               onClick={() => setTicketType('ticketed')}
//             >
//               <Ticket size={48} />
//               <h3>Ticketed Event</h3>
//               <p>My event requires tickets for entry</p>
//             </button>
//             <button
//               className={`event-type-button ${ticketType === 'free' ? 'selected' : ''}`}
//               onClick={() => setTicketType('free')}
//             >
//               <CircleDollarSign size={48} />
//               <h3>Free Event</h3>
//               <p>I'm running a free event</p>
//             </button>
//           </div>
//           {ticketType === 'ticketed' && (
//             <>
//               <h2 className="section-title">What tickets are you selling?</h2>
//               <div className="ticket-form">
//                 <div className="input-group">
//                   <label htmlFor="ticketName">Ticket Name</label>
//                   <input
//                     type="text"
//                     id="ticketName"
//                     value={ticketName}
//                     onChange={(e) => setTicketName(e.target.value)}
//                     placeholder="Ticket Name e.g. General Admission"
//                   />
//                 </div>
//                 <div className="input-group">
//                   <label htmlFor="ticketPrice">Ticket Price</label>
//                   <div className="price-input">
//                     <span className="currency-symbol">₹</span>
//                     <input
//                       type="number"
//                       id="ticketPrice"
//                       value={ticketPrice}
//                       onChange={(e) => setTicketPrice(e.target.value)}
//                       step="0.01"
//                     />
//                   </div>
//                 </div>
//                 <button className="add-ticket-button">
//                   <Plus size={24} />
//                 </button>
//               </div>
//             </>
//           )}
//           <div className="action-buttons">
//             <button className="secondary-button" onClick={() => navigate(-1)}>Go back</button>
//             <button className="primary-button" onClick={handlePublishEvent}>Publish Event</button>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// };

// export default EventDetailsPage;

import React, { useState, useEffect } from 'react';
import { ChevronLeft, Ticket, CircleDollarSign, Plus } from 'lucide-react';
import './EventDetailsPage.css';
import Navbar from './components/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';

const EventDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState(null);
  const [ticketType, setTicketType] = useState('ticketed');
  const [ticketName, setTicketName] = useState('');
  const [ticketPrice, setTicketPrice] = useState('0.00');

  useEffect(() => {
    const fetchEventData = async () => {
      if (location.state?.eventId) {
        try {
          const response = await axios.get(`http://localhost:3000/api/events/${location.state.eventId}`);
          setEventData(response.data);
        } catch (error) {
          console.error('Error fetching event data:', error);
          navigate('/create-event');
        }
      } else {
        navigate('/create-event');
      }
    };

    fetchEventData();
  }, [location.state, navigate]);

  const handlePublishEvent = async () => {
    try {
      const updatedEventData = {
        ...eventData,
        ticketType,
        ticketName: ticketType === 'ticketed' ? ticketName : '',
        ticketPrice: ticketType === 'ticketed' ? parseFloat(ticketPrice) : 0,
      };
      await axios.patch(`http://localhost:3000/api/events/${eventData._id}`, updatedEventData);
      navigate('/'); // Navigate to home page
    } catch (error) {
      console.error('Error publishing event:', error);
    }
  };

  if (!eventData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="event-details-container">
        <main className="main-content">
          <div className="back-link">
            <ChevronLeft size={24} onClick={() => navigate(-1)} />
          </div>
          <h1 className="event-title">{eventData.title}</h1>
          <p className="event-info">{eventData.location}</p>
          <p className="event-info">{eventData.startTime} - {eventData.endTime}</p>
          <h2 className="section-title">What type of event are you running?</h2>
          <div className="event-type-selection">
            <button
              className={`event-type-button ${ticketType === 'ticketed' ? 'selected' : ''}`}
              onClick={() => setTicketType('ticketed')}
            >
              <Ticket size={48} />
              <h3>Ticketed Event</h3>
              <p>My event requires tickets for entry</p>
            </button>
            <button
              className={`event-type-button ${ticketType === 'free' ? 'selected' : ''}`}
              onClick={() => setTicketType('free')}
            >
              <CircleDollarSign size={48} />
              <h3>Free Event</h3>
              <p>I'm running a free event</p>
            </button>
          </div>
          {ticketType === 'ticketed' && (
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
            <button className="secondary-button" onClick={() => navigate(-1)}>Go back</button>
            <button className="primary-button" onClick={handlePublishEvent}>Publish Event</button>
          </div>
        </main>
      </div>
    </>
  );
};

export default EventDetailsPage;