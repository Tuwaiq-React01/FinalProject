import React from "react";
import '/Users/nadaalotaibi/Downloads/React_Tutorial_Contact_Manager_App-react-crud-axios/src/components/index.css';
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

 {/* <a href="./">New Service Request</a> */}
 {/* <button class="ui button white"> <a href="./">New Service Request</a></button> */}
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
{/* <button type="button"  class="medium ui button  " ><Link to= "./"><h2>Coffee lovers</h2></Link></button> */}
{/* <button class="medium ui button"> */}
  {/* <i class="facebook icon"></i><h3>Facebook</h3><Link to= "./Login"><h2>Log in</h2></Link></button> */}

</center>
<center><img className="p" src  = "https://l.top4top.io/p_2000eamox1.png" alt= ""></img></center> 

{/* <img className="n" src="https://c.top4top.io/p_200085ysy1.jpg" alt="Cinque Terre" width="304" height="236"/>  */}
</ul>


<Switch>

    {/* <Route  exact path= '/AddContact'>
       <App />
    </Route>  */}
   
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();