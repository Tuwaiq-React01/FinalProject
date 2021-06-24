import Add from "./Components/Add";
import Home1 from "./Components/Home1";
import NavigationBar from "./Components/NavigationBar";
import "react-bootstrap/dist/react-bootstrap.min.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App" style={{backgroundColor: '#e7eff6'}}>
      <Router>
        <NavigationBar></NavigationBar>
        <Route exact path="/" component={Home1}></Route>
        <Route path="/add" component={Add}></Route>
      </Router>
    </div>
  );
}
export default App;