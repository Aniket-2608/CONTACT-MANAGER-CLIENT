
const SignUp=()=>{
    return(
         <>
         <section className='main'>
            <section className='logo'>
            <img src={require("../images/logo.png")} alt="log"/>
            </section>
            <form>
            
            <p>
            Create New Account
                </p>
            
            <section className="email">
              <input type="email" placeholder="Email" />
            </section>
            <section className='password'>
              <input type="password" placeholder="Password" />
            </section>
            <section className='password'>
              <input type="password" placeholder="Confirm  Password"/>
            </section>
            <button>
              Sign Up
            </button>

            </form>
            

         </section>
         </>
    )
}
export default SignUp;