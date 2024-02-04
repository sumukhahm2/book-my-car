import { createSlice } from "@reduxjs/toolkit";

const defaultState={
    isAuthenticated:false,
    token:null,
    authError:'',
    email:''
}

const AuthSlice=createSlice({
    name:'auth',
    initialState:defaultState,
    reducers:{
        login(state){
           state.isAuthenticated=true
        },
        setToken(state,action){
          state.token=action.payload.token
          state.email=action.payload.email
          localStorage.setItem('email',action.payload.email)
          localStorage.setItem('token',action.payload.token)
        },
        logout(state){
            state.isAuthenticated=false
            state.token=!state.token
            localStorage.removeItem('email')
          localStorage.removeItem('token')
        },
        setError(state,action){
            state.authError=action.payload
        }
    }
})

export const authAction=AuthSlice.actions

export default AuthSlice.reducer