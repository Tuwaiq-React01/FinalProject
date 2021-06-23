import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LocalLibrary from '@material-ui/icons/LocalLibrary'
import Dashbord from './Dashbord';
import Login from './../Login';
import Teacher from './Teacher';
import Student from './App';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const logout = () => {
    localStorage.clear()
}

export const mainListItems = (
    <div>
        <Link to="/" >
            <ListItem button >
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />

            </ListItem>
        </Link>
        <Link to="/student" > <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Students" />
        </ListItem> </Link>
        <Link to="/teacher">
            <ListItem button>
                <ListItemIcon>
                    <LocalLibrary />
                </ListItemIcon>
                <ListItemText primary="Teachers" />
            </ListItem>
        </Link>
        <Link to="/Logout" onClick={logout}><ListItem button>
            <ListItemIcon>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem> </Link>
    </div>
);


