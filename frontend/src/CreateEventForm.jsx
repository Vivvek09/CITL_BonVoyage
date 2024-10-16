// import React, { useState } from 'react';
// import { ChevronLeft } from 'lucide-react';
// import './CreateEventForm.css';
// import Navbar from './components/Navbar';

// const CreateEventForm = () => {
//   const [eventType, setEventType] = useState('single');

//   return (
//     <div className="create-event-container">
//       <Navbar />

//       <div className="back-title">
//         <ChevronLeft className="back-arrow" />
//         <h1 className='h1-heading'>Create a New Event</h1>
//       </div>

//       <form className="event-form">
//         <section>
//           <h2 className='h2-heading'>Event Details</h2>
//           <div className="form-group">
//             <label htmlFor="eventTitle">Event Title *</label>
//             <input type="text" id="eventTitle" placeholder="Enter the name of your event" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="eventCategory">Event Category *</label>
//             <select id="eventCategory">
//               <option>Please select one</option>
//             </select>
//           </div>
//         </section>

//         <section>
//           <h2 className='h2-heading'>Date & Time</h2>
//           <div className="form-group">
//             <label>Event Type *</label>
//             <div className="radio-group">
//               <label>
//                 <input type="radio" name="eventType" value="single" checked={eventType === 'single'} onChange={() => setEventType('single')} />
//                 <span>Single Event</span>
//               </label>
//               <label>
//                 <input type="radio" name="eventType" value="recurring" checked={eventType === 'recurring'} onChange={() => setEventType('recurring')} />
//                 <span>Recurring Event</span>
//               </label>
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="session">Session(s) *</label>
//               <input type="text" id="session" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="startDate">Start Date *</label>
//               <input type="text" id="startDate" placeholder="DD/MM/YY" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="startTime">Start Time *</label>
//               <input type="text" id="startTime" placeholder="12:00 AM" />
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="endTime">End Time</label>
//             <input type="text" id="endTime" placeholder="12:00 AM" />
//           </div>
//         </section>

//         <section>
//           <h2 className='h2-heading'>Location</h2>
//           <div className="form-group">
//             <label htmlFor="location">Where will your event take place? *</label>
//             <input type="text" id="location" placeholder="Please select one" />
//           </div>
//         </section>

//         <section>
//           <h2 className='info'>Additional Information</h2>
//           <div className="form-group">
//             <label htmlFor="eventDescription">Event Description *</label>
//             <textarea id="eventDescription" rows={4} placeholder="Describe what's special about your event & other important details."></textarea>
//           </div>
//         </section>

//         <div className="form-actions">
//           <button type="submit">Save & Continue</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateEventForm;

// import React, { useState } from 'react';
// import { ChevronLeft } from 'lucide-react';
// import './CreateEventForm.css';
// import Navbar from './components/Navbar';
// import { useNavigate } from 'react-router-dom';


// const CreateEventForm = () => {
//   const [eventType, setEventType] = useState('single');
//   const navigate=useNavigate();

//   const EventDetails=()=>
//   {
//     navigate('/eventdetails');
//   }
  
//   return (
//     <>
//     <Navbar />
//     <div className="outer-container"> {/* New outer container with gradient background */}
      

//       <div className="create-event-card"> {/* New card for white background */}
//         <div className="back-title">
//           <ChevronLeft className="back-arrow" />
//           <h1 className='h1-heading'>Create a New Event</h1>
//         </div>

//         <form className="event-form">
//           <section>
//             <h2 className='h2-heading'>Event Details</h2>
//             <div className="form-group">
//               <label htmlFor="eventTitle">Event Title *</label>
//               <input type="text" id="eventTitle" placeholder="Enter the name of your event" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="eventCategory">Event Category *</label>
//               <select id="eventCategory">
//                 <option>Please select one</option>
//               </select>
//             </div>
//           </section>

//           <section>
//             <h2 className='h2-heading'>Date & Time</h2>
//             <div className="form-group">
//               <label>Event Type *</label>
//               <div className="radio-group">
//                 <label>
//                   <input type="radio" name="eventType" value="single" checked={eventType === 'single'} onChange={() => setEventType('single')} />
//                   <span>Single Event</span>
//                 </label>
//                 <label>
//                   <input type="radio" name="eventType" value="recurring" checked={eventType === 'recurring'} onChange={() => setEventType('recurring')} />
//                   <span>Recurring Event</span>
//                 </label>
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="session">Session(s) *</label>
//                 <input type="text" id="session" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="startDate">Start Date *</label>
//                 <input type="text" id="startDate" placeholder="DD/MM/YY" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="startTime">Start Time *</label>
//                 <input type="text" id="startTime" placeholder="12:00 AM" />
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="endTime">End Time</label>
//               <input type="text" id="endTime" placeholder="12:00 AM" />
//             </div>
//           </section>

