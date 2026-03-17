// import React from "react";  

// function App() {
//   const handlesubmit = (event) => {
//     event.preventDefault();//stpos page refering to itself
//     alert("Form submitted");
//   }
//   return (
//     <div>
//       <h1>Form Handling in React</h1>
//       <form onSubmit={handlesubmit}>
//         <input type="text" placeholder="Enter your name" />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";  
   
// function App() {
//   const[name,setName]=useState("");
//   const handlechange = (e) => {
//     setName(e.target.value);
//   }
//   return (
//     <div>
//       <h2>controlled component</h2>
//       <input type="text" value={name} onChange={handlechange} placeholder="Enter your name" />
//       <p>Your name is: {name}</p> 
//     </div>
//   );
// }

// export default App;

import React from "react";
import Formvalidation from "./components/formvalidation";

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to My React App 🚀</h1>
      <p>This is a simple React application.</p>
      <button>Click Me</button>

      <Formvalidation />

    </div>
  );
}

export default App;


  