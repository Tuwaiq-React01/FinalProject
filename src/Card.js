import React from 'react';

function Card(props) {
    function showform(){
        props.show()
    }

    return (
        <div>
            <div className="card card2" onClick={showform} >
                <img className="card-img-top img" src={props.img} style={{width:"300px", height:"300px"}} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                    </div>
            </div>

        </div>
);
}

export default Card;