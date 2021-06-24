import React, { Component } from 'react'
import axios from 'axios'
import AdminDashboard from './AdminDashboard'
import Header from './Header'
export default class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Celebrities: []
        }
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "https://localhost:5001/api/Celebrities" 
        }).then((response) => {
            this.setState({ Celebrities: [...response.data] })
           // setCelebrities([...response.data])
           console.log("Hello",this.state.Celebrities);
        }).catch((e) => {
            console.log("error", e);
        })
    }

    handle_Delete_Data = (id) => {

        axios({
            method: "delete",
            url: "https://localhost:5001/api/Celebrities/" + id
        }).then((response) => {
            var array = [... this.state.Celebrities];
            var index
            for (let i = 0; i < array.length; i++) {
                if (array[i].id == id)
                    index = i

            } // make a separate copy of the array
            console.log(index, "xrex", array);
            if (index != -1) {
                console.log(">>> ", id)
                array.splice(index, 1);
                this.setState({ Celebrities: array });
            }
        }).catch((e) => {
            console.log("error", e);
        })
    }
    handle_Edit_Data = (id) => {
        //console.log("Name", info.name);
        window.location.href = '/EditCelebrities/'+id
    }

    handle_Post_Data = () => {
        //console.log("Name", info.name);
        window.location.href = '/AddCelebrities'
    }


    render() {
        return (

           
            <div >
                
                <Header ShowSreachBar={false} />
                <div className="AdminCenter shadow-lg  " >
                   <center> <h1 className="my-3 "> Admin Dashboard </h1></center>
                <AdminDashboard Celebrities={this.state.Celebrities}  handle_Delete_Data={this.handle_Delete_Data} handle_Edit_Data={this.handle_Edit_Data} />
                
                <button id="mybtn" type="button" class="btn btn-primary btn-block mt-5 py-2" onClick={()=>{this.handle_Post_Data()}}>ADD A CELEBRITY</button>
                </div>
               
            </div>
            
        )
    }
}
