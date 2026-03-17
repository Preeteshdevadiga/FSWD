import React, { useState } from "react";

function ToggleMessage() {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div style={styles.container}>
      <h2>Toggle Message Component</h2>

      <button onClick={handleToggle} style={styles.button}>
        {show ? "Hide Message" : "Show Message"}
      </button>

      {show && (
        <p style={styles.message}>
          🚀 Hello Preetesh! This message is now visible.
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
  },
  message: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#333",
  },
};

export default ToggleMessage;