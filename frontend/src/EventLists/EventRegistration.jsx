// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../components/Navbar';

// const EventRegistration = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: ''
//   });
//   const [members, setMembers] = useState([]);
//   const [event, setEvent] = useState(null);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch event details and existing members
//     const fetchData = async () => {
//       try {
//         const eventRes = await axios.get(`http://localhost:3000/api/events/${id}`);
//         setEvent(eventRes.data);
        
//         const membersRes = await axios.get(`http://localhost:3000/api/events/${id}/members`);
//         setMembers(membersRes.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`http://localhost:3000/api/events/${id}/register`, formData);
//       navigate(`/events/${id}`);
//     } catch (error) {
//       console.error("Error registering for event:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="event-registration-wrapper">
//       <Navbar />
//       <div className="max-w-4xl mx-auto p-6">
//         <h1 className="text-2xl font-bold mb-6">Register for {event?.title}</h1>
        
//         {/* Registration Form */}
//         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//                 id="name"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//                 id="email"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
//                 Phone Number
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//                 id="phone"
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               type="submit"
//             >
//               Register
//             </button>
//           </form>
//         </div>

//         {/* Existing Members List */}
//         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
//           <h2 className="text-xl font-bold mb-4">Current Members</h2>
//           {members.length > 0 ? (
//             <div className="divide-y">
//               {members.map((member, index) => (
//                 <div key={index} className="py-4">
//                   <h3 className="font-medium">{member.name}</h3>
//                   <p className="text-gray-600 text-sm">{member.email}</p>
//                   <p className="text-gray-600 text-sm">{member.phone}</p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-600">No members have joined yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventRegistration;


// components/EventRegistration.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../components/Navbar';

// const EventRegistration = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: ''
//   });
//   const [members, setMembers] = useState([]);
//   const [event, setEvent] = useState(null);
//   const [error, setError] = useState('');
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const eventRes = await axios.get(`http://localhost:3000/api/events/${id}`);
//         setEvent(eventRes.data);
        
//         const membersRes = await axios.get(`http://localhost:3000/api/events/${id}/members`);
//         setMembers(membersRes.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError('Error loading event data');
//       }
//     };
//     fetchData();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       const response = await axios.post(`http://localhost:3000/api/events/${id}/register`, formData);
//       console.log('Registration successful:', response.data);
//       // Refresh members list
//       const membersRes = await axios.get(`http://localhost:3000/api/events/${id}/members`);
//       setMembers(membersRes.data);
//       // Optional: Navigate back to event page
//       navigate(`/events/${id}`);
//     } catch (error) {
//       console.error("Error registering for event:", error);
//       setError(error.response?.data?.message || 'Error registering for event');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   if (error) {
//     return (
//       <div className="event-registration-wrapper">
//         <Navbar />
//         <div className="max-w-4xl mx-auto p-6">
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//             {error}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="event-registration-wrapper">
//       <Navbar />
//       <div className="max-w-4xl mx-auto p-6">
//         <h1 className="text-2xl font-bold mb-6">Register for {event?.title}</h1>
        
//         {/* Registration Form */}
//         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//                 id="name"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//                 id="email"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
//                 Phone Number
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//                 id="phone"
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               type="submit"
//             >
//               Register
//             </button>
//           </form>
//         </div>

//         {/* Existing Members List */}
//         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
//           <h2 className="text-xl font-bold mb-4">Current Members</h2>
//           {members.length > 0 ? (
//             <div className="divide-y">
//               {members.map((member, index) => (
//                 <div key={index} className="py-4">
//                   <h3 className="font-medium">{member.name}</h3>
//                   <p className="text-gray-600 text-sm">{member.email}</p>
//                   <p className="text-gray-600 text-sm">{member.phone}</p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-600">No members have joined yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventRegistration;



// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../components/Navbar';

// const EventRegistration = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: ''
//   });
//   const [members, setMembers] = useState([]);
//   const [event, setEvent] = useState(null);
//   const [error, setError] = useState('');
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const eventRes = await axios.get(`http://localhost:3000/api/events/${id}`);
//         setEvent(eventRes.data);
        
//         const membersRes = await axios.get(`http://localhost:3000/api/events/${id}/members`);
//         setMembers(membersRes.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError('Error loading event data');
//       }
//     };
//     fetchData();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       const response = await axios.post(`http://localhost:3000/api/events/${id}/register`, formData);
//       console.log('Registration successful:', response.data);
      
//       // Store email in localStorage for confirmation page
//       localStorage.setItem('registeredEmail', formData.email);
      
//       // Navigate to confirmation page
//       navigate(`/events/${id}/confirmation`);
//     } catch (error) {
//       console.error("Error registering for event:", error);
//       setError(error.response?.data?.message || 'Error registering for event');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   if (error) {
//     return (
//       <div className="event-registration-wrapper">
//         <Navbar />
//         <div className="max-w-4xl mx-auto p-6">
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//             {error}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="event-registration-wrapper">
//       <Navbar />
//       <div className="max-w-4xl mx-auto p-6">
//         <h1 className="text-2xl font-bold mb-6">Register for {event?.title}</h1>
        
//         {/* Registration Form */}
//         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//                 id="name"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//                 id="email"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
//                 Phone Number
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//                 id="phone"
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               type="submit"
//             >
//               Register
//             </button>
//           </form>
//         </div>

//         {/* Existing Members List */}
//         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
//           <h2 className="text-xl font-bold mb-4">Current Members</h2>
//           {members.length > 0 ? (
//             <div className="divide-y">
//               {members.map((member, index) => (
//                 <div key={index} className="py-4">
//                   <h3 className="font-medium">{member.name}</h3>
//                   <p className="text-gray-600 text-sm">{member.email}</p>
//                   <p className="text-gray-600 text-sm">{member.phone}</p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-600">No members have joined yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventRegistration;




import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [members, setMembers] = useState([]);
  const [event, setEvent] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventRes = await axios.get(`http://localhost:3000/api/events/${id}`);
        setEvent(eventRes.data);
        
        const membersRes = await axios.get(`http://localhost:3000/api/events/${id}/members`);
        setMembers(membersRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError('Error loading event data');
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post(`http://localhost:3000/api/events/${id}/register`, formData);
      console.log('Registration successful:', response.data);
      
      // Store email in localStorage for confirmation page
      localStorage.setItem('registeredEmail', formData.email);
      
      // Navigate to confirmation page
      navigate(`/events/${id}/confirmation`);
    } catch (error) {
      console.error("Error registering for event:", error);
      setError(error.response?.data?.message || 'Error registering for event');
    }

    
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (error) {
    return (
      <div className="event-registration-wrapper">
        <Navbar />
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="event-registration-wrapper">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Register for {event?.title}</h1>
        
        {/* Registration Form */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>

        {/* Existing Members List */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h2 className="text-xl font-bold mb-4">Current Members</h2>
          {members.length > 0 ? (
            <div className="divide-y">
              {members.map((member, index) => (
                <div key={index} className="py-4">
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.email}</p>
                  <p className="text-gray-600 text-sm">{member.phone}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No members have joined yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;