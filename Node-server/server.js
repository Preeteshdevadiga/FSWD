// const http=require('http');
// const server=http.createServer((req,res)=>{
    
//     if(req.url=="/"){
//         res.write("welcome to our first node server App");
//         res.end();
//     }    else if(req.url=="/about"){
//         res.write("welcome to about page");
//         res.end();
//     }    else if(req.url=="/contact"){
//         res.write("welcome to contact page");
//         res.end();
//     }    else{
//         res.write("404 page not found");
//         res.end();
//     }
// });
// server.listen(5000,()=>{
//     console.log("server is running on port 5000");
// });



// const http = require("http");

// const server = http.createServer((req, res) => {

//     if (req.url === "/") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>Welcome to our first Node Server App</h1>");
//     }

//     else if (req.url === "/about") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>About Page</h1><p>This is our about page.</p>");
//     }

//     else if (req.url === "/contact") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(`
//             <h1>Contact Us</h1>
//             <p>Email: support@example.com</p>
//             <p>Phone: +91 9876543210</p>

//             <h3>Send Message</h3>
//             <form>
//                 Name: <input type="text"><br><br>
//                 Email: <input type="email"><br><br>
//                 Message: <textarea></textarea><br><br>
//                 <button type="submit">Submit</button>
//             </form>
//         `);
//     }

//     else {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         res.end("<h1>404 Page Not Found</h1>");
//     }

// });

// server.listen(5001, () => {
//     console.log("Server running on port 5001");
// });

const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "application/json" });

        const contact = {
            name: "Support Team",
            email: "support@example.com",
            phone: "+91 9876543210",
            address: "Bangalore, India"
        };

        res.end(JSON.stringify(contact));
    }

});

server.listen(5001, () => {
    console.log("Server running on port 5001");
});