import React from "react";
class AddArts extends React.Component {
  state = {
    name: "",
    picture:"",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.picture === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addArtHandler(this.state);
    this.setState({ name: "",  picture:""});
    this.props.history.push("/");
  };
  render() {
    return (
      
      <div className="ui main">

        <h2>Add Coffee cups!</h2>
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
            <label>Picture</label>
            <input
              type="text"
              name="picture"
              placeholder="Picture"
              value={this.state.picture}
              onChange={(e) => this.setState({ picture: e.target.value })}
            />
          </div>
          <button className="ui button brown">Add </button>
        </form>
      </div>
    );
  }
}

export default AddArts;
