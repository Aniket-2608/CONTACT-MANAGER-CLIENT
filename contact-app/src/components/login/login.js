import './login.css'
import { useState } from 'react'
const Login=()=>{
  const [credentials, setCredentials]=useState({email:"" ,password:""});
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setCredentials({...credentials,[name]:value});
  };
  
  const handleSubmit=(event)=>{
    event.preventDefault();
  };

    return(
         <>
         <section className='main'>
            
            <form onSubmit={handleSubmit}>
            <section className='logo'>
            <img src={require("../images/logo.png")} alt="log"/>
            </section>
            <p>
            Enter your credentials to acc<button>
              Sign Up
            </button>
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