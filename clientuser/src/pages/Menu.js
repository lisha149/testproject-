import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import UserAdd from "./UserAdd";
import UserList from "./UserList";
import UserUpdate from "./UserUpdate";
class Menu extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <BrowserRouter>
                <nav>
                <Navbar/>
                <Switch>
                <Route exact path='/userAdd' component={UserAdd}/>
                <Route exact path='/userUpdate' component={UserUpdate} />
                <Route exact path='/userList' component={UserList} />   
                </Switch>
                </nav>
                </BrowserRouter>    
            </div>
        );
    }
}
export default Menu;