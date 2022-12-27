import './login.css'
const Login=()=>{
    return(
         <>
         <section className='main'>
            
            <form>
            <section className='logo'>
            <img src={require("../images/logo.png")} alt="log"/>
            </section>
            <p>
            Enter your credentials to access your account
                </p>
            
            <section className="email">
              <input type="email"  placeholder="Email"/>
            </section>
            <section className='password'>
              <input type="password" placeholder="Password" />
            </section>
            
            <button>
              Sign In
            </button>
            <button>
              Sign Up
            </button>
            </form>
            

         </section>
         </>
    )
}
export default Login;