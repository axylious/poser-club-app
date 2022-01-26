import axios from 'axios'
import { LoginFailure, LoginStart, LoginSuccess, Logout } from './context/AuthActions'

export const loginCall = async (userCredentials, dispatch) => {
   dispatch(LoginStart())
   try {
      const res = await axios.post('auth/login', userCredentials)  
      res.data.isAdmin && dispatch(LoginSuccess(res.data))
   } catch (err) {
      dispatch(LoginFailure(err))
   }
}

export const logoutCall = (dispatch) => {
   dispatch(Logout())
}