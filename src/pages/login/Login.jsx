import './login.css'

export default function Login() {
   return (
      <div className="login">
         <div className="loginWrapper">
            <div className="loginLeft">
               <h3 className="loginLogo">Poser Club</h3>
               <span className="loginDesc">Find spots to skate brother</span>
            </div>
            <div className="loginRight">
               <div className="loginBox">
                  <input type="text" placeholder='Email' className="loginInput" />
                  <input type="text" placeholder='Password' className="loginInput" />
                  <button className="loginBtn">Log In</button>
                  <span className="loginForgot">Forgot Password?</span>
                  <button className="loginRegisterBtn">Create New Account</button>
               </div>
            </div>
         </div>
      </div>
   )
}
