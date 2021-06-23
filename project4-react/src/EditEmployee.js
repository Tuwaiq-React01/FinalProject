import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
export default function EditEmployee(props) {
   
    const [newEmp, setNewEmp] = React.useState(props.user)
    console.log("Test Test ", props.user)

    const handleChange = (event) => {
        const att = event.target.name;
        const newValue = event.target.value;
        const updateEmployee = { ...newEmp}
        updateEmployee[att] = newValue
        console.log("updateEmployee", updateEmployee);
        setNewEmp(updateEmployee)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.editEmp(newEmp);
        console.log(event)
        alert("The employee has been edit successfully")
    }
       
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username : </label>
                    <input  name="name" type="text"  value={newEmp.username} onChange={handleChange} />
                </div>
                <div>
                    <label>Website : </label>
                    <input  name="name" type="text"  value={newEmp.website} onChange={handleChange} />
                </div>
                <div>
                    <label>City</label>
                    <input  name="name" type="text"  value={newEmp.city} onChange={handleChange} />
                </div>
                <div>
                    <input type="submit" value="Edit" className="btn btn-info" />
                </div>
            </form>
        </div>
    )
}