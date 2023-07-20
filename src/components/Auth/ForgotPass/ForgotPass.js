import React, { useRef } from "react";
import Button from "../../UI/Button/Button";
import { useNavigate } from "react-router-dom";

function ForgotPass() {
  const navigate = useNavigate();
  const emailRef = useRef("");

  const resetPassHandler = async (e) => {
    e.preventDefault();
    try {
      const email = emailRef.current.value;
      if (email.trim() === 0 || !email.includes("@")) {
        throw new Error("not a valid email address");
      }
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_FIREBASE_APIKEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            requestType: "PASSWORD_RESET",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Error checking email verification");
      }
      alert("Successfully sent a reset Link");
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form onSubmit={resetPassHandler}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Email" ref={emailRef} />
      </div>
      <Button type="submit">Send Reset Link</Button>
    </form>
  );
}

export default ForgotPass;
