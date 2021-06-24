import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cake from './Cake'
import Nav from './nav'
import Footer from './Footer'
import EditForm from './EditForm'
import '../App.css';
export default function CakeList() {
    const [Cakes, setCakes] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [clickedCakeId, setClickedCakeId] = useState(false)
    useEffect(() => {
        getCake()
    }, [])
    const getCake = () => {
        axios.get("http://localhost:3000/cakes")
            .then((response) => {
                console.log("get", response.data)
                setCakes(response.data)
            }).catch((err) => {
                console.log("error", err);
            })
    }
    const editView = (id) => {
        setIsEdit(!isEdit)
        setClickedCakeId(id)
    }
    const editCake = (Cake) => {
        axios.put(`http://localhost:3000/cakes/${Cake.id}`, Cake)
            .then((res) => {
                console.log("eidt", res);
            }).catch((err) => {
                console.log("error", err);
            })
    }
    const deleteCake = (id) => {
        axios.delete(`http://localhost:3000/cakes/${id}`)
            .then(res => {
                const updateCakeList = [...Cakes];
                const index = updateCakeList.findIndex(mov => mov.id === id)
                if (index !== -1) {
                    updateCakeList.splice(index, 1)
                    setCakes(updateCakeList);
                }
            }
            )
    }
    return (
        <React.Fragment>
            <Nav />
            <div className="App" >
                <div className="Mr">
                    <div className="row">
                        {Cakes.map((cake, index) => <div key={index}>
                            <Cake {...cake} editView={editView} deleteCake={deleteCake} />
                            {isEdit && clickedCakeId === cake.id ?
                                <EditForm cake={cake} editCake={editCake} /> : null}
                        </div>
                        )}

                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}