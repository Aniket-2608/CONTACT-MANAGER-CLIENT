import './login.css'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai';


import { ToastContext } from "../../context/ToastContext";
import { AuthContext } from '../../context/authcontext';



const Login=()=>{
    // const {user, setUser}= useContext(AuthContext);
  const navigate=useNavigate();
 const { loginUser } = useContext(AuthContext)
  const [credentials, setCredentials]=useState({email:'',password:''});
  const [eyeClick,setEyeClick]=useState(true);
  const [passwordType,setPasswordType]=useState("password");


  const handleEyeClick=()=>{
    setEyeClick(false);
    if(eyeClick){
        setPasswordType("text");
    }else{
        setPasswordType("password");
        setEyeClick(true);
    }
};

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

  const validate=(values)=>{
    const err={};
    const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
    if(!values.email){
        err.email="*email is required";
    }
    else if(!emailRegex.test(values.email)){
        err.email="*email is invalid"
    }
    if(!values.password){
        err.password="*password is required";
    }
    return err;
}

    return(
         <>
         
            
         <div className='container' >
        <img src={require("../images/Ellipse-2.png")}  alt="" className="top-circle" />
        <div className='signIn-box'>
            <img src={require("../images/Dots-Group.png")}  alt="" className='dots-1' />
            <div className='header'>
                <h4>Logo</h4>
                <p>Enter your credentials to access your account</p>
            </div>
            <form className="signIn-form" method="POST" onSubmit={handleSubmit}>
                <div className='email'>
                    <input className='email-input' type="email" name="email" placeholder="User ID" onChange={handleChange} required />
                </div>
               
                <div className='password'>
                    <input className='password-input' type={passwordType} name="password" placeholder="Password" onChange={handleChange} required />
                    {
                        (eyeClick)?   <AiFillEyeInvisible className='eye' onClick={handleEyeClick} />:<AiFillEye className='eye' onClick={handleEyeClick} />
                    }
                </div>
        
                <button className="signin-button">Sign In</button>
            </form>
            <button className='signup-button' onClick={()=>navigate('/sign-up')}>Sign Up</button>
  
                <img  src={require("../images/Dots-Group.png")} alt="" className="dots-2" />
        </div>
        <img src={require("../images/Ellipse-1.png")} alt="" className="bottom-circle" />
    </div>

    {/* <img src={require("../images/logout.svg")} alt="" className='logout-btn'/>  onclick={()=>{
        setUser(null);
        localStroge.clear();
    }}*/}
         </>
    )
}
export default Login;