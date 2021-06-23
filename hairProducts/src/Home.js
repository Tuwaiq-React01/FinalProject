import React, { Component } from 'react'
import products from './Product'

export default class Home extends Component {
    render() {
        return (
         <div>
             <div id="myCarousel" class="carousel slide" data-ride="carousel">
               
                <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                </ol>

                <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img src="https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80" alt="Image"></img>
                    <div class="carousel-caption">
                    
                    </div>  
                </div>
                
                
                <div class="item">
                    <img src="https://images.unsplash.com/photo-1497433550656-7fb185be365e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Image"/>
                    <div class="carousel-caption">
                    
                    </div>      
                </div>
                </div>

               
                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
            
            <div class="container text-center">    
            <h3>Featured Items</h3><br></br>
            <div class="row">
                <div class="col-sm-4">
                <img src="https://images.unsplash.com/photo-1601070846144-6be3aad73f7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" class="img-responsive" style={{width:"100%"}} alt="Image"></img>
                <p>Kevin Murphy for wavy hair</p>
                </div>
                <div class="col-sm-4"> 
                <img src="https://images.unsplash.com/photo-1601070846156-c0a176aac8c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1248&q=80" class="img-responsive" style={{width:"100%"} } alt="Image"></img>
                <p>Kevin Murphy for curly/coily hair</p>    
                </div>
                <div class="col-sm-4">
                <div class="well">
                <p>The world is complicated. Hair shouldn't be.
                Answer a few questions and get a free scientific debrief, and a personalized list of products.</p>
                <p>To understand all there is to know about your curl pattern, porosity, density, reliable curly hair products and the best hairstyles for you, take the NaturallyCurly Texture Typing Quiz right now!</p>
                 <a href="https://www.naturallycurly.com/quiz">Hair quiz</a>
                </div>
                </div>
            </div>
            </div><br></br>
    
        </div>
        
    
    )
}
}

