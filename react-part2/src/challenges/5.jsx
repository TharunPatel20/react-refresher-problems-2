// **Problem 5: Form Validation - Email and Password (I)**

import { useState } from "react";
import { cardStyle } from "./common";

// **Description:** Create a simple login form component `LoginForm` with two input fields: "Email" and "Password", and a "Submit" button. Implement basic validation:
// * Email should contain "@".
// * Password should be at least 6 characters long.
// Display error messages below each field if validation fails when the "Submit" button is clicked.

// **Concepts:** `useState` for input values and error messages, `onChange` event, `onSubmit` event, preventing default form submission, conditional rendering of error messages.

// **Expected Output:** An email input, a password input, and a submit button. Error messages appear on submit if validation fails.

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!email.includes("@")) {
      setEmailError("Email must contain '@'.");
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
    }
    if (email.includes("@") && password.length >= 6) {
      setSubmit(!submit);
    }
  };

  return (
    <div style={cardStyle}>
        <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email    :{" "}
          <input
            placeholder="enter your email.."
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password :{" "}
          <input
            placeholder="enter your password.."
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

        {submit ? (
          <>
            <p>{`Form submitted successfully with:
            email : ${email}, password : ${password})}`}</p>
            <button
              onClick={() => {
                setEmail("");
                setPassword("");
                setEmailError("");
                setPasswordError("");
                setSubmit(false);
              }}
            >
              Reset
            </button>
          </>
        ) : (
          <button type="submit">Login</button>
        )}
      </form>
    </div>
  );
}
