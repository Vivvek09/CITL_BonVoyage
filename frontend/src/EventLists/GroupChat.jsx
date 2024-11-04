// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Send } from 'lucide-react';

// const GroupChat = ({ eventId, userId }) => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [isEventCreator, setIsEventCreator] = useState(false);

//   useEffect(() => {
//     // Fetch existing messages
//     const fetchMessages = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/events/${eventId}/messages`);
//         setMessages(response.data);
//       } catch (error) {
//         console.error('Error fetching messages:', error);
//       }
//     };

//     // Check if current user is event creator
//     const checkEventCreator = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/events/${eventId}/creator`);
//         setIsEventCreator(response.data.isCreator);
//       } catch (error) {
//         console.error('Error checking event creator:', error);
//       }
//     };

//     fetchMessages();
//     checkEventCreator();

//     // Set up real-time message listening (using WebSocket or polling)
//     const messageInterval = setInterval(fetchMessages, 5000);

//     return () => clearInterval(messageInterval);
//   }, [eventId, userId]);

//   const handleSendMessage = async () => {
//     if (!newMessage.trim()) return;

//     try {
//       await axios.post(`http://localhost:3000/api/events/${eventId}/messages`, {
//         userId,
//         message: newMessage
//       });

//       // Clear input and refresh messages
//       setNewMessage('');
//       const response = await axios.get(`http://localhost:3000/api/events/${eventId}/messages`);
//       setMessages(response.data);
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   return (
//     <div className="group-chat-container bg-white shadow-md rounded-lg">
//       <div className="chat-header p-4 border-b">
//         <h2 className="text-xl font-bold">Group Discussion</h2>
//       </div>
      
//       <div className="messages-container p-4 h-96 overflow-y-auto">
//         {messages.map((msg, index) => (
//           <div 
//             key={index} 
//             className={`message mb-3 ${msg.userId === userId ? 'text-right' : 'text-left'}`}
//           >
//             <div className={`inline-block p-2 rounded ${
//               msg.userId === userId 
//                 ? 'bg-blue-100 text-blue-800' 
//                 : 'bg-gray-100 text-gray-800'
//             }`}>
//               <p className="text-sm font-medium">{msg.userName}</p>
//               <p>{msg.message}</p>
//               <span className="text-xs text-gray-500">
//                 {new Date(msg.createdAt).toLocaleTimeString()}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {(isEventCreator || true) && (
//         <div className="message-input-container p-4 border-t flex">
//           <input 
//             type="text"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             placeholder="Type a message..."
//             className="flex-grow p-2 border rounded-l-lg"
//             onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//           />
//           <button 
//             onClick={handleSendMessage}
//             className="bg-blue-500 text-white p-2 rounded-r-lg"
//           >
//             <Send size={20} />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GroupChat;


// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import PropTypes from 'prop-types'; 
// import axios from 'axios';


// const GroupChat = ({ eventId, userId }) => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');
//   const [socket, setSocket] = useState(null);

//   useEffect(() => {
//     const newSocket = io('http://localhost:3000', { withCredentials: true }); // Replace with your server URL
//     setSocket(newSocket);


//     newSocket.on('connect', () => {
//       console.log('Connected to Socket.IO server');
//       newSocket.emit('joinRoom', eventId); // Join room after successful connection
//     });

//     newSocket.on('message', (message) => {
//       setMessages(prevMessages => ({
//         ...prevMessages,
//         [eventId]: [...(prevMessages[eventId] || []), message]
//       }));
//     });


//     return () => {
//         newSocket.emit('leaveRoom', eventId);
//         newSocket.off('message'); // Clean up message listener
//     }
//   }, [eventId,setMessages]);

//   const sendMessage = () => {
//     if (message.trim() !== '') {
//       console.log('Emitting message:', message);
//       socket.emit('chatMessage', message);
//       setMessage('');
//     }
//   };
//   const eventMessages = messages[eventId] || []; 

//   return (
//     <div>
//       <ul>
//         {eventMessages.map((msg, index) => (
//           <li key={index}>
//             {msg.user}: {msg.text} ({new Date(msg.timestamp).toLocaleTimeString()})
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// };
// GroupChat.propTypes = {
//   eventId: PropTypes.string.isRequired,
//   userId: PropTypes.string.isRequired,
// };

// export default GroupChat;




import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import { useMessageContext } from './MessageContext';

const GroupChat = ({ eventId, userId }) => {
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const { messages, setMessages } = useMessageContext();

  useEffect(() => {
    const newSocket = io('https://citl-bonvoyage-backend-1td7.onrender.com', { withCredentials: true });
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Connected to Socket.IO server');
      newSocket.emit('joinRoom', eventId);
    });

    newSocket.on('message', (message) => {
      setMessages(prevMessages => ({
        ...prevMessages,
        [eventId]: [...(prevMessages[eventId] || []), message]
      }));
    });

    return () => {
      newSocket.emit('leaveRoom', eventId);
      newSocket.off('message');
    };
  }, [eventId, setMessages]); // Include setMessages as a dependency

  const sendMessage = () => {
    if (message.trim() !== '') {
      socket.emit('chatMessage', message);
      setMessage('');
    }
  };


  // Get the messages for the current event
  const eventMessages = messages[eventId] || []; // Access messages correctly


  return (
    <div>
      <ul>
        {eventMessages.map((msg, index) => ( // Use eventMessages here
          <li key={index}>
            {msg.user}: {msg.text} ({new Date(msg.timestamp).toLocaleTimeString()})
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

GroupChat.propTypes = {
  eventId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default GroupChat;
