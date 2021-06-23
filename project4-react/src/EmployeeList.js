
import axios from 'axios'
import { data } from 'jquery'
import React, { useEffect, useState } from 'react'
import EditEmployee from './EditEmployee'
import Employee from './Employee'
export default function EmployeeList() {

    const [emp, setData] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [clickEmpId, setclickEmpId] = useState("")


    useEffect(() => {
        getUser()


    }, [])
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
    const editView = (id) => {
        setIsEdit(!isEdit)
        setclickEmpId(id)
    }
    const editEmp = ((data) =>{
        axios.put(`https://jsonplaceholder.typicode.com/users/${data.id}`, data)
        .then((res) => {
          console.log("Edit",res)
        }).catch((err) => {
            console.log("error", err);
        })
    })
    return (
        <div>
            <center>
            <h1 className="family">Employee List</h1>
            </center>
                     <Employee arr={emp}  editView={editView} /> 
                    
                    {isEdit && clickEmpId === emp.id ? <EditEmployee user={emp} editEmp={editEmp} /> : null}
                    <EditEmployee user={emp} editEmp={editEmp} />
        </div>
    )
                       }

       
