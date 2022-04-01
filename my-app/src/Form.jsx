import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

const Form = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { fullName, email } = formData;
  const navigate = useNavigate();
  let handleForm = (e) => {
    navigate("/TableShow");
    //alert(fullName+' A form was submitted: ' + formData);

    fetch("http://localhost:3001/store", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      // Converting  React formData to JSON and send it as the POST body
      body: JSON.stringify(formData),
    }).then(function (response) {
      console.log(response);
      return response.json();
    });

    e.preventDefault();
  };

  return (
    <>
    <Link className="header" to='/TableShow'>Show Data</Link>
    <form onSubmit={handleForm}>
      <input
        value={fullName}
        onChange={(e) => updateFormData(e)}
        placeholder="Full name"
        type="text"
        name="fullName"
        required
      />

      <input
        value={email}
        onChange={(e) => updateFormData(e)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <button type="submit">Submit</button>
      {/* <button type="submit">submit</button> */}
      {/* <Link onClick={routerChange} to='/TableShow'>TableShow</Link> */}
    </form>
    </>
  );
};

export default Form;
