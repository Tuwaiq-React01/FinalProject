import React from "react";
import firebase from "firebase";
const Update = ({ doc }) => {
  const [value, setValue] = React.useState("");
  const [value1, setValue1] = React.useState("");
  const [istoggle, setIstoggle] = React.useState(false);
  const db = firebase.firestore();
  const getValue = (event) => {
    setValue(event.target.value);
  };
  const getValue1 = (event) => {
    setValue1(event.target.value);
  };
  const updateValue = () => {
    db.collection("tests")
      .doc(doc)
      .update({
        value: value,
        value1: value1,
      })
      .then(function () {
        console.log("Document successfully updated!");
        window.location.href = "/";
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  };

  return (
    <>
      {istoggle ? (
        <span>
          <span style={{ fontSize: "18px", color: "#fff" }}>
            <input
              onBlur={getValue}
              type="text"
              className="form-control-v2"
              id="formGroupExampleInput"
            />
            <label
              htmlFor="formGroupExampleInput"
              style={{ fontSize: "18px"}}
            >
              : النص
            </label>
          </span>

          <span style={{ fontSize: "18px", color: "#fff" }}>
            <input
              onBlur={getValue1}
              type="text"
              className="form-control-v2"
              id="formGroupExampleInput"
            />
            <label
              htmlFor="formGroupExampleInput"
              style={{ fontSize: "18px" }}
            >
              : القائل
            </label>
          </span>

          <button className="btn2" onClick={updateValue}>
            تحديث
          </button>
        </span>
      ) : (
        <button className="btn2" onClick={() => setIstoggle(true)}>
          تعديل
        </button>
      )}
    </>
  );
};
export default Update;
