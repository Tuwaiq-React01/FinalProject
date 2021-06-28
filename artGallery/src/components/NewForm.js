import React from 'react'
import {useState} from 'react'
import { useHistory } from 'react-router-dom'

export default function NewForm(props) {
    const [newPainting, setNewPainting] = useState(null)
    const history = useHistory();
    const handleChange = (event) => {
        const att = event.target.name;
        const newValue = event.target.value;
        const updatePainting = { ...newPainting }
        updatePainting[att] = newValue
        console.log("updatePainting", updatePainting);
        setNewPainting(updatePainting)

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addPainting(newPainting);
        history.push('/paintings');
        
    }
    return (
        <div className="body" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80)`}}>
            <h3  style={{ marginBottom: "50px", padding: "40px" }}>
            Add Your Beautiful Painting
            </h3>
        <div className="form">
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        name="name"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Image Url</label>
                    <input
                        name="image"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        name="price"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Overview</label>
                    <input
                        name="overview"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Your Creativity" />
                </div>

            </form>
            <br/>

        </div>
        </div>
    )
}