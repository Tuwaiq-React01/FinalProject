import React from 'react'
import axios from 'axios'
export default class FormCelebrity extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          Name: " ",
          Email:"",
          Country:"",
          Price:0,
          BriefDescription:"",
          IntroductionVideo:"",
          Img: ''

        };
  
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleImgChange = this.handleImgChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      
    }

    componentDidMount(){
        console.log("this.props",this.props.match.params.id);
        if(this.props.match.params.id){
            axios({
                method: "get",
                url: "https://localhost:5001/api/Celebrities/"+ this.props.match.params.id
            }).then((response) => {
                this.setState({
                    Name: response.data.name,
                    Email:response.data.email,
                    Country:response.data.country,
                    BriefDescription:response.data.briefDescription,
                    IntroductionVideo:response.data.introductionVideo,
                    Price:response.data.price,
                    Description:response.data.description,
                    Img:response.data.img
                    
                    })
               // setCelebrities([...response.data])
               console.log("Hello Price",response.data);
            }).catch((e) => {
                console.log("error", e);
            })
        }

    }
  
    handleNameChange(event) {
       
      this.setState({Name: event.target.value});
      console.log(this.state.Name);
    }
    handleDescriptionChange(event) {
       
        this.setState({Description: event.target.value});
        console.log(this.state.Name);
      }
      handleBriefDescriptionChange(event) {
       
        this.setState({BriefDescription: event.target.value});
        console.log(this.state.Name);
      }
    handlePriceChange(event) {
       
        this.setState({Price: event.target.value});
        console.log(this.state.Name);
      }
    handleIntroductionVideoChange(event) {
       
        this.setState({IntroductionVideo: event.target.value});
        console.log(this.state.Name);
      }

    handleEmailChange(event) {
       
        this.setState({Email: event.target.value});
        console.log(this.state.Name);
      }

    handleCountryChange(event) {
       
        this.setState({Country: event.target.value});
        console.log(this.state.Country);
      }

    handleImgChange(event) {
        this.setState({Img: event.target.value});
      }
  
    handleSubmit(e) {


        var Celebrity={
            name: this.state.Name,
            email:this.state.Email,
            country:this.state.Country,
            price:this.state.Price,
            briefDescription:this.state.BriefDescription,
            description:this.state.Description,
            introductionVideo:this.state.IntroductionVideo,
            img:this.state.Img,

        }

       var x= this.props.match.params.id ? true: false
       
       if(x){
           console.log("Plase",Celebrity);
        Celebrity.id=this.props.match.params.id
        axios.put('https://localhost:5001/api/Celebrities/'+Celebrity.id, Celebrity)
          .then((response) => {
            console.log(">>>>",Celebrity);
          }, (error) => {
            console.log(error);
          });
       }
       else{
        axios.post('https://localhost:5001/api/Celebrities', Celebrity)
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
       }
        

        window.location.href = '/admin'

    }
  
    render() {
      return (
        <div className="AdminCenter shadow-lg  " >

        <div className="d-flex flex-column">
           {this.props.match.params.id? <h1 className="m-auto" >EDIT A CELEBRITY</h1>:<h1 className="m-auto" >ADD A CELEBRITY</h1>} 
          <h6>
            Name:
          </h6>
            <input type="text" value={this.state.Name} onChange={(e)=>this.handleNameChange(e)} />
          <br/>
          <h6>
            Email:
          </h6>
            <input type="text" value={this.state.Email} onChange={(e)=>this.handleEmailChange(e)} />
          <br/>
          <h6>
          Country:
          </h6>
            <input type="text" value={this.state.Country} onChange={(e)=>this.handleCountryChange(e)} />
          <br/>
          <h6>
          Brief Description:
          </h6>
            <input type="text" value={this.state.BriefDescription} onChange={(e)=>this.handleBriefDescriptionChange(e)} />
          <br/>
          <h6>
          Introduction Video:
          </h6>
            <input type="text" value={this.state.IntroductionVideo} onChange={(e)=>this.handleIntroductionVideoChange(e)} />
          <br/>
          <h6>
          Price:
          </h6>
            <input type="text" value={this.state.Price} onChange={(e)=>this.handlePriceChange(e)} />
          <br/>
          <h6>
          Description:
          </h6>
            <input type="text" value={this.state.Description} onChange={(e)=>this.handleDescriptionChange(e)} />
          <br/>
          <h6>
          Image:
          </h6>
            <input type="text" value={this.state.Img} onChange={(e)=>this.handleImgChange(e)} />
         <br/>
         <button id="mybtn" type="button" class="btn btn-primary btn-block mt-5 py-3" onClick={(e)=>this.handleSubmit(e)}  >SUBMIT</button>
         </div>
        </div>
      );
    }
  }

  
