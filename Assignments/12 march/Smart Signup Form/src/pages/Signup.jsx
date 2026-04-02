import { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // ✅ Email validation
    if (!form.email.includes("@")) {
      newErrors.email = "Invalid email format";
    }

    // ✅ Password validation
    if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    } else if (
      !/[A-Z]/.test(form.password) ||
      !/[0-9]/.test(form.password)
    ) {
      newErrors.password =
        "Must contain at least 1 uppercase letter and 1 number";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Signup Successful 🎉");
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup Form</h2>

      {/* Email */}
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />
      <p style={{ color: "red" }}>{errors.email}</p>

      {/* Password */}
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />
      <p style={{ color: "red" }}>{errors.password}</p>

      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;