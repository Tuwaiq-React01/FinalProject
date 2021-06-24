import React from "react";
import { useGetData } from "../hooks/useGetData";
import Update from "./Update";
import Delete from "./Delete";

const FireStoreData = () => {
  const [documents] = useGetData();

  return (
    <div>
      
      {documents.map((documents) => (
          
        <div key={documents.id} className="element ">
             <center><span className='quotation-mark'>‘‘ </span>  </center>
          <div> 
          <center ><p className='quote-text hover' > {documents.value.value} </p></center>
          <hr/>
          <div > 
           <b className="quote-text-writer"> {documents.value.value1}</b> 
           <span className="pull-right">   <Delete doc={documents.id}  /> <Update  doc={documents.id}/>   </span> </div> 
           </div>
          
        </div>
      ))}
    </div>
  );
}
export default FireStoreData;