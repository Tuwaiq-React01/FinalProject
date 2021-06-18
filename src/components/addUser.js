import React, { useState } from 'react'
import axios from 'axios'

const postPost = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts", {
        userId: 2,
        title: "Rawabe",
        body: "Hi My name is Rawabe"
    }).then(response => {
        console.log("post", response)
    }).catch(error => {
        console.log("Error", error);
    })
}

const AddUserForm = (props) => {
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                if (!user.name || !user.username) return

                props.addUser(user)
                setUser(initialFormState)
            }}
        >
            <label className="form-label">Student Name</label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                className="form-control"
            />
            <label className="form-label">Username</label>
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
                className="form-control"
            />
            <br />
            <button className="btn form-control" style={{backgroundColor: "#4154b3", color: 'white'}}>Add new student</button>
        </form>
    )
}

export default AddUserForm