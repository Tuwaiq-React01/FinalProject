import React from 'react'

export default function Painting(props) {
    return (
        /*
        <li>
            title {props.name}
            <button onClick={() => props.editView(props.id)}> Edit</button>
            <button onClick={() => props.deletePainting(props.id)}> Delete it</button>

        </li> */

        <div >
            <div class="card mt-5">
                <div class="imgBx">
                    <img src={props.painting.image} alt={`${props.painting.name} Image`} />
                </div>
                <div class="details">
                    <h2>{props.painting.name}<br />
                        <span>{props.painting.overview}</span>
                        <span>{`${props.painting.price} $`}</span></h2>
                        <br/>
                        <a className="edit" onClick={() => props.editView(props.id)}><i class="meduiem material-icons">border_color </i></a>
                        <a className="delete" onClick={() => props.deletePainting(props.id)}><i class="material-icons">delete_sweep </i></a>

                      

                </div>

            </div>
        </div>






    )
}

