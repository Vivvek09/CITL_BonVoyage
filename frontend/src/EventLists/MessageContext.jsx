import React, { createContext, useState, useContext } from 'react';

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState({}); // Store messages by eventId

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};


export const useMessageContext = () => {   // Export useMessageContext
    return useContext(MessageContext);
  };
  

