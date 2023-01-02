import {Link} from 'react-router-dom'
import {createContext, useState} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/authcontext';

const SignUp=()=>{
  const {registerUser} = useContext(AuthContext)
  const [credentials, setCredentials]=useState({email:"" ,password:"",confirmpassword:""});
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setCredentials({...credentials,[name]:value});
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
  
    if(!credentials.email || !credentials.password || !credentials.confirmpassword){
      toast.error("Please enter all required fields !");
      return;
}
if(credentials.password !== credentials.confirmpassword){
  toast.error("Password does not match !");
  return;
}
const userData={...credentials, confirmpassword: undefined}
registerUser(userData)
  };
    return(
         <>
          <ToastContainer autoclose={2000} />
         <section className='main'>
            <section className='logo'>
            <img src={require("../images/logo.png")} alt="log"/>
            </section>
            <form onSubmit={handleSubmit}> 
            
            <p>
            Create New Account
                </p>
            
            <section className="email">
              <input type="email" placeholder="Email" name='email' value={credentials.email} required  />
            </section>
            <section className='password'>
              <input type="password" placeholder="Password" name='password' value={credentials.password} required  />
            </section>
            <section className='password'>
              <input type="password" placeholder="Confirm  Password" name='confirmpassword' value={credentials.confirmpassword} required/>
            </section>
            <section>
                <input type="submit" value="Sign Up" />
            </section>

            </form>
            

         </section>
         </>
    )
}
export default SignUp;