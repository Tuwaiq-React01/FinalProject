import React from "react";
import firebase from "firebase";
import { Container, Form, FormLabel } from "react-bootstrap";
import FireStoreData from './FireStoreData'
const Add = () => {
  const [value, setValue] = React.useState("");
  const [value1, setValue1] = React.useState("");

  const db = firebase.firestore();

  const getValue = (event) => {
    setValue(event.target.value);
  };

  const getValue1 = (event) => {
    setValue1(event.target.value);
  };

  const addValue = () => {
    db.collection("tests")
      .doc(value)
      .set({
        value: value,
        value1: value1,
      })
      .then(function () {
        console.log("Value successfully written!");
        window.location.href = "/";
      })
      .catch(function (error) {
        console.error("Error writing Value: ", error);
      });
      
  };

  const mystyle = {
    backgroundColor: "#e7eff6",
    padding: "10px",
    fontFamily: "Arial",
    height:'689px'
  };
  return (
    <Container style={mystyle}>
      <div>
        <div className="element">
          {/* <center>
            <span className="quotation-mark">‘‘ </span>{" "}
          </center> */}
          <div>
            <center className="form-group">
              <label
                htmlFor="formGroupExampleInput"
                style={{  color: "#fff", fontSize: "22px",marginLeft:'5px' }}
              >
                أكتب النص هنا
              </label>

              <input
                onBlur={getValue}
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
            </center>
            <hr />
            <p>
              <span style={{ fontSize: "28px", color: "#fff" }}>

                
                <input
                  onBlur={getValue1}
                  type="text"
                  className="form-control-v2"
                  id="formGroupExampleInput"
                />
                <label

                  htmlFor="formGroupExampleInput"
                  style={{ fontSize: "22px",marginLeft:'5px' }}
                >
                 
                 : القائل
                </label>
              </span>

              <span className="pull-right">
                
                <button className="btn1" type="button" onClick={addValue} >
                  إضافة
                </button>

              </span>
         </p>
          </div>

          <></>
          {/* <Update doc={documents.id} /> */}
        </div>
      </div>
    </Container>
  );
};
export default Add;
