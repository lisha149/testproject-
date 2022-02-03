import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar=()=>{
    return(
        <nav>
        <ul>
            <li><NavLink to='/userAdd' exact>Add User</NavLink></li>
            <li><NavLink to='/userUpdate' exact>Update User</NavLink></li>
            <li><NavLink to='/userList' exact>List User</NavLink></li>
        </ul>
    </nav>
    )
}
export default Navbar;