import './App.css';
import Home from './Components/Home';
import DebitAccount from './Components/DebitAccount';
import Credit from './Components/Credit'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li className="links">
              <section className="links">
              <Link to = "/" className="link">Home</Link>
              <Link to = "/DebitAccount" className="link">Debit Account</Link>
              <Link to = "/Credit" className="link"> Credit Account </Link>
              </section>
            </li>
          </ul>
        </nav>
        
          <Routes>
            <Route path = "/" element= {<Home/>} /> 
            <Route path = "/DebitAccount" element= {<DebitAccount/>} /> 
            <Route path = "/Credit" element = {<Credit/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Home from "./components/Home";
// import UserProfile from "./components/UserProfile";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Navigation */}
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/userProfile">User Profile</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/userProfile/*" element={<UserProfile />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

