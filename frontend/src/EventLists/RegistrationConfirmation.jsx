// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../components/Navbar';

// const RegistrationConfirmation = () => {
//   const [memberDetails, setMemberDetails] = useState(null);
//   const [allMembers, setAllMembers] = useState([]);
//   const [event, setEvent] = useState(null);
//   const [error, setError] = useState('');
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch event details
//         const eventRes = await axios.get(`http://localhost:3000/api/events/${id}`);
//         setEvent(eventRes.data);

//         // Fetch current user's registration details
//         const userEmail = localStorage.getItem('registeredEmail'); // We'll set this during registration
//         const membersRes = await axios.get(`http://localhost:3000/api/events/${id}/members`);
        
//         // Find current user's details
//         const currentMember = membersRes.data.find(member => member.email === userEmail);
//         setMemberDetails(currentMember);
        
//         // Set all members for display
//         setAllMembers(membersRes.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError('Error loading registration details');
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (error) {
//     return (
//       <div className="registration-confirmation-wrapper">
//         <Navbar />
//         <div className="max-w-4xl mx-auto p-6">
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//             {error}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!memberDetails || !event) {
//     return (
//       <div className="registration-confirmation-wrapper">
//         <Navbar />
//         <div className="max-w-4xl mx-auto p-6">
//           <div className="animate-pulse">
//             <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
//             <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="registration-confirmation-wrapper">
//       <Navbar />
//       <div className="max-w-4xl mx-auto p-6">
//         <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
//           <p className="text-green-700">
//             Successfully registered for {event.title}!
//           </p>
//         </div>

//         {/* Your Registration Details */}
//         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
//           <h2 className="text-xl font-bold mb-4">Your Registration Details</h2>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
//             <p className="text-gray-900">{memberDetails.name}</p>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//             <p className="text-gray-900">{memberDetails.email}</p>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
//             <p className="text-gray-900">{memberDetails.phone}</p>
//           </div>
//         </div>

//         {/* Other Group Members */}
//         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
//           <h2 className="text-xl font-bold mb-4">Other Group Members</h2>
//           <div className="divide-y">
//             {allMembers
//               .filter(member => member.email !== memberDetails.email)
//               .map((member, index) => (
//                 <div key={index} className="py-4">
//                   <h3 className="font-medium">{member.name}</h3>
//                   <p className="text-gray-600 text-sm">{member.email}</p>
//                   <p className="text-gray-600 text-sm">{member.phone}</p>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationConfirmation;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { 
//   Calendar, 
//   Clock, 
//   MapPin, 
//   Users, 
//   MessageCircle, 
//   Ticket,
//   ChevronLeft
// } from 'lucide-react';
// import Navbar from '../components/Navbar';
// import GroupChat from './GroupChat';

// const RegistrationConfirmation = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [event, setEvent] = useState(null);
//   const [registeredMembers, setRegisteredMembers] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [activeTab, setActiveTab] = useState('details');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchEventDetails = async () => {
//       try {
//         setLoading(true);
//         // Fetch event details
//         const eventResponse = await axios.get(`http://localhost:3000/api/events/${id}`);
//         setEvent(eventResponse.data);

//         // Fetch registered members
//         const membersResponse = await axios.get(`http://localhost:3000/api/events/${id}/members`);
//         setRegisteredMembers(membersResponse.data);

//         // Get current user from localStorage or your auth system
//         const userEmail = localStorage.getItem('userEmail');
//         if (userEmail) {
//           const userResponse = await axios.get(`http://localhost:3000/api/users/current`);
//           setCurrentUser(userResponse.data);
          
//           // Check if current user is registered
//           const isUserRegistered = membersResponse.data.some(
//             member => member.email === userEmail
//           );
//           setIsRegistered(isUserRegistered);
//         }
//       } catch (err) {
//         console.error('Error fetching event details:', err);
//         setError('Failed to load event details');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEventDetails();
//   }, [id]);

//   const handleRegister = async () => {
//     try {
//       const registrationData = {
//         eventId: id,
//         userId: currentUser._id,
//         name: currentUser.name,
//         email: currentUser.email,
//         phone: currentUser.phone || ''
//       };

//       await axios.post(`http://localhost:3000/api/events/${id}/register`, registrationData);
//       navigate(`/registration-confirmation/${id}`);
//     } catch (err) {
//       console.error('Registration error:', err);
//       setError('Failed to register for the event');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Navbar />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="animate-pulse">
//             <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
//             <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
//             <div className="h-4 bg-gray-200 rounded w-1/3"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Navbar />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="bg-red-50 border-l-4 border-red-400 p-4">
//             <p className="text-red-700">{error}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!event) return null;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Back Button */}
//         <button 
//           onClick={() => navigate(-1)} 
//           className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
//         >
//           <ChevronLeft className="w-5 h-5 mr-1" />
//           Back
//         </button>

//         {/* Event Header */}
//         <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-4">
//               {/* Event Details */}
//               <div className="flex items-center text-gray-600">
//                 <Calendar className="w-5 h-5 mr-2" />
//                 <span>{new Date(event.date).toLocaleDateString()}</span>
//               </div>
              
//               <div className="flex items-center text-gray-600">
//                 <Clock className="w-5 h-5 mr-2" />
//                 <span>{event.startTime} - {event.endTime}</span>
//               </div>
              
//               <div className="flex items-center text-gray-600">
//                 <MapPin className="w-5 h-5 mr-2" />
//                 <span>{event.location}</span>
//               </div>
              
//               <div className="flex items-center text-gray-600">
//                 <Ticket className="w-5 h-5 mr-2" />
//                 <span>
//                   {event.ticketType === 'free' 
//                     ? 'Free Event' 
//                     : `₹${event.ticketPrice} - ${event.ticketName}`}
//                 </span>
//               </div>
//             </div>

//             {/* Registration Button */}
//             <div className="flex items-center justify-end">
//               {!isRegistered && currentUser && (
//                 <button
//                   onClick={handleRegister}
//                   className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
//                 >
//                   Register Now
//                 </button>
//               )}
//               {isRegistered && (
//                 <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg">
//                   ✓ You&apos;re registered!
//                 </div>
//               )}
//               {!currentUser && (
//                 <button
//                   onClick={() => navigate('/login')}
//                   className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
//                 >
//                   Login to Register
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white shadow-sm rounded-lg overflow-hidden">
//           <div className="border-b border-gray-200">
//             <nav className="flex -mb-px">
//               <button
//                 onClick={() => setActiveTab('details')}
//                 className={`px-6 py-3 border-b-2 text-sm font-medium ${
//                   activeTab === 'details'
//                     ? 'border-blue-500 text-blue-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 }`}
//               >
//                 Details
//               </button>
//               <button
//                 onClick={() => setActiveTab('members')}
//                 className={`px-6 py-3 border-b-2 text-sm font-medium ${
//                   activeTab === 'members'
//                     ? 'border-blue-500 text-blue-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 }`}
//               >
//                 <span className="flex items-center">
//                   <Users className="w-4 h-4 mr-2" />
//                   Members ({registeredMembers.length})
//                 </span>
//               </button>
//               {isRegistered && (
//                 <button
//                   onClick={() => setActiveTab('chat')}
//                   className={`px-6 py-3 border-b-2 text-sm font-medium ${
//                     activeTab === 'chat'
//                       ? 'border-blue-500 text-blue-600'
//                       : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 >
//                   <span className="flex items-center">
//                     <MessageCircle className="w-4 h-4 mr-2" />
//                     Group Chat
//                   </span>
//                 </button>
//               )}
//             </nav>
//           </div>

//           {/* Tab Content */}
//           <div className="p-6">
//             {activeTab === 'details' && (
//               <div className="prose max-w-none">
//                 <h2 className="text-xl font-semibold mb-4">About this event</h2>
//                 <p className="text-gray-600">{event.description}</p>
//               </div>
//             )}

//             {activeTab === 'members' && (
//               <div className="space-y-4">
//                 <h2 className="text-xl font-semibold mb-4">Registered Members</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {registeredMembers.map((member) => (
//                     <div 
//                       key={member._id} 
//                       className="bg-gray-50 p-4 rounded-lg"
//                     >
//                       <h3 className="font-medium">{member.name}</h3>
//                       <p className="text-gray-600 text-sm">{member.email}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeTab === 'chat' && isRegistered && (
//               <GroupChat 
//                 eventId={id} 
//                 userId={currentUser?._id} 
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationConfirmation;




import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  MessageCircle, 
  Ticket,
  ChevronLeft
} from 'lucide-react';
import Navbar from '../components/Navbar';
import GroupChat from './GroupChat';

