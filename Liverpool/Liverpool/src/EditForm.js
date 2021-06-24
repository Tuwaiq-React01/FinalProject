import React from 'react'

export default function EditForm(props) {
    const [newMovie, setNewMovie] = React.useState(props.movie)
    const handleChange = (event) => {
        const att = event.target.name;
        const newValue = event.target.value;
        const updateMovie = { ...newMovie }
        updateMovie[att] = newValue
        console.log("updateMovie", updateMovie);
        setNewMovie(updateMovie)

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.editMovie(newMovie);
    }
    return (
        <div style={{backgroundColor:'white'}}>
            <form onSubmit={handleSubmit}>
                <div>
                    <br></br>
                    <label className='fw-lighter' style={{fontWeight:'bold'}}>Name</label><br/>
                    <input
                        name="name"
                        type="text"
                        value={newMovie.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='fw-lighter' style={{fontWeight:'bold'}}> Url</label><br/>
                    <input
                        name="coverURL"
                        type="text"
                        value={newMovie.coverURL}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div>
                    <input type="submit" value="Update"  className='btn btn-secondary'/>
                </div>
<br/>
            </form>


        </div>
    )
}
