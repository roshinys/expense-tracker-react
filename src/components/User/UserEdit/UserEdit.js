import React, { useContext, useRef } from "react";
import Button from "../../UI/Button/Button";
import AuthContext from "../../../store/auth/auth-context";
import styles from "./UserEdit.module.css";

function UserEdit() {
  const authCtx = useContext(AuthContext);
  const nameRef = useRef("");
  const profileRef = useRef("");

  const cancelClickHandler = () => {
    nameRef.current.value = "";
    profileRef.current.value = "";
  };

  const updateUserHandler = async (e) => {
    e.preventDefault();
    const imageUrl = profileRef.current.value;
    const name = nameRef.current.value;
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_APIKEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          photoUrl: imageUrl,
          displayName: name,
        }),
        headers: {
          "Content-Type": "application-json",
        },
      }
    );
    if (!response.ok) {
      alert("Failed to update user details");
      return;
    }
    const data = await response.json();
    console.log(data);
    alert("Successfully updated user details");
  };

  return (
    <div className={styles.contactContainer}>
      <h3>Contact Details</h3>
      <button className={styles.cancelButton} onClick={cancelClickHandler}>
        Cancel
      </button>
      <form onSubmit={updateUserHandler} className={styles.formUpdate}>
        <div className={styles.formdiv}>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" placeholder="Full Name" ref={nameRef} />
        </div>
        <div className={styles.formdiv}>
          <label htmlFor="profilePic">Profile Picture Url:</label>
          <input
            type="text"
            id="profilePic"
            placeholder="Profile Picture Url"
            ref={profileRef}
          />
        </div>
        <Button type="submit" name="Update Details" />
      </form>
    </div>
  );
}

export default UserEdit;
