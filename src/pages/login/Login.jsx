import { useRef, useContext } from 'react'
import {loginCall} from '../../apiCalls'
import {AuthContext} from '../../context/AuthContext'
import {CircularProgress} from '@material-ui/core'
import './login.css'

export default function Login() {
   const email = useRef()
   const password = useRef()
   const {user, isFetching, error, dispatch} = useContext(AuthContext)

   const handleClick = (e) => {
      e.preventDefault()
      loginCall({email: email.current.value, password: password.current.value}, dispatch)
   }

   console.log(user)

   return (
      <div className="login">
         <div className="loginWrapper">
            <div className="loginLeft">
               <h3 className="loginLogo">Poser Club</h3>
               <span className="loginDesc">Find spots to skate brother</span>
            </div>
            <div className="loginRight">
               <form className="loginBox" onSubmit={handleClick}>
                  <input type="email" placeholder='Email' className="loginInput" ref={email} required/>
                  <input type="password" placeholder='Password' className="loginInput" ref={password} required minLength='6'/>
                  <button className="loginBtn" disabled={isFetching} type='submit'>
                     {isFetching ? <CircularProgress color='inherit' size='20px' /> : 'Log In'}
                  </button>
                  <span className="loginForgot">Forgot Password?</span>
                  <button className="loginRegisterBtn">
                     {isFetching ? <CircularProgress color='inherit' size='20px' /> : 'Create a New Account'}
                  </button>
               </form>
            </div>
         </div>
      </div>
   )
}
