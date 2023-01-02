import './login.css'
import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/authcontext';



const Login=()=>{
 const { loginUser } = useContext(AuthContext)
  const [credentials, setCredentials]=useState({email:"" ,password:""});
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setCredentials({...credentials,[name]:value});
  };
  
  const handleSubmit=(event)=>{
    event.preventDefault();

    if(!credentials.email || !credentials.password){
           toast.error("Please enter all required fields !");
           return;
    }

    loginUser(credentials);
  };

    return(
         <>
         <ToastContainer autoclose={2000} />
         <section className='main'>
            
            <form onSubmit={handleSubmit}>
            <section className='logo'>
            <img src={require("../images/logo.png")} alt="log"/>
            </section>
            <p>
            Enter your credentials to acc
            </p>
           
            <section className="email">
              <input type="email"  placeholder="Email" name='email' value={credentials.email} onChange={handleChange} required/>
            </section>
            <section className='password'>
              <input type="password" placeholder="Password"  name='password' value={credentials.password} onChange={handleChange} required/>
            </section>
            <section>
                <input type="submit" value="Sign In" />
            </section>
            <section>
              <Link to="/signup">
              <button>
              Sign Up
            </button>
              </Link>
            
            </section>
            
           
            </form>
            

         </section>
         </>
    )
}
export default Login;