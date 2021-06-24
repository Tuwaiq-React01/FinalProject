import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/Art";
import "./App.css";
import AddArts from "./AddArts";
import List from "./List";
import ArtDetail from "./ArtDetail";
import EditArt from "./EditArt";

function App() {
  const LOCAL_STORAGE_KEY = "Art";
  const [Art, setArt] = useState([]);

  const retrieveArt = async () => {
    const response = await api.get("/Art");
    return response.data;
  };

  const addArtHandler = async (Arts) => {
    console.log(Arts);
    const request = {
      id: uuid(),
      ...Arts,
    };

    const response = await api.post("/Art", request);
    console.log(response);
    setArt([...Art, response.data]);
  };

  const updateArtHandler = async (Arts) => {
    const response = await api.put(`/Art/${Arts.id}`, Arts);
    const { id, picture } = response.data;
    setArt(
      Art.map((Arts) => {
        return Arts.id === id ? { ...response.data } : Arts;
      })
    );
  };

  const removeArtHandler = async (id) => {
    await api.delete(`/Art/${id}`);
    const newArtList = Art.filter((Arts) => {
      return Arts.id !== id;
    });

    setArt(newArtList);
  };

  useEffect(() => {
    const getAll = async () => {
      const allArts = await retrieveArt();
      if (allArts) setArt(allArts);
    };

    getAll();
  }, []);

  useEffect(() => {
  }, [Art]);

  return (
 
    <div className="ui container">
<img className="n" src="https://c.top4top.io/p_2000ydl3d1.png" alt="Cinque Terre" /> 
<h3></h3>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <List
                {...props}
                contacts={Art}
                getContactId={removeArtHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddArts {...props} addArtHandler={addArtHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditArt
                {...props}
                updateArtHandler={updateArtHandler}
              />
            )}
          />

          <Route path="/Art/:id" component={ArtDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
