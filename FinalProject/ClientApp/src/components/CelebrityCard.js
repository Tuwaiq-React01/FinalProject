import React from 'react'

export default function CelebrityCard(props) {

    const { name ,img ,price,briefDescription} = props.info;
    const handleData = (e) => {
    
        window.location.href='/Celebrities/'+props.info.id
    
    }
    return (
     

            <div className="card-container  shadow my-3" onClick={()=> handleData()}>
                <img id="imgCard" src={img} alt="" ></img>
                <div className="desc">
                    <h2 id="Text-H1" >{name}</h2>
                    <h3 id="Text-H1" >{briefDescription}</h3>
                    <h5 id="Text-H1">{price} SAR</h5>
                    
                    
            </div>


        </div>
    )
}
