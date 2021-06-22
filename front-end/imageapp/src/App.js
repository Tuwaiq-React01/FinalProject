import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from "jwt-decode";
import axios from "axios";
import './App.css';
import { useEffect, useState } from "react";
import Singup from './components/Singup';
import Login from './components/Login'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './components/Profile';

function App() {

  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });
  const [dataLoaded, setDataloaded] = useState(false)
  const [userData, setUserData] = useState({ currentDataUser: null })
  const [userProfile , setUserProfile] = useState({})


  const userLogin = () => {
    if (localStorage.jwtToken) {
      const jwtToken = localStorage.jwtToken;
      const currentUser = jwt_decode(jwtToken, "SECRET").user;
      // const currentBook = jwt_decode(jwtToken, "SECRET").book;
      const currentDataUser = jwt_decode(jwtToken, "SECRET").user;
      setAuth({ currentUser, isLoggedIn: true });
      setUserData({ currentDataUser });
      // getProfile(currentUser);
      // getBook(currentBook)
      getProfile(currentUser);

    } else {
      setAuth({ currentUser: null, isLoggedIn: false });
    }
    setDataloaded(true)
  }


  const getProfile = async (currentUser) => {
    const {data: {user}} =  await axios.get(`http://localhost:4000/api/users/profile/${currentUser._id}`)
    console.log('Loaded user profile: ', user)
    setUserProfile(user)
  }
  
  
  useEffect(() => {
    if (userData.currentDataUser == null) {
      setDataloaded(false)
    }
    else {
      setDataloaded(true)
    }
  }, [userProfile])
   

  useEffect(userLogin, []);
  return (
    <>
    { dataLoaded ?

      <Router>
        

        <Route path="/signup">
          <Singup loginCallback={userLogin} />
        </Route>
        <Route path="/login">
          <Login loginCallback={userLogin} />
        </Route>
        <Route exact path="/Profile">
            <Profile data={userData.currentDataUser} />
        </Route>

      

      </Router> : <h1>Loading ...</h1>
    }
  </>
  );
}

export default App;
