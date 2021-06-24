import React from "react";
import 'ndex.css';
import ReactDOM from "react-dom";
import { Button } from 'reactstrap';
import App from "./components/App";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login";
import AddContact from "./components/AddArts";
import Clock from "./components/Clock";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";

ReactDOM.render(
  <Router>

    <center>  
    <div>
    <nav>
   <Clock></Clock>

  


 <center><img className="photo" src  = "https://f.top4top.io/p_2000ydcir1.jpg" alt= ""></img></center> 
 <ul>

 <center>
 <button class="medium ui button">
  <i class="facebook icon"></i><Link to= "./Login"> Log in</Link>
</button>
<button class="medium ui button">
  <i class="twitter icon"></i><Link to= "./Login"> Log in</Link>
</button>
<button class="medium ui button">
  <i class="linkedin icon"></i><Link to= "./Login"> Log in</Link>
</button>
<button class="medium ui button">
  <i class="google plus icon"></i><Link to= "./Login"> Log in</Link>
</button>
<button class="medium ui button">
  <i class="home icon"></i><Link to= "./"> Coffee Arts</Link>
</button>

</center>
<center><img className="p" src  = "https://l.top4top.io/p_2000eamox1.png" alt= ""></img></center> 

</ul>


<Switch>

    <Route exact  path="/Login" >
      
      <Login/>
      </Route> 

    <Route exact path= '/' > 
    <App />
    </Route>   

    <Route exact path= '/PageNotFound'>
      <PageNotFound></PageNotFound>
    </Route>


    if(<Route exact path = '/PageNotFound'></Route>){
 <center><PageNotFound></PageNotFound>  </center>
    }

  
    </Switch>

     </nav>
    </div>

    </center>  

      </Router>,
 
      document.getElementById('root')

);
