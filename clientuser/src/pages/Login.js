import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
class Login extends Component{
    constructor(){
        super();
        this.state={email:'',
                    password:'', 
                    msg:'',
                    isLoggedIn:false
                    }
                }
    handleSubmit=(e)=>{
        e.preventDefault();
        const{email,password}=this.state;//store yser's data
        if(email=='palishashakya@gmail.com' && password=='123'){
            this.setState({isLoggedIn:true});
            console.log(this.state.email,this.state.password);
        }
        else{
            this.setState({isLoggedIn:false, msg:'Invalid Login'});
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        if(this.state.isLoggedIn){
            return<Redirect to={{pathname:'/menu'}}/>
        }
        return(
            <div>
            <h1>Please Login!!</h1>
            <h3>{this.state.msg}</h3>
               <form onSubmit={this.handleSubmit}>
                   Email: <input type="text" placeholder="Enter Username"  name='email' 
                   value={this.state.email} onChange={this.handleChange}/> <br/>
                   Password: <input type="password" placeholder="Enter Password" name='password' 
                   value={this.state.password}  onChange={this.handleChange}/> <br/>
                   <input type='submit' value='Submit'/> <br/>
               </form>
            </div>
        );
    }
}
export default Login;