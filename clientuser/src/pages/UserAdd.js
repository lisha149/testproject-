import React, { Component} from 'react';
import './Style.css';
class UserAdd extends Component{
    constructor(){
        super();
        this.state={
            fullname:'',
            username:'',
            salary:0,
            age:0,
            email:'',
            msg:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        fetch('http://localhost:3001/api/users/create',{
            method: 'post',
            headers: {
              'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: `fullname=${this.state.fullname}&username=${this.state.username}
            &salary=${this.state.salary}&age=${this.state.age}&email=${this.state.email}`
          });
          console.log('User created...' );
          this.setState({msg: 'Users Addeed Successfully.', fullname:'', username:'', 
          salary:'', age:'', email:''});
    }
    render(){
        return(
            <div>
                <h1>Add User : {this.state.msg}</h1>
                <form onSubmit={this.handleSubmit} method='post'>
                <table>
                    <tr>
                    <th>Full Name</th>
                    <td><input type='text' name='fullname' 
                    value={this.state.fullname} onChange={this.handleChange}/></td>
                    </tr>

                    <tr>
                    <th>UserName</th>
                    <td><input type='text' name='username'
                    value={this.state.username} onChange={this.handleChange} /></td>
                    </tr>

                    <tr>
                    <th>Salary</th>
                    <td><input type='text' name='salary'
                    value={this.state.salary} onChange={this.handleChange}/></td>
                    </tr>

                    <tr>
                    <th>Age</th>
                    <td><input type='text' name='age'
                    value={this.state.age} onChange={this.handleChange}/></td>
                    </tr>

                    <tr>
                    <th>Email</th>
                    <td><input type='text' name='email'
                    value={this.state.email} onChange={this.handleChange} /></td>
                    </tr>

                    <tr>
                    <th></th>
                    <td><input type='submit' value='Submit'/> <br/></td>
                    </tr>
                </table>
                </form>
            </div>
        );
    }
}
export default UserAdd;