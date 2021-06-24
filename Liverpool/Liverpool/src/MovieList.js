import { Container, Row} from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import EditForm from './EditForm'
export default function MovieList() {

    const [movies, setMovies] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [clickedMovieId, setClickedMovieId] = useState("")
    useEffect(() => {
        getMovie()
    }, [])

    const getMovie = () => {
        axios.get("http://localhost:3000/Movies")
            .then((response) => {
                console.log("get", response.data)
                setMovies(response.data)
            }).catch((err) => {
                console.log("error", err);
            })
    }
    const addMovie = (movie) => {
        axios.post("http://localhost:3000/Movies", movie)
            .then(res => {
                console.log("http://localhost:3000/Movies", res);
                const updateMovieList = [...movies]
                updateMovieList.push(res.data)
                setMovies(updateMovieList);


            }).catch((err) => {
                console.log("error", err);
            })
    }
    const editView = (id) => {
        setIsEdit(!isEdit)
        setClickedMovieId(id)

    }
    const editMovie = (movie) => {
        axios.put(`http://localhost:3000/Movies/${movie.id}`, movie)
            .then((res) => {
                window.location.reload();
                console.log("eidt", res);
            }).catch((err) => {
                console.log("error", err);
            })

    }
    const deleteMovie = (id) => {
        axios.delete(`http://localhost:3000/Movies/${id}`)
            .then((res) => {
                const updatedMoviesList = [...movies];
                const index = updatedMoviesList.findIndex(mov => mov.id === id);
                if (index !== -1) {
                    updatedMoviesList.splice(index, 1);
                    setMovies(updatedMoviesList);

                }
                console.log("delete", res);
            }).catch((err) => {
                console.log("error", err);
            })
    }

    return (
        <center >
        <div  style={{backgroundImage:`url("https://windows10spotlight.com/wp-content/uploads/2016/12/87df4d5fc9a63e774b7d62a05279aa84.jpg")`,width:'1200px',backgroundRepeat: 'no-repeat',width:'auto'}}>
            
            <h1 style={{color:'white',textShadow:"2px 2px",fontFamily: 'Open Sans',fontSize:'100px',fontWeight:'bold'}}>Players List</h1>
           
            <Container style={{ padding: 16 }}>
            <Row>            
                    {movies.map((movie, index) => <div key={index}>
                    <Movie {...movie} editView={editView} deleteMovie={deleteMovie} />
                    {isEdit && clickedMovieId === movie.id ?
                    <EditForm movie={movie} editMovie={editMovie} />
                     : null}
                </div>
                )
                }
               </Row>
        </Container>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        </center>

    )
}
