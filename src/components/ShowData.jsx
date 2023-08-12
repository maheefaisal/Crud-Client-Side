import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const ShowData = () => {
  const addeddata = useLoaderData();
  return (
    <>
      {addeddata.map((addeddata1) => (
        <Card key={addeddata1._id} addeddata1={addeddata1}></Card>
      ))}
    </>
  );
};

export default ShowData;
