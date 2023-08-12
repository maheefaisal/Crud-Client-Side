import React from "react";
import Swal from "sweetalert2";
import "./add.css";

const Add = () => {
  // Handle form submission
  const handleCrud = (event) => {
    event.preventDefault();

    // Extract form input values
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photourl = form.photourl.value;

    // Create data object to send
    const adding = { name, quantity, supplier, taste, category, photourl };
    console.log(adding);

    // Send data to server
    fetch("http://localhost:5001/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adding),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          // Show success message using SweetAlert
          Swal.fire({
            icon: "success",
            title: "Information Added",
            text: "Data has been successfully added.",
          });
        }
      });
  };

  return (
    <div className="add-container">
      <h1 className="add-heading">Add Information</h1>
      <form className="add-form" onSubmit={handleCrud}>
        {/* Input fields */}
        <label className="add-label" htmlFor="name">
          Name:
        </label>
        <input
          className="add-input"
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
        />

        <label className="add-label" htmlFor="quantity">
          Quantity:
        </label>
        <input
          className="add-input"
          type="text"
          name="quantity"
          id="quantity"
          placeholder="Enter Quantity"
        />

        <label className="add-label" htmlFor="supplier">
          Supplier:
        </label>
        <input
          className="add-input"
          type="text"
          name="supplier"
          id="supplier"
          placeholder="Enter Supplier"
        />

        <label className="add-label" htmlFor="taste">
          Taste:
        </label>
        <input
          className="add-input"
          type="text"
          name="taste"
          id="taste"
          placeholder="Enter Taste"
        />

        <label className="add-label" htmlFor="category">
          Category:
        </label>
        <input
          className="add-input"
          type="text"
          name="category"
          id="category"
          placeholder="Enter Category"
        />

        <label className="add-label" htmlFor="photourl">
          Photo URL:
        </label>
        <input
          className="add-input"
          type="text"
          name="photourl"
          id="photourl"
          placeholder="Enter Photo URL"
        />

        {/* Submit button */}
        <button className="add-button glow-on-hover" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Add;