//           <section>
//             <h2 className='h2-heading'>Location</h2>
//             <div className="form-group">
//               <label htmlFor="location">Where will your event take place? *</label>
//               <input type="text" id="location" placeholder="Please select one" />
//             </div>
//           </section>

//           <section>
//             <h2 className='info'>Additional Information</h2>
//             <div className="form-group">
//               <label htmlFor="eventDescription">Event Description *</label>
//               <textarea id="eventDescription" rows={4} placeholder="Describe what's special about your event & other important details."></textarea>
//             </div>
//           </section>

//           <div className="form-actions">
//             <button onClick={EventDetails} type="submit" >Save & Continue</button>
//           </div>
//         </form>
//       </div>
//     </div>
//     </>
//   );
// };

// export default CreateEventForm;

// import React, { useState } from 'react';
// import { ChevronLeft } from 'lucide-react';
// import './CreateEventForm.css';
// import Navbar from './components/Navbar';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import EventDetailsPage from './EventDetailsPage';

// const CreateEventForm = () => {
//   const [eventData, setEventData] = useState({
//     title: '',
//     category: '',
//     eventType: 'single',
//     session: '',
//     startDate: '',
//     startTime: '',
//     endTime: '',
//     location: '',
//     description: '',
//   });
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setEventData({ ...eventData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/api/events', eventData);
//       navigate('/eventdetails', { state: { eventId: response.data._id } });
//     } catch (error) {
//       console.error('Error creating event:', error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="outer-container">
//         <div className="create-event-card">
//           <div className="back-title">
//             <ChevronLeft className="back-arrow" onClick={() => navigate(-1)} />
//             <h1 className='h1-heading'>Create a New Event</h1>
//           </div>
//           <form className="event-form" onSubmit={handleSubmit}>
//             <section>
//               <h2 className='h2-heading'>Event Details</h2>
//               <div className="form-group">
//                 <label htmlFor="title">Event Title *</label>
//                 <input
//                   type="text"
//                   id="title"
//                   name="title"
//                   value={eventData.title}
//                   onChange={handleInputChange}
//                   placeholder="Enter the name of your event"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="category">Event Category *</label>
//                 <select
//                   id="category"
//                   name="category"
//                   value={eventData.category}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="">Please select one</option>
//                   <option value="music">Music</option>
//                   <option value="sports">Sports</option>
//                   <option value="arts">Arts</option>
//                   {/* Add more categories as needed */}
//                 </select>
//               </div>
//             </section>
//             <section>
//               <h2 className='h2-heading'>Date & Time</h2>
//               <div className="form-group">
//                 <label>Event Type *</label>
//                 <div className="radio-group">
//                   <label>
//                     <input
//                       type="radio"
//                       name="eventType"
//                       value="single"
//                       checked={eventData.eventType === 'single'}
//                       onChange={handleInputChange}
//                     />
//                     <span>Single Event</span>
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       name="eventType"
//                       value="recurring"
//                       checked={eventData.eventType === 'recurring'}
//                       onChange={handleInputChange}
//                     />
//                     <span>Recurring Event</span>
//                   </label>
//                 </div>
//               </div>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="session">Session(s) *</label>
//                   <input
//                     type="text"
//                     id="session"
//                     name="session"
//                     value={eventData.session}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="startDate">Start Date *</label>
//                   <input
//                     type="date"
//                     id="startDate"
//                     name="startDate"
//                     value={eventData.startDate}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="startTime">Start Time *</label>
//                   <input
//                     type="time"
//                     id="startTime"
//                     name="startTime"
//                     value={eventData.startTime}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="endTime">End Time</label>
//                 <input
//                   type="time"
//                   id="endTime"
//                   name="endTime"
//                   value={eventData.endTime}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </section>
//             <section>
//               <h2 className='h2-heading'>Location</h2>
//               <div className="form-group">
//                 <label htmlFor="location">Where will your event take place? *</label>
//                 <input
//                   type="text"
//                   id="location"
//                   name="location"
//                   value={eventData.location}
//                   onChange={handleInputChange}
//                   placeholder="Enter event location"
//                   required
//                 />
//               </div>
//             </section>
//             <section>
//               <h2 className='info'>Additional Information</h2>
//               <div className="form-group">
//                 <label htmlFor="description">Event Description *</label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   value={eventData.description}
//                   onChange={handleInputChange}
//                   rows={4}
//                   placeholder="Describe what's special about your event & other important details."
//                   required
//                 ></textarea>
//               </div>
//             </section>
//             <div className="form-actions">
//               <button type="submit" onClick={handleSubmit}>Save & Continue</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreateEventForm;

// import React, { useState } from 'react';
// import { ChevronLeft } from 'lucide-react';
// import './CreateEventForm.css';
// import Navbar from './components/Navbar';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const CreateEventForm = () => {
//   const [eventData, setEventData] = useState({
//     title: '',
//     category: '',
//     eventType: 'single',
//     session: '',
//     date: '', // Added date field
//     startTime: '',
//     endTime: '',
//     location: '',
//     description: '',
//     ticketType: 'free', // Default to free event
//     ticketName: '',
//     ticketPrice: 0,
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setEventData({ ...eventData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     // Basic client-side validation
//     if (!eventData.title || !eventData.date || !eventData.location) {
//       setError('Please fill in all required fields.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:3000/api/events', eventData);
//       navigate('/eventdetails', { state: { eventId: response.data._id } });
//     } catch (error) {
//       console.error('Error creating event:', error);
//       setError(error.response?.data?.message || 'An error occurred while creating the event.');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="outer-container">
//         <div className="create-event-card">
//           <div className="back-title">
//             <ChevronLeft className="back-arrow" onClick={() => navigate('/')} />
//             <h1 className='h1-heading'>Create a New Event</h1>
//           </div>
//           {error && <div className="error-message">{error}</div>}
//           <form className="event-form" onSubmit={handleSubmit}>
//             <section>
//               <h2 className='h2-heading'>Event Details</h2>
//               <div className="form-group">
//                 <label htmlFor="title">Event Title *</label>
//                 <input
//                   type="text"
//                   id="title"
//                   name="title"
//                   value={eventData.title}
//                   onChange={handleInputChange}
//                   placeholder="Enter the name of your event"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="category">Event Category *</label>
//                 <select
//                   id="category"
//                   name="category"
//                   value={eventData.category}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="">Please select one</option>
//                   <option value="music">Music</option>
//                   <option value="sports">Sports</option>
//                   <option value="arts">Arts</option>
//                   {/* Add more categories as needed */}
//                 </select>
//               </div>
//             </section>
//             <section>
//               <h2 className='h2-heading'>Date & Time</h2>
//               <div className="form-group">
//                 <label>Event Type *</label>
//                 <div className="radio-group">
//                   <label>
//                     <input
//                       type="radio"
//                       name="eventType"
//                       value="single"
//                       checked={eventData.eventType === 'single'}
//                       onChange={handleInputChange}
//                     />
//                     <span>Single Event</span>
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       name="eventType"
//                       value="recurring"
//                       checked={eventData.eventType === 'recurring'}
//                       onChange={handleInputChange}
//                     />
//                     <span>Recurring Event</span>
//                   </label>
//                 </div>
//               </div>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="session">Session(s) *</label>
//                   <input
//                     type="text"
//                     id="session"
//                     name="session"
//                     value={eventData.session}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="date">Event Date *</label>
//                   <input
//                     type="date"
//                     id="date"
//                     name="date"
//                     value={eventData.date}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="startTime">Start Time *</label>
//                   <input
//                     type="time"
//                     id="startTime"
//                     name="startTime"
//                     value={eventData.startTime}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
              
//               <div className="form-group">
//                 <label htmlFor="endTime">End Time</label>
//                 <input
//                   type="time"
//                   id="endTime"
//                   name="endTime"
//                   value={eventData.endTime}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               </div>
//             </section>
//             <section>
//               <h2 className='h2-heading'>Location</h2>
//               <div className="form-group">
//                 <label htmlFor="location">Where will your event take place? *</label>
//                 <input
//                   type="text"
//                   id="location"
//                   name="location"
//                   value={eventData.location}
//                   onChange={handleInputChange}
//                   placeholder="Enter event location"
//                   required
//                 />
//               </div>
//             </section>
//             <section>
//               <h2 className='info'>Additional Information</h2>
//               <div className="form-group">
//                 <label htmlFor="description">Event Description *</label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   value={eventData.description}
//                   onChange={handleInputChange}
//                   rows={4}
//                   placeholder="Describe what's special about your event & other important details."
//                   required
//                 ></textarea>
//               </div>
//             </section>
//             <section>
//               </section>
//             <div className="form-actions">
//               <button type="submit">Save & Continue</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreateEventForm;



import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft } from 'lucide-react';
import './CreateEventForm.css';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateEventForm = () => {
  const [eventData, setEventData] = useState({
    title: '',
    category: '',
    eventType: 'single',
    session: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    description: '',
    ticketType: 'free',
    ticketName: '',
    ticketPrice: 0,
    image: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    // Load the Cloudinary script
    const script = document.createElement('script');
    script.src = 'https://upload-widget.cloudinary.com/global/all.js';
    script.async = true;
    script.onload = () => {
      // Initialize the Cloudinary widget after the script has loaded
      cloudinaryRef.current = window.cloudinary;
      widgetRef.current = cloudinaryRef.current.createUploadWidget(
        {
          cloudName: 'dazja1fkb',
          uploadPreset: 'sbrdp6ml',
        },
        function (error, result) {
          if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
            setEventData(prevData => ({
              ...prevData,
              image: result.info.secure_url
            }));
          }
        }
      );
    };
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!eventData.title || !eventData.date || !eventData.location) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/events', eventData);
      navigate('/eventdetails', { state: { eventId: response.data._id } });
    } catch (error) {
      console.error('Error creating event:', error);
      setError(error.response?.data?.message || 'An error occurred while creating the event.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="outer-container">
        <div className="create-event-card">
          <div className="back-title">
            <ChevronLeft className="back-arrow" onClick={() => navigate('/')} />
            <h1 className='h1-heading'>Create a New Event</h1>
          </div>
          {error && <div className="error-message">{error}</div>}
          <form className="event-form" onSubmit={handleSubmit}>
            <section>
              <h2 className='h2-heading'>Event Details</h2>
              <div className="form-group">
                <label htmlFor="title">Event Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={eventData.title}
                  onChange={handleInputChange}
                  placeholder="Enter the name of your event"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Event Category *</label>
                <select
                  id="category"
                  name="category"
                  value={eventData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Please select one</option>
                  <option value="music">Music</option>
                  <option value="sports">Sports</option>
                  <option value="arts">Arts</option>
                  {/* Add more categories as needed */}
                </select>
              </div>
            </section>
            <section>
              <h2 className='h2-heading'>Date & Time</h2>
              <div className="form-group">
                <label>Event Type *</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="eventType"
                      value="single"
                      checked={eventData.eventType === 'single'}
                      onChange={handleInputChange}
                    />
                    <span>Single Event</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="eventType"
                      value="recurring"
                      checked={eventData.eventType === 'recurring'}
                      onChange={handleInputChange}
                    />
                    <span>Recurring Event</span>
                  </label>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="session">Session(s) *</label>
                  <input
                    type="text"
                    id="session"
                    name="session"
                    value={eventData.session}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Event Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={eventData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="startTime">Start Time *</label>
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={eventData.startTime}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endTime">End Time</label>
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={eventData.endTime}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </section>
            <section>
              <h2 className='h2-heading'>Location</h2>
              <div className="form-group">
                <label htmlFor="location">Where will your event take place? *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={eventData.location}
                  onChange={handleInputChange}
                  placeholder="Enter event location"
                  required
                />
              </div>
            </section>
            <section>
              <h2 className='info'>Additional Information</h2>
              <div className="form-group">
                <label htmlFor="description">Event Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={eventData.description}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Describe what's special about your event & other important details."
                  required
                ></textarea>
              </div>
            </section>
            <section>
              <h2 className='h2-heading'>Event Image</h2>
              <div className="form-group">
                <button
                  type="button"
                  onClick={() => widgetRef.current.open()}
                  className="upload-button"
                >
                  Upload Image
                </button>
                {eventData.image && (
                  <div className="image-preview">
                    <img src={eventData.image} alt="Event preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                  </div>
                )}
              </div>
            </section>
            <div className="form-actions">
              <button type="submit">Save & Continue</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEventForm;