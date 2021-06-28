import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Painting from './Painting'
import NewForm from './NewForm'
import EditForm from './EditForm'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function PaintingList() {
    const [paintings, setPaintings] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [clickedPaintingId, setClickedPaintingId] = useState("")

    useEffect(() => {
        getpainting()
    }, [])

    const getpainting = () => {
        axios.get("http://localhost:3000/paintings")
            .then((response) => {
                console.log("get", response.data)
                setPaintings(response.data)
            }).catch((err) => {
                console.log("error", err);
            })
    }

    // const addPainting = (painting) => {
    //     axios.post("http://localhost:3000/paintings", painting)
    //         .then(res => {
    //             console.log("post", res);
    //             const updatePaintingList = [...paintings]
    //             updatePaintingList.push(res.data)
    //             setPaintings(updatePaintingList);


    //         }).catch((err) => {
    //             console.log("error", err);
    //         })
    // }

    const editView = (id) => {
        setIsEdit(!isEdit)
        setClickedPaintingId(id)

    }
    const editPainting = (painting) => {
        axios.put(`http://localhost:3000/paintings/${painting.id}`, painting)
            .then((res) => {

                console.log("eidt", res);
            }).catch((err) => {
                console.log("error", err);
            })

    }
    const deletePainting = (id) => {
        axios.delete(`http://localhost:3000/paintings/${id}`)
            .then((res) => {
                const updatePaintingsList = [...paintings];
                const index = updatePaintingsList.findIndex(painting => painting.id === id);
                if (index !== -1) {
                    updatePaintingsList.splice(index, 1);
                    setPaintings(updatePaintingsList);

                }
                console.log("delete", res);
            }).catch((err) => {
                console.log("error", err);
            })
    }

    return (
        <div className="row paintings body m-0">

            {paintings.map((painting, index) =>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <Painting {...painting} editView={editView} deletePainting={deletePainting} painting={painting} />
                    {isEdit && clickedPaintingId === painting.id ?
                        <EditForm painting={painting} editPainting={editPainting} /> : null}
                </div>
            )}

        </div>




    )
}

