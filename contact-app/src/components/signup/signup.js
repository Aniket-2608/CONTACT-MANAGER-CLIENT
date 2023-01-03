
import { useContext, useState } from 'react';
import './signup.css'


import { AuthContext } from '../../context/authcontext';
import { ToastContext } from "../../context/ToastContext";

const SignUp = () => {
  const { registerUser } = useContext(AuthContext)
  const [credentials, setCredentials] = useState({ email: "", password: "", confirmpassword: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!credentials.email || !credentials.password || !credentials.confirmpassword) {
      toast.error("Please enter all required fields !");
      return;
    }
    if (credentials.password !== credentials.confirmpassword) {
      toast.error("Password does not match !");
      return;
    }
    const userData = { ...credentials, confirmpassword: undefined }
    registerUser(userData)
  };

  const validate = (values) => {
    const err = {};
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
    if (!values.email) {
      err.email = "*email is required";
    }
    else if (!emailRegex.test(values.email)) {
      err.email = "*email is invalid";
    }
    if (values.password.length < 6) {
      err.password = "*password must contain atleast 6 characters";
    }
    else if (values.password.length > 12) {
      err.password = "*password must contain max 12 characters";
    }
    if (values.conformPass !== values.password) {
      console.log(values.confirmpassword, values.password);
      err.confirmpassword = "*password does'nt matched!!!";
    }
    return err;
  }

  return (
    <>
      <ToastContainer autoclose={2000} />
      <div className='container'>
        <img src={require("../images/Ellipse-1.png")} alt="" className='top-circle' />
        <div className='signup-box'>
          <img src={require("../images/Dots-Group.png")} alt="" className='dots-1' />
          <div className='header'>
            <h4>Logo</h4>
            <p>Create New Account</p>
          </div>
          <form method="POST" className='signup' onSubmit={handleSubmit}>
            <div className='email'>
              <input className='email-input' type="email" placeholder="Email" name='email' onChange={handleChange} required />
            </div>

            <div className='password' style={{ position: "relative" }}>
              <input className='password-input' type="password" placeholder="Password" name='password' onChange={handleChange} required />
            </div>
            <div className='password' style={{ position: "relative" }}>
              <input className='password-input' type="password" placeholder="Confirm  Password" name='confirmpassword' onChange={handleChange} required />
            </div>

            <button className="signup-button" type='submit'>Sign Up</button>
          </form>
          <img src={require("../images/Dots-Group.png")} alt="" className='dots-2' />
        </div>
        <img src={require("../images/Ellipse-2.png")} alt="" className='bottom-circle' />
      </div>
    </>
         
  )
}
export default SignUp;