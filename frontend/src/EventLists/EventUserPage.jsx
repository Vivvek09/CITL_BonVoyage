// import React, { useState, useEffect } from 'react';
// import { Calendar, Clock, MapPin, Users, MessageCircle, Ticket } from 'lucide-react';
// import axios from 'axios';
// import GroupChat from './GroupChat'

// const EventUserPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [registeredMembers, setRegisteredMembers] = useState([]);
//   const [activeTab, setActiveTab] = useState('details');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch user data
//         const userEmail = localStorage.getItem('userEmail');
//         if (userEmail) {
//           const userResponse = await axios.get('http://localhost:3000/api/users/current');
//           setCurrentUser(userResponse.data);
//         }

//         // Fetch registered events
//         const eventsResponse = await axios.get('http://localhost:3000/api/events');
//         setEvents(eventsResponse.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load events');
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const fetchEventDetails = async (eventId) => {
//     try {
//       const membersResponse = await axios.get(`http://localhost:3000/api/events/${eventId}/members`);
//       setRegisteredMembers(membersResponse.data);
//     } catch (err) {
//       console.error('Error fetching members:', err);
//     }
//   };

//   const handleEventSelect = async (event) => {
//     setSelectedEvent(event);
//     await fetchEventDetails(event._id);
//     setActiveTab('details');
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-4 text-red-500">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* Events List */}
//         <div className="md:col-span-1 bg-white rounded-lg shadow p-4">
//           <h2 className="text-xl font-bold mb-4">Your Events</h2>
//           <div className="space-y-2">
//             {events.map((event) => (
//               <button
//                 key={event._id}
//                 onClick={() => handleEventSelect(event)}
//                 className={`w-full text-left p-3 rounded-lg transition-colors ${
//                   selectedEvent?._id === event._id
//                     ? 'bg-blue-50 border-blue-500'
//                     : 'hover:bg-gray-50'
//                 }`}
//               >
//                 <h3 className="font-medium">{event.title}</h3>
//                 <p className="text-sm text-gray-500">{event.location}</p>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Event Details */}
//         <div className="md:col-span-2">
//           {selectedEvent ? (
//             <div className="bg-white rounded-lg shadow">
//               {/* Event Header */}
//               <div className="p-6 border-b">
//                 <h1 className="text-2xl font-bold mb-4">{selectedEvent.title}</h1>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="flex items-center text-gray-600">
//                     <Calendar className="w-5 h-5 mr-2" />
//                     <span>{new Date(selectedEvent.date).toLocaleDateString()}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <Clock className="w-5 h-5 mr-2" />
//                     <span>{selectedEvent.startTime} - {selectedEvent.endTime}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <MapPin className="w-5 h-5 mr-2" />
//                     <span>{selectedEvent.location}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <Ticket className="w-5 h-5 mr-2" />
//                     <span>{selectedEvent.ticketType === 'free' ? 'Free Event' : `₹${selectedEvent.ticketPrice}`}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Tabs */}
//               <div className="border-b">
//                 <nav className="flex">
//                   <button
//                     onClick={() => setActiveTab('details')}
//                     className={`px-6 py-3 border-b-2 font-medium ${
//                       activeTab === 'details'
//                         ? 'border-blue-500 text-blue-600'
//                         : 'border-transparent text-gray-500 hover:text-gray-700'
//                     }`}
//                   >
//                     Details
//                   </button>
//                   <button
//                     onClick={() => setActiveTab('members')}
//                     className={`px-6 py-3 border-b-2 font-medium ${
//                       activeTab === 'members'
//                         ? 'border-blue-500 text-blue-600'
//                         : 'border-transparent text-gray-500 hover:text-gray-700'
//                     }`}
//                   >
//                     <span className="flex items-center">
//                       <Users className="w-4 h-4 mr-2" />
//                       Members ({registeredMembers.length})
//                     </span>
//                   </button>
//                   <button
//                     onClick={() => setActiveTab('chat')}
//                     className={`px-6 py-3 border-b-2 font-medium ${
//                       activeTab === 'chat'
//                         ? 'border-blue-500 text-blue-600'
//                         : 'border-transparent text-gray-500 hover:text-gray-700'
//                     }`}
//                   >
//                     <span className="flex items-center">
//                       <MessageCircle className="w-4 h-4 mr-2" />
//                       Group Chat
//                     </span>
//                   </button>
//                 </nav>
//               </div>

//               {/* Tab Content */}
//               <div className="p-6">
//                 {activeTab === 'details' && (
//                   <div className="prose max-w-none">
//                     <p className="text-gray-600">{selectedEvent.description}</p>
//                   </div>
//                 )}

//                 {activeTab === 'members' && (
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {registeredMembers.map((member) => (
//                       <div
//                         key={member._id}
//                         className="bg-gray-50 p-4 rounded-lg"
//                       >
//                         <h3 className="font-medium">{member.name}</h3>
//                         <p className="text-gray-600 text-sm">{member.email}</p>
//                         <p className="text-gray-500 text-xs">
//                           Joined {new Date(member.joinedAt).toLocaleDateString()}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {activeTab === 'chat' && (
//                   <GroupChat
//                     eventId={selectedEvent._id}
//                     userId={currentUser?._id}
//                   />
//                 )}
//               </div>
//             </div>
//           ) : (
//             <div className="bg-gray-50 rounded-lg p-8 text-center">
//               <h3 className="text-gray-500">Select an event to view details</h3>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventUserPage;



// import React, { useState, useEffect } from 'react';
// import { Calendar, Clock, MapPin, Users, MessageCircle, Ticket } from 'lucide-react';
// import axios from 'axios';
// import GroupChat from './GroupChat'

// const EventUserPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [registeredMembers, setRegisteredMembers] = useState([]);
//   const [activeTab, setActiveTab] = useState('details');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Get the auth token from localStorage
//         const token = localStorage.getItem('token'); // or however you store your auth token
        
//         if (!token) {
//           setError('Authentication token not found');
//           setLoading(false);
//           return;
//         }

//         // Set up axios default headers
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

//         // Fetch current user data
//         const userResponse = await axios.get('http://localhost:3000/api/users/current');
//         const userData = userResponse.data;
//         setCurrentUser(userData);

//         // Fetch registered events for the user
//         if (userData && userData._id) {
//           const registeredEventsResponse = await axios.get(
//             `http://localhost:3000/api/users/${userData._id}/registered-events`
//           );
//           setEvents(registeredEventsResponse.data);
//         }

//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         if (err.response?.status === 401) {
//           setError('Your session has expired. Please log in again.');
//         } else {
//           setError('Failed to load your registered events');
//         }
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const fetchEventDetails = async (eventId) => {
//     try {
//       const membersResponse = await axios.get(`http://localhost:3000/api/events/${eventId}/members`);
//       setRegisteredMembers(membersResponse.data);
//     } catch (err) {
//       console.error('Error fetching members:', err);
//     }
//   };

//   const handleEventSelect = async (event) => {
//     setSelectedEvent(event);
//     await fetchEventDetails(event._id);
//     setActiveTab('details');
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-4 text-red-500 text-center">
//         <p>{error}</p>
//         {error.includes('session has expired') && (
//           <button
//             onClick={() => window.location.href = '/login'} // Adjust the login path as needed
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Go to Login
//           </button>
//         )}
//       </div>
//     );
//   }

//   // Rest of the component remains the same...
//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* Events List */}
//         <div className="md:col-span-1 bg-white rounded-lg shadow p-4">
//           <h2 className="text-xl font-bold mb-4">Your Registered Events</h2>
//           {events.length > 0 ? (
//             <div className="space-y-2">
//               {events.map((event) => (
//                 <button
//                   key={event._id}
//                   onClick={() => handleEventSelect(event)}
//                   className={`w-full text-left p-3 rounded-lg transition-colors ${
//                     selectedEvent?._id === event._id
//                       ? 'bg-blue-50 border-blue-500'
//                       : 'hover:bg-gray-50'
//                   }`}
//                 >
//                   <h3 className="font-medium">{event.title}</h3>
//                   <p className="text-sm text-gray-500">{event.location}</p>
//                 </button>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500 text-center py-4">
//               You haven't registered for any events yet.
//             </p>
//           )}
//         </div>

//         {/* Event Details Section - Same as before */}
//         <div className="md:col-span-2">
//           {selectedEvent ? (
//             <div className="bg-white rounded-lg shadow">
//               {/* Event Header */}
//               <div className="p-6 border-b">
//                 <h1 className="text-2xl font-bold mb-4">{selectedEvent.title}</h1>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="flex items-center text-gray-600">
//                     <Calendar className="w-5 h-5 mr-2" />
//                     <span>{new Date(selectedEvent.date).toLocaleDateString()}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <Clock className="w-5 h-5 mr-2" />
//                     <span>{selectedEvent.startTime} - {selectedEvent.endTime}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <MapPin className="w-5 h-5 mr-2" />
//                     <span>{selectedEvent.location}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <Ticket className="w-5 h-5 mr-2" />
//                     <span>{selectedEvent.ticketType === 'free' ? 'Free Event' : `₹${selectedEvent.ticketPrice}`}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Tabs */}
//               <div className="border-b">
//                 <nav className="flex">
//                   <button
//                     onClick={() => setActiveTab('details')}
//                     className={`px-6 py-3 border-b-2 font-medium ${
//                       activeTab === 'details'
//                         ? 'border-blue-500 text-blue-600'
//                         : 'border-transparent text-gray-500 hover:text-gray-700'
//                     }`}
//                   >
//                     Details
//                   </button>
//                   <button
//                     onClick={() => setActiveTab('members')}
//                     className={`px-6 py-3 border-b-2 font-medium ${
//                       activeTab === 'members'
//                         ? 'border-blue-500 text-blue-600'
//                         : 'border-transparent text-gray-500 hover:text-gray-700'
//                     }`}
//                   >
//                     <span className="flex items-center">
//                       <Users className="w-4 h-4 mr-2" />
//                       Members ({registeredMembers.length})
//                     </span>
//                   </button>
//                   <button
//                     onClick={() => setActiveTab('chat')}
//                     className={`px-6 py-3 border-b-2 font-medium ${
//                       activeTab === 'chat'
//                         ? 'border-blue-500 text-blue-600'
//                         : 'border-transparent text-gray-500 hover:text-gray-700'
//                     }`}
//                   >
//                     <span className="flex items-center">
//                       <MessageCircle className="w-4 h-4 mr-2" />
//                       Group Chat
//                     </span>
//                   </button>
//                 </nav>
//               </div>

//               {/* Tab Content */}
//               <div className="p-6">
//                 {activeTab === 'details' && (
//                   <div className="prose max-w-none">
//                     <p className="text-gray-600">{selectedEvent.description}</p>
//                   </div>
//                 )}

//                 {activeTab === 'members' && (
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {registeredMembers.map((member) => (
//                       <div
//                         key={member._id}
//                         className="bg-gray-50 p-4 rounded-lg"
//                       >
//                         <h3 className="font-medium">{member.name}</h3>
//                         <p className="text-gray-600 text-sm">{member.email}</p>
//                         <p className="text-gray-500 text-xs">
//                           Joined {new Date(member.joinedAt).toLocaleDateString()}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {activeTab === 'chat' && (
//                   <GroupChat
//                     eventId={selectedEvent._id}
//                     userId={currentUser?._id}
//                   />
//                 )}
//               </div>
//             </div>
//           ) : (
//             <div className="bg-gray-50 rounded-lg p-8 text-center">
//               <h3 className="text-gray-500">Select an event to view details</h3>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventUserPage;


// const EventUserPage = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [registeredMembers, setRegisteredMembers] = useState([]);
//   const [activeTab, setActiveTab] = useState('details');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [currentUser, setCurrentUser] = useState(null);

// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Check multiple possible token keys
//         const token = localStorage.getItem('jwt') || 
//                      localStorage.getItem('accessToken') || 
//                      localStorage.getItem('userToken') ||
//                      localStorage.getItem('token');

//         console.log('Available localStorage keys:', Object.keys(localStorage));
                     
//         if (!token) {
//           setError('No authentication credentials found');
//           setLoading(false);
//           return;
//         }

//         // Set up axios default headers
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

//         // First fetch current user
//         const userResponse = await axios.get('http://localhost:3000/api/users/current', {
//           withCredentials: true
//         });
        
//         const userData = userResponse.data;
//         console.log('User data fetched:', userData); // Debug log
//         setCurrentUser(userResponse.data);

//         // Then fetch registered events using the user's ID
//         if (userResponse.data && userResponse.data._id) {
//           try {
//             const registeredEventsResponse = await axios.get(
//               `http://localhost:3000/api/users/${userResponse.data._id}/registered-events`,
//               { withCredentials: true }
//             );
            
//             if (registeredEventsResponse.data) {
//               console.log('Events fetched:', registeredEventsResponse.data); // Debug log
//               setEvents(registeredEventsResponse.data);
//             } else {
//               setEvents([]);
//             }
//           } catch (eventError) {
//             console.error('Error fetching events:', eventError);
//             setError('Failed to load your registered events');
//           }
//         }

//         setLoading(false);
//       } catch (err) {
//         console.error('Error in fetchData:', err);
//         if (err.response?.status === 401) {
//           setError('Authentication failed. Please log in again.');
//         } else {
//           setError(`Failed to load your data: ${err.message}`);
//         }
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);


    //    useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       // Check token
    //       const token = localStorage.getItem('jwt') || 
    //                    localStorage.getItem('accessToken') || 
    //                    localStorage.getItem('userToken') ||
    //                    localStorage.getItem('token');
                       
    //       if (!token) {
    //         console.error('No token found in localStorage');
    //         setError('No authentication credentials found');
    //         setLoading(false);
    //         return;
    //       }

    //       // Configure axios defaults
    //       axios.defaults.withCredentials = true;
    //       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          
    //       // Create axios instance with base configuration
    //       const axiosInstance = axios.create({
    //         baseURL: 'http://localhost:3000',
    //         withCredentials: true,
    //         headers: {
    //           'Authorization': `Bearer ${token}`,
    //           'Content-Type': 'application/json'
    //         }
    //       });

    //       // Fetch current user
    //       const userResponse = await axiosInstance.get('/api/users/current');
    //       console.log('User data fetched:', userResponse.data);
    //       setCurrentUser(userResponse.data);

    //       if (!userResponse.data || !userResponse.data._id) {
    //         console.error('Invalid user data received:', userResponse.data);
    //         setError('Failed to get user information');
    //         setLoading(false);
    //         return;
    //       }

    //       // Fetch registered events
    //       const registeredEventsResponse = await axiosInstance.get(
    //         `/api/users/${userResponse.data._id}/registered-events`
    //       );
          
    //       console.log('Events fetched:', registeredEventsResponse.data);
          
    //       if (Array.isArray(registeredEventsResponse.data)) {
    //         setEvents(registeredEventsResponse.data);
    //       } else {
    //         console.error('Invalid events data received:', registeredEventsResponse.data);
    //         setEvents([]);
    //       }

    //       setLoading(false);
    //     } catch (err) {
    //       console.error('Error in fetchData:', err);
    //       const errorMessage = err.response?.data?.error || err.message;
    //       setError(`Failed to load your data: ${errorMessage}`);
    //       setLoading(false);
    //     }
    //   };

    //   fetchData();
    // }, []);

import  { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, MessageCircle, Ticket } from 'lucide-react';
import axios from 'axios';
import GroupChat from './GroupChat'
import { MessageProvider } from './MessageContext';
import Navbar from '../components/Navbar';

const EventUserPage = () => {
    const [events, setEvents] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [registeredMembers, setRegisteredMembers] = useState([]);
    const [activeTab, setActiveTab] = useState('details');
    const [selectedEventMessages, setSelectedEventMessages] = useState({});

    useEffect(() => {
        let axiosInstance;
        const fetchData = async () => {
          try {
            // Check token
            const token =localStorage.getItem('jwt') || 
                         localStorage.getItem('accessToken') || 
                         localStorage.getItem('userToken') ||
                         localStorage.getItem('token');
                         
            if (!token) {
              console.error('No token found in localStorage');
              setError('No authentication credentials found');
              setLoading(false);
              return;
            }
  
            // Configure axios defaults
            axios.defaults.withCredentials = true;
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
            // Create axios instance with base configuration
            axiosInstance = axios.create({
              baseURL: 'http://localhost:3000',
              withCredentials: true,
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              }
            });

            
  
            // Fetch current user
            const userResponse = await axiosInstance.get('/api/users/current');
            console.log('User data fetched:', userResponse.data);
            setCurrentUser(userResponse.data);
  
            if (!userResponse.data || !userResponse.data._id) {
              console.error('Invalid user data received:', userResponse.data);
              setError('Failed to get user information');
              setLoading(false);
              return;
            }
  
            // Fetch registered events
            const registeredEventsResponse = await axiosInstance.get(
              `/api/users/${userResponse.data._id}/registered-events`
            );
            
            console.log('Events fetched:', registeredEventsResponse.data);
            
            if (Array.isArray(registeredEventsResponse.data)) {
              setEvents(registeredEventsResponse.data);
            } else {
              console.error('Invalid events data received:', registeredEventsResponse.data);
              setEvents([]);
            }
  
            setLoading(false);
          } catch (err) {
            console.error('Error in fetchData:', err);
            const errorMessage = err.response?.data?.error || err.message;
            setError(`Failed to load your data: ${errorMessage}`);
            setLoading(false);
          }
        };
  
        fetchData();
      }, []);

    // Add debug output in render
    useEffect(() => {
      console.log('Current state:', {
        currentUser,
        eventsCount: events.length,
        loading,
        error
      });
    }, [currentUser, events, loading, error]);

const fetchEventDetails = async (eventId) => { // Remove axiosInstance parameter
    try {
      // Use the axios instance from useEffect
      const membersResponse = await axios.get(`/api/events/${eventId}/members`); // Use axios directly
      console.log('Fetched members:', membersResponse.data);

      if (Array.isArray(membersResponse.data)) {
        setRegisteredMembers(membersResponse.data);
      } else {
        console.error('Invalid members data structure:', membersResponse.data);
        setRegisteredMembers([]);
      }
    } catch (err) {
      console.error('Error fetching members:', err);
      setRegisteredMembers([]);
    }
  };


  const handleEventSelect = async (event) => {
    setSelectedEvent(event);
    await fetchEventDetails(event._id); // Pass only eventId
    setActiveTab('details');
    if (!selectedEventMessages[event._id]) {  // Initialize if not present
        setSelectedEventMessages(prev => ({ ...prev, [event._id]: [] }));
      }
  };


  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500 text-center">
        <p>{error}</p>
        {error.includes('session has expired') && (
          <button
            onClick={() => window.location.href = '/login'} // Adjust the login path as needed
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Go to Login
          </button>
        )}
      </div>
    );
  }

  // Rest of the component remains the same...
  return (
    <MessageProvider>
      <Navbar />
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Events List */}
        <div className="md:col-span-1 bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold mb-4">Your Registered Events</h2>
          {events.length > 0 ? (
            <div className="space-y-2">
              {events.map((event) => (
                <button
                  key={event._id}
                  onClick={() => handleEventSelect(event)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedEvent?._id === event._id
                      ? 'bg-blue-50 border-blue-500'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-gray-500">{event.location}</p>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">
              You haven&apos;t registered for any events yet.
            </p>
          )}
        </div>

        {/* Event Details Section - Same as before */}
        <div className="md:col-span-2">
          {selectedEvent ? (
            <div className="bg-white rounded-lg shadow">
              {/* Event Header */}
              <div className="p-6 border-b">
                <h1 className="text-2xl font-bold mb-4">{selectedEvent.title}</h1>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{new Date(selectedEvent.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{selectedEvent.startTime} - {selectedEvent.endTime}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{selectedEvent.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Ticket className="w-5 h-5 mr-2" />
                    <span>{selectedEvent.ticketType === 'free' ? 'Free Event' : `₹${selectedEvent.ticketPrice}`}</span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b">
                <nav className="flex">
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`px-6 py-3 border-b-2 font-medium ${
                      activeTab === 'details'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Details
                  </button>
                  <button
                    onClick={() => setActiveTab('members')}
                    className={`px-6 py-3 border-b-2 font-medium ${
                      activeTab === 'members'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Members ({registeredMembers.length})
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab('chat')}
                    className={`px-6 py-3 border-b-2 font-medium ${
                      activeTab === 'chat'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <span className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Group Chat
                    </span>
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'details' && (
                  <div className="prose max-w-none">
                    <p className="text-gray-600">{selectedEvent.description}</p>
                  </div>
                )}

                {activeTab === 'members' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {registeredMembers.map((member) => (
                      <div
                        key={member._id}
                        className="bg-gray-50 p-4 rounded-lg"
                      >
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-gray-600 text-sm">{member.email}</p>
                        <p className="text-gray-500 text-xs">
                          Joined {new Date(member.joinedAt).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'chat' && (
                  <GroupChat
                    eventId={selectedEvent._id}
                    userId={currentUser?._id}
                    messages={selectedEventMessages[selectedEvent._id] || []} // Pass messages
                    setMessages={(messages) => setSelectedEventMessages(prev => ({ ...prev, [selectedEvent._id]: messages }))}
                  />
                )}
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-gray-500">Select an event to view details</h3>
            </div>
          )}
        </div>
      </div>
    </div>
    </MessageProvider>
  );
};

export default EventUserPage;



   