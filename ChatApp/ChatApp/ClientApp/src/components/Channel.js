import React, { useState, useEffect } from "react";
import * as signalR from "@microsoft/signalr";
import "../custom.css";

export function Channel(props) {
  const [connection, setConnection] = useState(null);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]); //

  useEffect(() => {
    const connect = new signalR.HubConnectionBuilder()
      .withUrl("/chatHub")
      .withAutomaticReconnect()
      .build();

    setConnection(connect);
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          // --------------------
          connection
            .invoke("JoinRoom", String(props.match.params.id))
            .catch(function (err) {
              return console.error(err.toString());
            });
          connection.on("ReceiveNotify", (message) => {
            console.log({ message });
          });
          // --------------------
          connection.on("ReceiveMessage", (u, message) => {
            messages.push(message);
            console.log(u, message);
          });
        })
        .catch((error) => console.log(error));
    }
    return;
  }, [connection]);
  console.log(props);

  const sendMessage = async () => {
    if (connection)
      await connection.invoke(
        "SendMessage",
        String(props.match.params.id),
        "user1",
        String(inputText)
      );
    setInputText("");
  };
  const allM = messages.map((v, indx) => (
    <li id="list-item-1" key={indx}>
      <div className="messaging">{v}</div>
    </li>
  ));

  const leaveChannel = async () => {
    await connection
      .invoke("LeaveRoom", String(props.match.params.id))
      .catch(function (err) {
        return console.error(err.toString());
      });
  };

  return (
    <>
      <div
        className="container center"
        style={{ maxWidth: "600px", color: "white" }}
      >
          {/* <a className="btn btn-outline-danger" onClick={leaveChannel} style={{postion:""}}>x </a> */}
        <li
          id="headerColor"
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <h2># Channel</h2>
          <div className="logoCreate">
            <img
              src="https://res.cloudinary.com/riodan/image/upload/v1624491813/samples/logo_g2mesp.png"
              height="80"
              width="80"
            ></img>
          </div>
        </li>
      </div>

      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-offset="0"
        className="container center scrollspy-example"
        tabindex="0"
        style={{ height: "300px", overflowY: "scroll" , maxWidth: "570px", color: "white",opacity: "0.5",backgroundImage:"url(https://as2.ftcdn.net/jpg/02/00/12/37/500_F_200123756_kWxZAYw2sBu4QsaKmNeUdK3SeaGUo3yP.jpg)"}}
    //   https://thumbs.dreamstime.com/b/vector-internet-pattern-internet-seamless-background-vector-illustration-vector-internet-pattern-internet-seamless-background-114148632.jpg

      >
        <ul>{allM}</ul>
      </div>

      <div
        className="container center"
        style={{ maxWidth: "600px", color: "white" }}
      >
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="logoCreate">
            
          <input
            className="input"
            value={inputText}
            onChange={(input) => {setInputText(input.target.value);}}
            type="text" class="form-control" placeholder="Message ... " aria-label="Message" aria-describedby="addon-wrapping"/>
            </div>

            <button className="btn" onClick={sendMessage} type="primary">
              Send
            </button>
        </li>
        <br/>
        <br/>
        <br/>
      </div>

    </>
  );
}