const RegistrationConfirmation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [registeredMembers, setRegisteredMembers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        setLoading(true);
        // Fetch event details
        const eventResponse = await axios.get(`http://localhost:3000/api/events/${id}`);
        setEvent(eventResponse.data);

        // Fetch registered members
        const membersResponse = await axios.get(`http://localhost:3000/api/events/${id}/members`);
        setRegisteredMembers(membersResponse.data);

        // Get current user from localStorage or your auth system
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
          const userResponse = await axios.get(`http://localhost:3000/api/users/current`);
          setCurrentUser(userResponse.data);
          
          // Check if current user is registered
          const isUserRegistered = membersResponse.data.some(
            member => member.email === userEmail
          );
          setIsRegistered(isUserRegistered);
        }
      } catch (err) {
        console.error('Error fetching event details:', err);
        setError('Failed to load event details');
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);

  const handleRegister = async () => {
    try {
      const registrationData = {
        eventId: id,
        userId: currentUser._id,
        name: currentUser.name,
        email: currentUser.email,
        phone: currentUser.phone || ''
      };

      await axios.post(`http://localhost:3000/api/events/${id}/register`, registrationData);
      navigate(`/registration-confirmation/${id}`);
    } catch (err) {
      console.error('Registration error:', err);
      setError('Failed to register for the event');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <p className="text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!event) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back
        </button>

        {/* Event Header */}
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* Event Details */}
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                <span>{event.startTime} - {event.endTime}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{event.location}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Ticket className="w-5 h-5 mr-2" />
                <span>
                  {event.ticketType === 'free' 
                    ? 'Free Event' 
                    : `₹${event.ticketPrice} - ${event.ticketName}`}
                </span>
              </div>
            </div>

            {/* Registration Button */}
            <div className="flex items-center justify-end">
              {!isRegistered && currentUser && (
                <button
                  onClick={handleRegister}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Register Now
                </button>
              )}
              {isRegistered && (
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg">
                  ✓ You&apos;re registered!
                </div>
              )}
              {!currentUser && (
                <button
                  onClick={() => navigate('/login')}
                  className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
                >
                  Login to Register
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('details')}
                className={`px-6 py-3 border-b-2 text-sm font-medium ${
                  activeTab === 'details'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Details
              </button>
              <button
                onClick={() => setActiveTab('members')}
                className={`px-6 py-3 border-b-2 text-sm font-medium ${
                  activeTab === 'members'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Members ({registeredMembers.length})
                </span>
              </button>
              {isRegistered && (
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`px-6 py-3 border-b-2 text-sm font-medium ${
                    activeTab === 'chat'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Group Chat
                  </span>
                </button>
              )}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'details' && (
              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-4">About this event</h2>
                <p className="text-gray-600">{event.description}</p>
              </div>
            )}

            {activeTab === 'members' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Registered Members</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {registeredMembers.map((member) => (
                    <div 
                      key={member._id} 
                      className="bg-gray-50 p-4 rounded-lg"
                    >
                      <h3 className="font-medium">{member.name}</h3>
                      <p className="text-gray-600 text-sm">{member.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'chat' && isRegistered && (
              <GroupChat 
                eventId={id} 
                userId={currentUser?._id} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationConfirmation;
