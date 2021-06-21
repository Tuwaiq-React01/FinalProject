import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/flower";
import "./App.css";
import Header from "./Header";
import AddFlower from "./AddFlower";
import FlowerList from "./FlowerList";
import FlowerDetail from "./FlowerDetail";
import EditFlower from "./EditFlower";
import Login from "./Login";

function App() {
  const LOCAL_STORAGE_KEY = "flower";
  const [flower, setflower] = useState([]);
  const retrieveflower = async () => {
    const response = await api.get("/flower");
    return response.data;
  };

  const AddFlowerHandler = async (flowers) => {
    console.log(flowers);
    const request = {
      id: uuid(),
      ...flowers,
    };

    const response = await api.post("/flower", request);
    console.log(response);
    setflower([...flower, response.data]);
  };

  const updateflowersHandler = async (flowers) => {
    const response = await api.put(`/flower/${flowers.id}`, flowers);
    const { id, name, image } = response.data;
    setflower(
      flower.map((flowers) => {
        return flowers.id === id ? { ...response.data } : flowers;
      })
    );
  };

  const removeflowersHandler = async (id) => {
    await api.delete(`/flower/${id}`);
    const newFlowerList = flower.filter((flowers) => {
      return flowers.id !== id;
    });

    setflower(newFlowerList);
  };

  useEffect(() => {
  
    const getAllflower = async () => {
      const allflower = await retrieveflower();
      if (allflower) setflower(allflower);
    };

    getAllflower();
  }, []);

  useEffect(() => {
  }, [flower]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <FlowerList
                {...props}
                flower={flower}
                getflowersId={removeflowersHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddFlower {...props} AddFlowerHandler={AddFlowerHandler} />
            )}
            
          />
           <Route
            path="/login"
            render={(props) => (
              <Login {...props} Login={Login} />
            )}
            
          />
          <Route
            path="/edit"
            render={(props) => (
              <EditFlower
                {...props}
                updateflowersHandler={updateflowersHandler}
              />
            )}
          />
          <Route path="/flowers/:id" component={FlowerDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
