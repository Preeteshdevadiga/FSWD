import React, { useState } from "react";

function Formvalidation() {

  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState({});

  const handlechange = (e) => {
    const { name, value } = e.target;

    setFormdata((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    let newerrors = {};

    if (!formdata.username) {
      newerrors.username = "Username is required";
    }

    if (!formdata.email) {
      newerrors.email = "Email is required";
    }

    if (!formdata.password) {
      newerrors.password = "Password is required";
    }

    return newerrors;
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
    } else {
      setError(validationErrors);
    }
  };

  return (
    <div>
      <h1>Form Validation in React</h1>

      <form onSubmit={handlesubmit}>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formdata.username}
          onChange={handlechange}
        />
        {error.username && <p className="error">{error.username}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formdata.email}
          onChange={handlechange}
        />
        {error.email && <p className="error">{error.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formdata.password}
          onChange={handlechange}
        />
        {error.password && <p className="error">{error.password}</p>}

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Formvalidation;