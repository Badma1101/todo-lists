import React, { useState } from "react";
import "./styles.css";
export default function Form() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subject, setSubject] = useState({
    english: true,
        maths: false,
        physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [select, setSelect] = useState("");
  const [about, setAbout] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(
        firstname,
        lastname,
        email,
        contact,
        gender,
        select,
        subject,
        resume,
        url,
        about
    );
};

const handleSubjectChange = (sub) => {
  setSubject((prev) => ({
      ...prev,
      [sub]: !prev[sub],
  }));
};

  function handleReset() {
    setFirstname("");
    setLastname("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubject({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelect("");
    setAbout("");
  }

  return (
    <div className="form-wrapper">
      <h1>Form</h1>
      <form action="#" method="get">
        <label htmlFor="fname">First Name*</label>
        <input
          type="text"
          name="fname"
          className="fname"
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="Enter First Name"
          value={firstname}
          required
        />
        <label htmlFor="lname">Last Name*</label>
        <input
          type="text"
          name="lname"
          className="lname"
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          placeholder="Enter Last Name"
          required
        />
        <label htmlFor="email">Enter Email*</label>
        <input
          type="email"
          name="email"
          className="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          value={email}
          required
        />
        <label htmlFor="contact">Contact*</label>
        <input
          type="number"
          name="contact"
          value={contact}
          className="contact"
          placeholder="Enter Contact"
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <label htmlFor="gender" className="gendergrp">
          Gender*
        </label>
        <input
          type="radio"
          value="male"
          className="gender"
          name="gender"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
          required
        />
        Male
        <input
          type="radio"
          className="gender"
          value="female"
          name="gender"
          required
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
        <input
          type="radio"
          className="gender"
          value="Other"
          name="gender"
          required
          checked={gender === "Other"}
          onChange={(e) => setGender(e.target.value)}
        />
        Other
        <label htmlFor="subject">Your best subject*</label>
        <input
          type="checkbox"
          name="subject"
          value="english"
          className="subject"
          checked={subject.english === true}
          onChange={(e) => handleSubjectChange("english")}
          required
        />
        English
        <input
          type="checkbox"
          name="subject"
          value="maths"
          className="subject"
          required
          checked={subject.maths === true}
          onChange={(e) => handleSubjectChange("maths")}
        />
        Maths
        <input
          type="checkbox"
          name="subject"
          className="subject"
          value="physics"
          required
          checked={subject.physics === true}
          onChange={(e) => handleSubjectChange("physics")}
        />
        Physics
        <label htmlFor="file">Upload Resume*</label>
        <input
          type="file"
          name="file"
          className="file"
          onChange={(e) => setResume(e.target.files[0])}
          required
        />
        <label htmlFor="url">Enter URL*</label>
        <input
          type="text"
          name="url"
          className="url"
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter url"
          required
        />
        <label htmlFor="choice">Select your choice*</label>
        <select
          name="select"
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value="" disabled selected={select === ""}>
            Select your answer
          </option>
          <optgroup label="Beginners">
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">Javascript</option>
          </optgroup>

          <optgroup label="Advance">
            <option value="4">React</option>
            <option value="5">Node</option>
            <option value="6">Angular</option>
          </optgroup>
        </select>
        <label htmlFor="about">About*</label>
        <textarea
          rows="10"
          cols="20"
          name="about"
          className="about"
          placeholder="About Yourself"
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
        <p>Submit or Reset</p>
        <div className="btn">
          <button type="reset" className="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
