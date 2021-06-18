import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import UserTable from './usersTable'
import AddUserForm from './addUser'
import EditUserForm from './EditUser'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase'

// Initialize Firebase
var db = firebase.firestore();

//Delete Fields

const useStyles = makeStyles((theme) => ({

    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    }
}));

function Teacher() {
    const classes = useStyles();
    const usersData = []

    const [users, setUsers] = useState(usersData)
    useEffect(() => {
        db.collection("teachers").get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    users.push(doc.data())
                });
                console.log("log", ...users)
                setUsers([...users])
            })
        return () => {

        }
    }, [])

    const addUser = (user) => {
        user.id = users.length
        db.collection("teachers").add(user).then((docRef) => {
        }).catch((error) => {
            console.log("error", error);
        })
        setUsers([...users, user])
    }

    const deleteUser = async (id) => {
        // const res = await db.collection('teachers').doc().delete();

        db.collection("teachers").get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    db.collection("teachers").doc(doc.id).delete()
                    console.log("delete", doc.id)

                });
                console.log("delete")
            })

        setUsers(users.filter(user => user.id !== id))
    }

    const [edit, setEditing] = useState(false)
    const initialFormState = { id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const editRow = (user) => {

        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }

    const updateUser = (id, updatedUser) => {

        setEditing(false)
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
    }

    return (
        <div className="container">
            <div className="row" >
                <Grid item xs={12} md={5} lg={5}>
                    <Paper className={classes.paper}>
                        {edit ?
                            (
                                <div>
                                    <h2>Edit teacher</h2>
                                    <EditUserForm
                                        setEditing={setEditing}
                                        currentUser={currentUser}
                                        updateUser={updateUser} />
                                </div>
                            ) : (
                                <div>
                                    <h2>Add teacher</h2>
                                    <AddUserForm addUser={addUser} />
                                </div>
                            )}
                    </Paper>
                </Grid>
                <Grid item xs={12} md={5} lg={7}>
                    <Paper className={classes.paper}>
                        <h2>Teachers Table</h2>
                        <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
                    </Paper>
                </Grid>
            </div>
        </div>
    )
}

export default Teacher;
