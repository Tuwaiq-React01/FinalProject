import axios from 'axios';
import React, { Component } from 'react';
class Gallary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
        }
        this.getBackgroundImage = this.getBackgroundImage.bind(this)
    }
    componentDidMount() {
        this.getBackgroundImage();
    }
    getBackgroundImage() {
        axios.get(`http://localhost:3000/images`)
            .then((res) => {
                this.setState({ images: res.data })
            }).catch((err) => {
                console.log(err);
            })
    }

    
    render() {
        let imageShow
        if (this.state.images.length > 0) {
            imageShow = this.state.images.map((image, i) => {
                return (
    
                    <div class="column" key={i} >
                        <div class="ui segment" style={{ backgroundColor: "white" }}>
                            <div class="one column stackable centered ui grid" >
                               
                                <div class="ui column center middle aligned  ">
                                    <img src={image} className="ui huge image ">
                                    </img>
    
                                </div>
                               
                            </div>
                        </div>
                    </div>
    
                )
            })
        }
        console.log(this.state.images);
        return (
            this.state.images.length > 0 ?
                (
                    <>
                        
                        <div class="two column stackable ui centered grid" style={{ margin: "0px 20px" }} >
                            {imageShow}
                        </div>
                    </>
                )
                :
                (
                    <div class="ui active dimmer">
                        <div class="ui indeterminate text loader">Preparing Files</div>
                    </div>
                )
            
        
        );
    }
}

export default Gallary;
