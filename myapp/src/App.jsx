// import React from "react";
// function App() {
//   return (
//     <div>
//       <h1>My React App</h1>
//       <p>Welcome to my React application!</p>
//     </div>
//   );
// }

// export default App;



// import React from "react";

// // creating multiple components
// function Header() {
//   return <h1>My React App</h1>;
// }

// function Footer() {
//   return <p>Welcome to my React application!</p>;
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       <p>This is body Content</p>
//       <Footer />
//     </div>
//   );
// }


/*
//dynamic components
function Greeting() {
  const name = "John";
  return <h2>Hello {name} 🤣</h2>;
}

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}*/

//lets buils simple profile card

function ProfileCard() {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      borderRadius: "10px",
      width: "300px",
      textAlign: "center",
    }}>
      <h2>Preethu</h2>
      <p>Software Engineer</p>
      <button>Follow</button>
    </div>
  );
}

function App() {
  return <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}> 
  
    <ProfileCard />
    </div>
}
export default App;