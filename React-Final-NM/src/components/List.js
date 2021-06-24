import React from "react";
import { Link } from "react-router-dom";
import ArtCard from "./ArtCard";

const List = (props) => {
  console.log(props);

  const deleteArtHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ArtCard
        contact={contact}
        clickHander={deleteArtHandler}
        key={contact.id}
      />
    );
  });
  
  return (
 
    <div className="main">
      
           ..
        <Link to="/add">
          <button className="ui button brown right">Add coffee cups</button>
        </Link>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default List;
