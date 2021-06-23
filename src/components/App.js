import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import UserTable from './usersTable'
import AddUserForm from './addUser'
import EditUserForm from './EditUser'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyCZhY8lXSQFt6Hc0NpkJX4H9CrFleHDr6g",
  authDomain: "student-45dd9.firebaseapp.com",
  projectId: "student-45dd9",
  storageBucket: "student-45dd9.appspot.com",
  messagingSenderId: "535149555225",
  appId: "1:535149555225:web:b1002a1898b5007d788488"
  // Your config form firebase
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
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

function App() {
  const classes = useStyles();
  const usersData = [
    { id: 0, name: '', username: '' },
  ]

  const [users, setUsers] = useState(usersData)
  useEffect(() => {
    db.collection("students").get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          users.push(doc.data())
        });
        setUsers([...users])
      })
    return () => {

    }
  }, [])

  const addUser = (user) => {
    user.id = users.length
    db.collection("students").add(user).then((docRef) => {
    }).catch((error) => {
      console.log("error", error);
    })
    setUsers([...users, user])
  }

  const deleteUser = async (id) => {

    db.collection("students").where("id", "==", id).get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete()
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
    console.log("updateUser")
    db.collection("students").where("id", "==", updatedUser.id).get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.set(updatedUser)
          console.log("edited", doc.id)

        });
        console.log("edit")
      })
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <div className="row" >
        <Grid item md={4}>
          <Paper className={classes.paper}>
            {edit ?
              (
                <div>
                  <h2>Edit student</h2>
                  <EditUserForm
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser} />
                </div>
              ) : (
                <div>
                  <h2>Add Student</h2>
                  <AddUserForm addUser={addUser} />
                </div>
              )}
          </Paper>
        </Grid>
        <Grid item md={7}>
          <Paper className={classes.paper}>
            <h2>Students Table</h2>
            <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
          </Paper>
        </Grid>
      </div>
    </div>
  )
}

export default App;
