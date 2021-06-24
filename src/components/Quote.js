import React, { useState } from "react";
import { useGetData } from "../hooks/useGetData";
import Update from "./Update";
import Delete from "./Delete";
import Card from "./Card";

const Quote = () => {

  const [documents] = useGetData();


  return (
    <div>
      
     
      <Card documents = {documents}/>
    </div>
  );
};
export default Quote;