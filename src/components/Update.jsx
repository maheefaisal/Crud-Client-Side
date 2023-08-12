import React from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import "./update.css";

/**
 * Update component for modifying existing data.
 * Displays a form with input fields to update various attributes.
 */
const Update = () => {
  const addeddata2 = useLoaderData();
  const { name, quantity, supplier, taste, category, photourl, _id } =
    addeddata2;

  /**
   * Handles the update process when the form is submitted.
   * Sends a PUT request to the server to update the data.
   * Displays a success message using SweetAlert on successful update.
   * @param {Event} event - The form submission event.
   */
  const handleCrudUpdating = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photourl = form.photourl.value;

    const updated = { name, quantity, supplier, taste, category, photourl };
    console.log(updated);
    fetch(`http://localhost:5001/add/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updated),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Tasty Choco Info Updated",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="update-container">
      <h1 className="update-title">Update</h1>
      <form className="update-form" onSubmit={handleCrudUpdating}>
        <input
          type="text"
          defaultValue={name}
          name="name"
          className="update-input"
          placeholder="Enter Name"
        />
        <input
          type="text"
          defaultValue={quantity}
          name="quantity"
          className="update-input"
          placeholder="Enter Quantity"
        />
        <input
          type="text"
          defaultValue={supplier}
          name="supplier"
          className="update-input"
          placeholder="Enter Supplier"
        />
        <input
          type="text"
          defaultValue={taste}
          name="taste"
          className="update-input"
          placeholder="Enter Taste"
        />
        <input
          type="text"
          defaultValue={category}
          name="category"
          className="update-input"
          placeholder="Enter Category"
        />
        <input
          type="text"
          defaultValue={photourl}
          name="photourl"
          className="update-input"
          placeholder="Enter Photo URL"
        />
        <button type="submit" className="update-button">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
