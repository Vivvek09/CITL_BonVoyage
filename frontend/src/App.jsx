// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginSignup from './Authentication/LoginSignup.jsx';
import Connect from './components/Connect.jsx';
import HomePage from './EventLists/HomePage.jsx';
import EventPage from './EventLists/Eventpage.jsx';

function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/nearbyEvents" element={<HomePage/>} />
        <Route path="/event/:id" element={<EventPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from '../src/components/Navbar.jsx';
// import HomePage from './EventLists/HomePage.jsx';
// import EventPage from './EventLists/Eventpage.jsx';
// // import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage/>} />
//           <Route path="/event/:id" element={<EventPage/>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;