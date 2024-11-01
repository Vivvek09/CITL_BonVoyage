import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const RegistrationConfirmation = () => {
  const [memberDetails, setMemberDetails] = useState(null);
  const [allMembers, setAllMembers] = useState([]);
  const [event, setEvent] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch event details
        const eventRes = await axios.get(`http://localhost:3000/api/events/${id}`);
        setEvent(eventRes.data);

        // Fetch current user's registration details
        const userEmail = localStorage.getItem('registeredEmail'); // We'll set this during registration
        const membersRes = await axios.get(`http://localhost:3000/api/events/${id}/members`);
        
        // Find current user's details
        const currentMember = membersRes.data.find(member => member.email === userEmail);
        setMemberDetails(currentMember);
        
        // Set all members for display
        setAllMembers(membersRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError('Error loading registration details');
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return (
      <div className="registration-confirmation-wrapper">
        <Navbar />
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        </div>
      </div>
    );
  }

  if (!memberDetails || !event) {
    return (
      <div className="registration-confirmation-wrapper">
        <Navbar />
        <div className="max-w-4xl mx-auto p-6">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="registration-confirmation-wrapper">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <p className="text-green-700">
            Successfully registered for {event.title}!
          </p>
        </div>

        {/* Your Registration Details */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
          <h2 className="text-xl font-bold mb-4">Your Registration Details</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <p className="text-gray-900">{memberDetails.name}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <p className="text-gray-900">{memberDetails.email}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <p className="text-gray-900">{memberDetails.phone}</p>
          </div>
        </div>

        {/* Other Group Members */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h2 className="text-xl font-bold mb-4">Other Group Members</h2>
          <div className="divide-y">
            {allMembers
              .filter(member => member.email !== memberDetails.email)
              .map((member, index) => (
                <div key={index} className="py-4">
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.email}</p>
                  <p className="text-gray-600 text-sm">{member.phone}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationConfirmation;