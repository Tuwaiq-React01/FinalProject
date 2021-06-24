import React from 'react'

export default function LoggedIn(props) {
    return (
        <div>

             <div className="container-fluid">
          <div className="container">
            <div>
              <div className="page-title" >
                <h1 >THANKS {props.name} FOR SIGNING IN AND Welcome To My Humble React API Project </h1> <br/>
                <img src={props.picture} />
                <p >
                  In this page you can choose one of two catagories <br />
       you can choose to see some Quotes or you can check our vast collection of MEMES , choose what suits you ! <br />
       Enjoy !
      </p>
            </div> 
            </div>
          </div>


        </div>

        </div>
    )
}
