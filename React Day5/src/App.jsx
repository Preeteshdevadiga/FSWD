// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// function App() {
//   return (
//     <div>
//       <h1>My Router Demo</h1>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>

//     </div>
//   );
// }

// export default App;


import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <h1>My Router Demo</h1>

      {/* Navigation Links */}
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;