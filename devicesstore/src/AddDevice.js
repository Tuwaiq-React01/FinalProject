import React from "react";

class AddDevice extends React.Component {
  state = {
    id: "",
    name: "",
    image: "",
    price: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.id === "" || this.state.name === "" || this.state.image === "" || this.state.price === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.postDevices(this.state);
    this.setState({ id: "", name: "", image: "", price: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add a Device</h2>
        <form className="ui form" onSubmit={this.add}>
        <div className="field">
            <label>Device ID:</label>
            <input
              type="text"
              name="id"
              placeholder="ID"
              value={this.state.id}
              onChange={(e) => this.setState({ id: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Device Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Image URL:</label>
            <input
              type="text"
              name="image"
              placeholder="Image"
              value={this.state.image}
              onChange={(e) => this.setState({ image: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Device Price:</label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddDevice;
