import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import authService from "./api-authorization/AuthorizeService";
import Channels from "./Channels";
import { Link, NavLink } from "react-router-dom";
import '../custom.css'

export default function Community(props) {
  const history = useHistory();
  

  return (
    <div className="container center" style={{maxWidth:"600px",color:"white"}}>
      <li style={{backgroundColor:"rgb(17, 58, 105)"}}className="list-group-item d-flex justify-content-around align-items-center">
        <div
        className="col-4 "
          onClick={() => history.push(`/Channels/${props.element.id}`)}
        >
            <h4 className="hoveringElement">

          {props.element.name}
            </h4>
          <div>

          <small style={{color:"rgb(204, 173, 245)", fontSize:"10px"}}>{props.element.descreption} </small>
          </div>

        </div>

        <div className="col-2 btn-group me-2">
          <div class="dropdown">

                <div
                id="dropdownMenuButton2"
                class="btn dropdown-toggle"
                style={{backgroundColor:"rgb(122,56,208)"}}
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                <i class="material-icons">menu</i>
                </div>
    
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
              style={{backgroundColor:"rgb(1,122,177)"}}
            >
              <li>
                <div class="dropdown-item" onClick={props.EditCommunity}>
                  Edit
                </div>
              </li>
              <li>
                <div class="dropdown-item" onClick={props.deleteCommunity}>
                  Delete
                </div>
              </li>
            </ul>
          </div>
        </div>

      </li>
    </div>
  );
}
