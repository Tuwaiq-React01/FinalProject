import React, {Component} from 'react'
import RecipeList from './RecipeList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Add from './Add';
import Search from './Search';


export default class NavBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            picture:""
         
        }
    }
        componentDidMount = () =>{
            this.setState({name: localStorage.getItem('name')})
            this.setState({email: localStorage.getItem('email')})
            this.setState({picture: localStorage.getItem('picture')})   
        }
    Logout = () => {
        localStorage.clear();
        window.location.reload();
        
    }
    render(){    
    return (
        <div>
         <Router>
          <nav class="bg-gray-800  sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
              <div class="relative flex items-center justify-between h-16">
                <div class="">
                  <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                </div>
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div class="flex-shrink-0 flex items-center">
                    <img  className="h-11 w-15" style={{borderRadius: "50%"}} src="https://p.kindpng.com/picc/s/235-2356386_cooking-icon-png-recipe-icon-free-vector-transparent.png"/>
                  </div>
                  <div class="hidden sm:block sm:ml-6">
                    <div class="flex space-x-4">
                      <Link as={Link} to="/Home" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" >Home</Link>
                      <Link as={Link} to="/RecipeList" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Recipes</Link>
                      <Link as={Link} to="/Add" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add</Link>
                      <Link as={Link} to="/Search" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >Search</Link>
                      <Link to="/Logout" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={this.Logout}>Logout</Link>
                    </div>
                  </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                  <div className="flex-shrink-0">
                    <img className="h-10 w-10" style={{borderRadius: "50%"}} alt="avatar" src={this.state.picture}></img>
                  </div>
                  <div class="ml-3 relative">
                    <h4 class="bg-gray-900 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">{this.state.name}</h4>

                    <div>
                      <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span class="sr-only">Open user menu</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sm:hidden" id="mobile-menu">
              <div class="px-2 pt-2 pb-3 space-y-1">
                <Link as={Link} to="/RecipeList" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">RecipeList</Link>

              </div>
            </div>
          </nav>
          <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Search" component={Search} />
            <Route exact path="/RecipeList" component={RecipeList} />
            <Route exact path="/Add" component={Add} />
          </Switch>

        </Router>   
        </div>
    )
    
}
}
