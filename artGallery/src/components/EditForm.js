import React from 'react'
import {useState} from 'react'

export default function EditForm(props) {
    const [newPainting, setNewPainting] = useState(props.painting)
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
        props.editPainting(newPainting);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        name="name"
                        type="text"
                        value={newPainting.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Image Url</label>
                    <input
                        name="image"
                        type="text"
                        value={newPainting.image}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        name="price"
                        type="text"
                        value={newPainting.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Overview</label>
                    <input
                        name="overview"
                        type="text"
                        value={newPainting.overview}
                        onChange={handleChange}
                    />
                </div>
                <div>
               
                    <input type="submit" value="Edit" />
                   
                 
                  
                </div>

            </form>


        </div>
    )
}