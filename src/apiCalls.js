import axios from 'axios'
import { LoginFailure, LoginStart, LoginSuccess } from './context/AuthActions'

export const loginCall = async (userCredentials, dispatch) => {
   dispatch(LoginStart())
   try {
      const res = await axios.post('auth/login', userCredentials)
      dispatch(LoginSuccess(res.data))
   } catch (err) {
      dispatch(LoginFailure(err))
   }
}