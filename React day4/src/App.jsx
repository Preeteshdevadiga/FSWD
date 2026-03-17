// import React, { useEffect, useState } from 'react';

// function App() {
//   // 1. Initialize as an empty array to avoid .map() errors on first render
//   const [posts, setPosts] = useState([]); 

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((json) => setPosts(json))
//       .catch((err) => console.error("Fetch error:", err));
//   }, []); // 2. Empty dependency array stays INSIDE the useEffect call

//   return (
//     <div>
//       <h1>Fetch API Example</h1>
//       {/* 3. Logic check: only map if posts exists */}
//       {posts && posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
 

import React, { useEffect, useState } from 'react';
