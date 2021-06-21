import React from "react";
function handleSubmit() {
 
  alert("Update successful")
}
class EditFlower extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, image } = props.location.state.flowers;
    this.state = {
      id,
      name,
      image,
    };
  }

  componentWillUnmount=() =>{
    handleSubmit();
  }
  update = (e) => {
    e.preventDefault();
    this.props.updateflowersHandler(this.state);
    this.setState({ name: "", image: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit flowers</h2>
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
            <label>image</label>
            <input
              type="text"
              name="image"
              placeholder="image"
              value={this.state.image}
              onChange={(e) => this.setState({ image: e.target.value })}
            />
          </div>
          <button  className="ui red basic button">Update</button>
        </form>
      </div>
    );
  }
}

export default EditFlower;
