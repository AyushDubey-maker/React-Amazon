import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom';
import amazon_logo from './amazon_logo.png'
import './Login.css'
import {auth} from './firebase'
import { Alert } from '@material-ui/lab';
function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    function login(event){
       event.preventDefault()
       auth.signInWithEmailAndPassword(email,password)
       .then((auth)=>{
          history.push('/')
       })
       .catch(e=>alert(e.message))
      
       
    }
    const register=(event)=>{
        event.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/')
        })
        .catch(e=>alert(e.message))
    }
    return (
        <div className="login">
         <Link to="/">
             <img className="login_logo"
             src={amazon_logo}
             alt=""
             />
         </Link>
         <div className="login_container">
             <h1>Sign in</h1>
             <form>
                 <h5>Email</h5>
                 <input value={email} type="email" onChange={event=>setEmail(event.target.value)}/>
                 <h5>Password</h5>
                 <input value={password} type="password" onChange={event=>setPassword(event.target.value)}/>
                 <button type="submit" onClick={login} className="login_button">Log-In</button>
                
             </form>
             <p>
             By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
             </p>
            <button type="submit"  onClick={register} className="register_button">Create Your Amazon Account</button>
         </div>
        </div>
    )
}

export default Login
