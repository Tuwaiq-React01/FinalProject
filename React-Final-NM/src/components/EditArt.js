import React from "react";

class EditArt extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, picture } = props.location.state.contact;
    this.state = {
      id,
      name,
      picture,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.picture === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateArtHandler(this.state);
    this.setState({ name: "", picture: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Arts list</h2>
        <form className="ui form" onSubmit={this.update}>
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
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditArt;
