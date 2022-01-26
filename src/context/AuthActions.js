export const LoginStart = () => ({
   type: 'LOGIN_START',
})

export const LoginSuccess = (user) => ({
   type: 'LOGIN_SUCCESS',
   payload: user,
})

export const LoginFailure = () => ({
   type: 'LOGIN_FAILURE',
})

export const Logout = () => ({
   type: 'LOGOUT',
})

// TODO: make seperate userActions/Context/Reducer
export const Follow = (userId) => ({
   type: 'FOLLOW',
   payload: userId,
})

export const Unfollow = (userId) => ({
   type: 'UNFOLLOW',
   payload: userId,
})