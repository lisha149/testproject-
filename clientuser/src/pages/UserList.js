import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
import './Style.css';
class UserList extends Component{
    constructor(){
        super();
        this.state={users:[],
        msg:''}
    }
    loadUsers=()=>{
        fetch('http://localhost:3001/api/users')
        .then(users=>users.json())
        .then (usr=>this.setState({users:usr}));
    }
    componentDidMount(){
        this.loadUsers()
    }
    deleteUser=(id)=>{ 
        fetch('http://localhost:3001/api/users/delete' ,{
            method:'delete',
            headers:{
                'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body:`_id=${id}`
        })
        this.setState({msg: 'Users Deleted Successfully.'});
        this.loadUsers();
        // return<Redirect to='userList'/>
        this.props.history.push('/userList')
    }
    render(){
        return(
            <div>
             <h1>List User:{this.state.msg}</h1>   
             <table>
                <tr>
                    <th>Id</th>
                    <th>FirstName</th>
                    <th>UserName</th>
                    <th>Salary</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                {this.state.users.map((u,i)=>(
                <tr>
                    <td>{u._id}</td>
                <td>{u.fullname}</td>
                <td>{u.username}</td>
                <td>{u.salary}</td>
                <td>{u.age}</td>
                <td>{u.email}</td>
                <td><button onClick={this.deleteUser.bind(this,u._id)}>Delete</button></td>
                </tr>
                ))}
             </table>
            </div>
        );
    }
}
export default UserList;