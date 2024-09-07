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

import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import './CreateEventForm.css';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';


const CreateEventForm = () => {
  const [eventType, setEventType] = useState('single');
  const navigate=useNavigate();

  const EventDetails=()=>
  {
    navigate('/eventdetails');
  }
  
  return (
    <>
    <Navbar />
    <div className="outer-container"> {/* New outer container with gradient background */}
      

      <div className="create-event-card"> {/* New card for white background */}
        <div className="back-title">
          <ChevronLeft className="back-arrow" />
          <h1 className='h1-heading'>Create a New Event</h1>
        </div>

        <form className="event-form">
          <section>
            <h2 className='h2-heading'>Event Details</h2>
            <div className="form-group">
              <label htmlFor="eventTitle">Event Title *</label>
              <input type="text" id="eventTitle" placeholder="Enter the name of your event" />
            </div>
            <div className="form-group">
              <label htmlFor="eventCategory">Event Category *</label>
              <select id="eventCategory">
                <option>Please select one</option>
              </select>
            </div>
          </section>

          <section>
            <h2 className='h2-heading'>Date & Time</h2>
            <div className="form-group">
              <label>Event Type *</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="eventType" value="single" checked={eventType === 'single'} onChange={() => setEventType('single')} />
                  <span>Single Event</span>
                </label>
                <label>
                  <input type="radio" name="eventType" value="recurring" checked={eventType === 'recurring'} onChange={() => setEventType('recurring')} />
                  <span>Recurring Event</span>
                </label>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="session">Session(s) *</label>
                <input type="text" id="session" />
              </div>
              <div className="form-group">
                <label htmlFor="startDate">Start Date *</label>
                <input type="text" id="startDate" placeholder="DD/MM/YY" />
              </div>
              <div className="form-group">
                <label htmlFor="startTime">Start Time *</label>
                <input type="text" id="startTime" placeholder="12:00 AM" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="endTime">End Time</label>
              <input type="text" id="endTime" placeholder="12:00 AM" />
            </div>
          </section>

          <section>
            <h2 className='h2-heading'>Location</h2>
            <div className="form-group">
              <label htmlFor="location">Where will your event take place? *</label>
              <input type="text" id="location" placeholder="Please select one" />
            </div>
          </section>

          <section>
            <h2 className='info'>Additional Information</h2>
            <div className="form-group">
              <label htmlFor="eventDescription">Event Description *</label>
              <textarea id="eventDescription" rows={4} placeholder="Describe what's special about your event & other important details."></textarea>
            </div>
          </section>

          <div className="form-actions">
            <button onClick={EventDetails} type="submit" >Save & Continue</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default CreateEventForm;
