import './register.css'

export default function Register() {
   return (
      <div className="login">
         <div className="loginWrapper">
            <div className="loginLeft">
               <h3 className="loginLogo">Poser Club</h3>
               <span className="loginDesc">Find spots to skate brother</span>
            </div>
            <div className="loginRight">
               <div className="loginBox">
                  <input type="text" placeholder='Username' className="loginInput" />
                  <input type="text" placeholder='Email' className="loginInput" />
                  <input type="text" placeholder='Password' className="loginInput" />
                  <input type="text" placeholder='Password Again' className="loginInput" />
                  <button className="loginBtn">Sign Up</button>
                  <button className="loginRegisterBtn">Log into Account</button>
               </div>
            </div>
         </div>
      </div>
   )
}
