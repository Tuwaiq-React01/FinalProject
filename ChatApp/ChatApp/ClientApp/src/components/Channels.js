import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import authService from "./api-authorization/AuthorizeService";
import axios from "axios";

export default function Channels(props) {
  const history = useHistory();
  const [allChannels, setAllChannels] = useState([]);
  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    const token = authService.getAccessToken();
    axios({
      method: "get",
      url: `https://localhost:5001/api/Channels/Index?communityId=${props.match.params.id}`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        console.log(res.data);
        setAllChannels(res.data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  // CRUD oprations
  const CreateChannel = async () => {
    const token = await authService.getAccessToken();
    console.log(token);
    var Name = "channel new";
    var Descreption = "Is it going to happen?";
    axios({
      method: "post",
      url: `https://localhost:5001/api/Channels/Create?channelId=${props.match.params.id}&name=${Name}&descreption=${Descreption}`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const EditChannel = async (id) => {
    const token = await authService.getAccessToken();
    var Name = "updated";
    var Descreption = "Is it going to happen?";
    console.log(token);
    axios({
      method: "put",
      url: `https://localhost:5001/api/Channels/Edit?channelId=${id}&name=${Name}&descreption=${Descreption}`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const DeleteChannel = async (id) => {
    const token = await authService.getAccessToken();
    axios({
      method: "delete",
      url: `https://localhost:5001/api/Channels/Delete?channelId=${id}`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const channels = allChannels.map((element, indx) => {
    return (
      <div
        className="container center"
        style={{ maxWidth: "600px", color: "white" }}
      >
        <li
          style={{ backgroundColor: "rgb(17, 58, 105)" }}
          className="list-group-item d-flex justify-content-around align-items-center"
        >
          <div
            className="col hoveringElement"
            onClick={() => history.push(`/Channel/${element.id}`)}
            key={indx}
            >
            <h5># {element.name}</h5>
          </div>

          <div className="col-2 btn-group me-2">
            <div class="dropdown">
              <div
                id="dropdownMenuButton2"
                class="btn dropdown-toggle"
                style={{ backgroundColor: "rgb(122,56,208)" }}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* <img style={{objectFit: "fill"}} src="https://res.cloudinary.com/riodan/image/upload/v1624491813/samples/logo_g2mesp.png"></img> */}
                <i class="material-icons">menu</i>
              </div>
              {/* <i class="material-icons">menu</i>
            </button> */}
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
                style={{ backgroundColor: "rgb(1,122,177)" }}
              >
                <li>
                  <div
                    class="dropdown-item"
                    onClick={() => EditChannel(element.id)}
                  >
                    Edit
                  </div>
                </li>
                <li>
                  <div
                    class="dropdown-item"
                    onClick={() => DeleteChannel(element.id)}
                  >
                    Delete
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </div>
    );
  });
  return (
    <div>
      <div
        className="container center"
        style={{ maxWidth: "600px", color: "white" }}
      >
        <li
          id="headerColor"
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <h2>Channels</h2>
          <a
            className="logoCreate"
            onClick={() => CreateChannel()}
            type="submit"
          >
            <img
              src="https://res.cloudinary.com/riodan/image/upload/v1624491813/samples/logo_g2mesp.png"
              height="70"
              width="70"
            ></img>
          </a>
        </li>
      </div>

      <div>{channels}</div>
    </div>
  );
}
