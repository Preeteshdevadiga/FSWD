// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Signup from "./pages/Signup";

// function App() {
//   return (
//     <div>
//       <h1>Multi Page App</h1>

//       <nav>
//         <Link to="/">Home</Link> | 
//         <Link to="/about">About</Link> | 
//         <Link to="/contact">Contact</Link>
//         <Link to="/signup">Signup</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  );
}

export default App;