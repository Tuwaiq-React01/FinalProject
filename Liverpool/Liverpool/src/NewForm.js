import React from 'react'

export default function NewForm(props) {
    const [newMovie, setNewMovie] = React.useState({})
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
        props.addMovie(newMovie);
    }
    return (
        <center >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <div className="container" style={{ backgroundColor: 'white', paddingBottom: '150px' }}>
                <form onSubmit={handleSubmit} style={{ marginTop: '-50px', padding: '90px' }}>
                   
                    <label className='fw-lighter' style={{fontWeight:'bold'}}>  Name </label> <br />
                    <input
                        name="name"
                        type="text"
                        onChange={handleChange}
                    /><br />
                    <label className='fw-lighter' style={{fontWeight:'bold'}}> Url </label> <br />
                    <input
                        name="coverURL"
                        type="text"
                        onChange={handleChange}
                    />  <br/>
                     <label className='fw-lighter' style={{fontWeight:'bold'}}> Rating </label> <br />
                    <input
                        name="rating"
                        type="number"
                        onChange={handleChange}
                    /><br/>
                    <br></br>
                    <br></br>
                    <input type="submit" value="Add New Player" className='btn btn-primary' />
                </form>
            </div>
            <br></br>
            <br></br>
            <br></br>


        </center>

    )
}
