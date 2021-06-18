import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })

    }

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()

                props.updateUser(user.id, user)
            }}
        >
            <label className="form-label">Name</label>
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
            <button className="btn btn-primary">Update user</button>
            <button
                onClick={() => props.setEditing(false)}
                className="btn btn-primary"
            >
                Cancel
        </button>
        </form>
    )
}

export default EditUserForm