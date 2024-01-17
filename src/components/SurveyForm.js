import React, { useState } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import TextAreaInput from "./TextAreaInput";
import "bootstrap/dist/css/bootstrap.min.css";

function SurveyForm() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!formData.name) {
      formIsValid = false;
      errors["name"] = "Name is required";
    }

    if (!formData.gender) {
      formIsValid = false;
      errors["gender"] = "Gender is required";
    }

    if (!formData.nationality) {
      formIsValid = false;
      errors["nationality"] = "Nationality is required";
    }

    if (!formData.email) {
      formIsValid = false;
      errors["email"] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      errors["email"] = "Email is not valid";
    }

    if (!formData.phone) {
      formIsValid = false;
      errors["phone"] = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formIsValid = false;
      errors["phone"] = "Phone number is not valid";
    }

    if (!formData.address) {
      formIsValid = false;
      errors["address"] = "Address is required";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      fetch(`${process.env.REACT_APP_API_URL}/survey`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then((data) => {
          setFormData({
            name: "",
            gender: "",
            nationality: "",
            email: "",
            phone: "",
            address: "",
            message: "",
          });
          setErrors({});
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
    }
  };

  if (isSubmitted) {
    return (
      <div className="container mt-5">
        <h1>Success!</h1>
        <p>Your survey has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Survey Form</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <SelectInput
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={{
            default: "Select Gender",
            values: ["Male", "Female", "Other"],
          }}
        />
        <TextInput
          name="nationality"
          value={formData.nationality}
          placeholder="Nationality"
          onChange={handleChange}
        />
        <TextInput
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <TextInput
          type="number"
          name="phone"
          value={formData.phone}
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <TextAreaInput
          name="address"
          value={formData.address}
          placeholder="Address"
          onChange={handleChange}
        />
        <TextAreaInput
          name="message"
          value={formData.message}
          placeholder="Message"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {Object.keys(errors).length > 0 && (
        <div className="alert alert-danger" role="alert">
          {Object.values(errors).map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SurveyForm;
