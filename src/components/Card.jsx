import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./card.css";

const Card = ({ addeddata1 }) => {
  const { name, quantity, supplier, taste, category, photourl, _id } =
    addeddata1;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/add/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deleteCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="card">
      <img className="card-image" src={photourl} alt={name} />
      <h1 className="card-title">{name}</h1>
      <div className="card-details">
        <p className="card-text">Quantity: {quantity}</p>
        <p className="card-text">Supplier: {supplier}</p>
        <p className="card-text">Taste: {taste}</p>
        <p className="card-text">Category: {category}</p>
      </div>
      <div className="card-actions">
        <button className="delete-button" onClick={() => handleDelete(_id)}>
          Delete
        </button>
        <Link className="update-link" to={`/update/${_id}`}>
          Update
        </Link>
      </div>
    </div>
  );
};

export default Card;
