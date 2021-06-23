import React from "react";
import { useHistory } from "react-router-dom";

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    const { id, Name, Img } = props.location.state ;
    this.state = {
      id,
      Name,
      Img,
    };
  }
  
  componentWillUnmount=() =>{
    this.handleSubmit();
  }

   handleSubmit=()=> {
 
    alert("Update successful")
  }
  update = (e) => {
    e.preventDefault();
    this.props.updateMusicalHandler(this.state);
    this.setState({ Name: "", Img: "" });
    this.props.history.push("/");
  };
  render() {
    return (
          <center>
          <div className="bdiv">
          <h4 class="card-header" style={{ backgroundColor: "black" , marginTop:20+"px"}}>
          Edit Musical
      </h4>
      <br/>

        <form className="ui form" onSubmit={this.update}>
          <div className="field">
          <h4>Id</h4>
            <input
              type="text"
              name="name"
              placeholder="Id"
              value={this.state.id}
              onChange={(e) => this.setState({ id: e.target.value })}
            />
          </div>

          <div className="field">
            <h4>Name</h4>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.Name}
              onChange={(e) => this.setState({ Name: e.target.value })}
            />
          </div>

          <div className="field">
            <h4>Image Url</h4>
            <input
              type="text"
              name="image"
              placeholder="image"
              value={this.state.Img}
              onChange={(e) => this.setState({ Img: e.target.value })}
            />

          </div>
          <br/>
          <button   className="btn btn-dark">Update</button>
        </form>
        
      </div>
      </center>
    );
  }
}

export default EditPost;