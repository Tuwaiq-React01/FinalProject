import './App.css';
import FacebookLogin from "react-facebook-login";
import {useState,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AnimeCardList from './AnimeCardList';
import AddAnime from './AddAnime';
import EditAnime from './EditAnime';
import AnimeView from './pages/AnimeView';
import MyNav from './MyNav'

function App() {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [token, settoken] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {

      setname(localStorage.getItem("name"))
      setemail(localStorage.getItem("email"))
      settoken(localStorage.getItem("token"));
    }
    console.log(token);
  })

  useEffect(() => {
    if (token) {
      localStorage.setItem("name",name);
      localStorage.setItem("email",email);
      localStorage.setItem("token",token)
    }
  })

  const responseFacebook = (response) => {
    console.log(response);

    setname(response.name)
    setemail(response.email)
    settoken(response.accessToken)
    
  }

  return (
    <div>
      
      {token?
       <Router>
       <MyNav />
       <Switch>
         <Route exact path="/" component={AnimeCardList} />
         <Route path="/add" component={AddAnime} />
         <Route path="/edit" component={EditAnime} />
         <Route path="/view" component={AnimeView} />
       </Switch>
     </Router>
     
        :
    
      <center>
        <div>
        <h1>Log In</h1>
        <FacebookLogin
          appId="475572430184446"
          autoLoad={false}
          fields="name,email"
          callback={responseFacebook}
        />
      </div>
      </center>
      }
      
    </div>
  );
}

export default App;
