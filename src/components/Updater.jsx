import React, { useState } from "react";

const Updater = () => {
  const [formData, setFormData] = useState({
    name: "",
    rate: "",
    product: "",
    description: "",
    ratecriteria: "",
  });

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Use the formData object here
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="rate">Rate:</label>
        <input
          type="number"
          id="rate"
          name="rate"
          value={formData.rate}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="product">Product:</label>
        <input
          type="text"
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <br />

        <label htmlFor="ratecriteria">Rate Criteria:</label>
        <input
          type="text"
          id="ratecriteria"
          name="ratecriteria"
          value={formData.ratecriteria}
          onChange={handleChange}
        />
        <br />

        <input
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Updater;
