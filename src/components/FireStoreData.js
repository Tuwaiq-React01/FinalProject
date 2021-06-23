import React from "react";
import { useGetData } from "../hooks/useGetData";
import DCard from "./DCard";

const FireStoreData = () => {
  const [documents] = useGetData();


  return (
    <div>

      <DCard documents={documents}/>
    </div>
  );
};

export default FireStoreData;
