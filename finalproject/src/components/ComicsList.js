import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Comic from './Comic';
import EditForm from './EditForm'

export default function ComicsList() {

    const [comics, setComics] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [clickedComicId, setClickedComicId] = useState("")
    const [selectedComic , setSelectedComic] = useState({})

    useEffect(() => {
        getComic()
      }, [])

      const getComic = () => {
        axios.get("http://localhost:3000/marvel")
          .then((response) => {
            console.log("get", response.data)
            setComics(response.data)
          }).catch((err) => {
            console.log("error", err);
          })
      }

      const editView = (id) => {
        setIsEdit(!isEdit)
        setClickedComicId(id)
    }

    const editComic = (comic) => {
        axios.put(`http://localhost:3000/marvel/${comic.id}`, comic)
            .then((res) => {
                console.log("edit", res);
            }).catch((err) => {
                console.log("error", err);
            })
    }

    const deleteComic = (id) => {
        axios.delete(`http://localhost:3000/marvel/${id}`)
            .then((res) => {
                const updateComicsList = [...comics];
                const index = updateComicsList.findIndex(comic => comic.id === id);
                if (index !== -1) {
                    updateComicsList.splice(index, 1);
                    setComics(updateComicsList);
                }
                console.log("delete", res);
            }).catch((err) => {
                console.log("error", err);
            })
    }

    return (

        <div className="container">
            <div className="row">
            <div className="col s12">
            {comics.map((comic, index) =>
                <div key="index">
                        <Comic {...comic} deleteComic={deleteComic} editView={editView} comic={comic} id={comic.id} image={comic.Image} name={comic.Name} writer={comic.Writer} setSelectedComic={setSelectedComic} />    
                        {isEdit && clickedComicId === comic.id ?
                        <EditForm comic={comic.id} editComic={editComic} /> : console.log("ID not found...")}
                        </div>
                        )}
            </div>
            </div>
        </div>

    )
}

