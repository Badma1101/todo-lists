import React, { useState } from "react";

function Password() {
  const [pwd, setPwd] = useState("");
  const [errMessage, setErrMessage] = useState("");
  function validatePassword(pwd) {
    const minLength = 8;
    const number = /\d/;
    const specialChar = /[!@#$%^&*()<>,.?'";:|{}]/;

    if (pwd.length < minLength) {
      return "Password must be atleast 8characters";
    }
    if (!number.test(pwd)) {
      return "Password must contain atleast one number";
    }
    if (!specialChar.test(pwd)) {
      return "Password must contain one special Character";
    }
    return "";
  }
  function handleChange(e) {
    const newPwd=e.target.value;
    setPwd(newPwd);
   const error= validatePassword(newPwd);
   setErrMessage(error);
  }
  return (
    <div className="container">
      <h1 className="title">Checking Password Strength in ReactJs</h1>
      <form>
        <label className="password">Enter Password:</label>
        <input
          type="password"
          className="input"
          value={pwd}
          onChange={handleChange}
          required
        />
           {typeof errMessage === 'string' && errMessage && (
        <p style={{ color: 'red' }}>{errMessage}</p>
      )}
      {!errMessage && pwd.length > 0 && (
        <p style={{ color: 'green' }}>Password is valid!</p>
      )}
      </form>
    </div>
  );
}

export default Password;
