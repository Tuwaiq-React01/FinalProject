import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AddNewEmolyee(props) {
    const [newEmp, setnewEmp] = React.useState({})
    const [data, setData] = useState([])
    useEffect(() => {
        getUser()
        return () => {
            
        }
    }, [])
    const handleChange = (event) => {
        const att = event.target.name;
        const newValue = event.target.value;
        const updateEmp = { ...newEmp }
        updateEmp[att] = newValue
        console.log("updateEmp", updateEmp);
        setnewEmp(updateEmp)
    }
    const getUser = () => {
        axios({
            method: "get",
            url: "https://jsonplaceholder.typicode.com/users"
        })
            .then((info) => {
                setData([...info.data])
                console.log("getInfoUser ", info)
                console.log("getUser ", info.emp)

            })
            .catch((error) => {
                console.log("error", error)
            })
    }
    const postUser =()=>{
        axios.post("https://jsonplaceholder.typicode.com/users",newEmp //without "" in post 
            // id:11,
            // name:"Taif",
            // username:"taif88 " ,
            // phone:"05637298 " ,
            // email:"taif@gmail.com"
        ).then((res)=>{ // after post what is the response i get it
          console.log("PostUser",res)
          const updateEmployeeList = [...data]
          updateEmployeeList.push(res.data)
          setData(updateEmployeeList);
    }).catch((err)=>{
       console.log("error",err)
    }) }
    const handleSubmit = (event) => {
        event.preventDefault();
        postUser(newEmp);
        alert("The employee has been added successfully")
        console.log("")
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <div>
                <label>ID : </label>
                <input  name="id" type="text"  value={newEmp.id} onChange={handleChange} />
            </div>
            <div>
                <label>Name : </label>
                <input  name="name" type="text"  value={newEmp.name} onChange={handleChange} />
            </div>
            <div>
                <label>Username : </label>
                <input  name="name" type="text"  value={newEmp.username} onChange={handleChange} />
            </div>
            <div>
                <label>Phone Number : </label>
                <input  name="phone" type="text"  value={newEmp.phone} onChange={handleChange} />
            </div>
            <div>
                <label>Email : </label>
                <input  name="email" type="text"  value={newEmp.email} onChange={handleChange} />
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
                <label>Degree :</label>
                <input  name="degree" type="text"  value={newEmp.bs} onChange={handleChange} />
            </div>
            <div>
                <input type="submit" value="Add New Employee" className="btn btn-info"  onClick={handleSubmit}/>
            </div>
        </form>
    </div>
)
}