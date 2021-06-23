import React from 'react';

export default function Home(props) {

            
    return (
        <div>
            <img src={props.pic}/>
            <h1>Hi, Wellcom {props.namme} </h1>
            <br></br>
            <br></br>
            <br></br>
            <h1>" 2Cent "</h1>
            <br></br>
            <h3>On our site, you will find the most wonderful and best quotes and also a list of the best movies, and the best feature is that you can add, delete and modify movies, so that the visitor gets the best information about movies. Finally, for suggestions, contact us on the contact page</h3>
            <br></br>
            
            <img src="https://media2.giphy.com/media/3og0IyDmtho5lv6huo/giphy.gif?cid=ecf05e47hpj3o2yee2s68acrvmqgo16082uhi85pe5c7n8yj&rid=giphy.gif&ct=g" width="1000px" height="400px"/>
            
        </div>
    )

}
