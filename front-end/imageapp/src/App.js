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
import Newimage from './components/Newimage';
import Editimage from './components/Editimage';
import Allimage from './components/Allimage';
import SelectImage from './components/SelectImage';
import SelectChannels from './components/SelectChannels';
import NavBar from './components/NavBar';
import Home from './components/Homepage';
import RandomImage from './components/RandomImage';

function App() {

  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });
  const [dataLoaded, setDataloaded] = useState(false)
  const [userData, setUserData] = useState({ currentDataUser: null })
  const [userProfile , setUserProfile] = useState({})
  const [selectimage, setSelectimage] = useState({});
  const [selectchannels, setselectchannels] = useState({});



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
        
        <NavBar isLoggedIn={auth.isLoggedIn} loginCallback={userLogin} />
        <Route exact path="/">
          <Home  />
        </Route>
       
        <Route exact path="/signup">
          <Singup loginCallback={userLogin} />
        </Route>
        <Route exact path="/login">
          <Login loginCallback={userLogin} />
        </Route>
        <Route exact path="/Profile">
            <Profile data={userData.currentDataUser} setSelectimage={setSelectimage}/>
        </Route>
        <Route exact path="/Newimage">
            <Newimage  data={userData.currentDataUser} />
        </Route>
        <Route exact path="/Editimage">
            <Editimage  selectimage={selectimage} data={userData.currentDataUser} />
        </Route>
        <Route exact path="/Allimages">
            <Allimage  setSelectimage={setSelectimage} data={userData.currentDataUser} />
        </Route>

        <Route exact path="/SelectImage">
            <SelectImage  selectimage={selectimage} data={userData.currentDataUser} setselectchannels={setselectchannels} />
        </Route>

        <Route exact path="/SelectChannels">
            <SelectChannels  setSelectimage={setSelectimage} data={userData.currentDataUser} selectchannels={selectchannels} />
        </Route>

        <Route exact path="/Randomimage">
            <RandomImage  />
        </Route>



        
      

      </Router> : <h1>Loading ...</h1>
    }
  </>
  );
}

export default App;
