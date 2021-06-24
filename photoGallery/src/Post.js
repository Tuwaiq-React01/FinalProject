import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Post(props) {
    
    const [isOpen, setOpen] = useState(false);
   



    
    const history = useHistory();
      
    function handleClick() {
        history.push("/EditDelete");
        setOpen(true);
    }






    return (
        <div>
            <div className="card">
                <img className="img" src={props.img} alt="post" />
                <div className="card-body">
                    <h2> {props.title} </h2>{" "}
                </div>{" "}
                <img
                    className="heart"
                    alt="heart"
                    src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/512/edit-icon.png"
                    style={isOpen? {opacity: 1,}: {opacity: 0.5,}}
                    onClick={handleClick}
                    
                />{" "}

                

            </div>{" "}
        </div>
    );
}

export default Post;
