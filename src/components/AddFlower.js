import React from "react";

class AddFlower extends React.Component {
  state = {
    name: "",
    image: "",
  };

  add = (e) => {
    e.preventDefault();
    this.props.AddFlowerHandler(this.state);
    this.setState({ name: "", image: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add flowers</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>image</label>
            <input
              type="text"
              name="image"
              placeholder="image"
              value={this.state.image}
              onChange={(e) => this.setState({ image: e.target.value })}
            />
          </div>
          <button className="ui red basic button">Add</button>
        </form>
      </div>
    );
  }
}

export default AddFlower;
