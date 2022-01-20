import axios from 'axios'
import { useRef } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import './register.css'

export default function Register() {
   const username = useRef()
   const email = useRef()
   const password = useRef()
   const passwordAgain = useRef()
   const navigate = useNavigate()

   const handleClick = async (e) => {
      e.preventDefault()
      if(passwordAgain.current.value !== password.current.value){
         passwordAgain.current.setCustomValidity('Passwords must match.')
      } else {
         const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
         }

         try {
            await axios.post('auth/register', user)
            navigate('/login')
         } catch (err) {
            console.log(err)
         }
      }
   }

   return (
      <div className="login">
         <div className="loginWrapper">
            <div className="loginLeft">
               <h3 className="loginLogo">Poser Club</h3>
               <span className="loginDesc">Find spots to skate brother</span>
            </div>
            <div className="loginRight">
               <form className="loginBox" onSubmit={handleClick}>
                  <input type="text" placeholder='Username' className="loginInput" ref={username} required />
                  <input type="email" placeholder='Email' className="loginInput" ref={email} required />
                  <input type="password" placeholder='Password' className="loginInput" ref={password} required minLength='6' />
                  <input type="password" placeholder='Password Again' className="loginInput" ref={passwordAgain} required />
                  <button className="loginBtn" type='submit'>Sign Up</button>
                  <Link to='/login'>
                     <button className="loginRegisterBtn">Log into Account</button>
                  </Link>
               </form>
            </div>
         </div>
      </div>
   )
}
