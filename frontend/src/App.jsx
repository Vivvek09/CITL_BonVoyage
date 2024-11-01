// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SingleEvent from './components/EventsForUser/SingleEvent';
import EventUser from './components/EventsForUser/eventuser.jsx';
import LoginSignup from './Authentication/LoginSignup.jsx';
import Connect from './components/Connect.jsx';
import HomePage from './EventLists/HomePage.jsx';
import EventPage from './EventLists/Eventpage.jsx';
import CreateEventForm from './CreateEventForm.jsx';
import EventActions from './components/EventActions/EventActions.jsx';
import EventDetailsPage from './EventDetailsPage.jsx';
import GoogleEvents from './GoogleEvents.jsx';
import EventRegistration from './EventLists/EventRegistration.jsx';
import RegistrationConfirmation from './EventLists/RegistrationConfirmation.jsx';
import StreamlitPage from './StreamlitPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/nearbyEvents" element={<HomePage/>} />
        <Route path="/event/:id" element={<EventPage/>} />
        <Route path="/google-events" element={<GoogleEvents />} /> 
        <Route path="/createeventform" element={<CreateEventForm />} /> 
        <Route path="/eventdetails" element={<EventDetailsPage />} /> 
        <Route path="/eventactions" element={<EventActions />} />
        <Route path="/eventuser" element={<EventUser />} />
        <Route path="/single-event" element={<SingleEvent />} />
        <Route path="/events/:id/register" element={<EventRegistration />} />
        <Route path="/events/:id/confirmation" element={<RegistrationConfirmation />} />
        <Route path="/streamlit" element={<StreamlitPage/>} />
      </Routes>
    </Router>
  );
}





export default App;

