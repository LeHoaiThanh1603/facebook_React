import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    isLogin: false,
    //chứa user login thành công
    user: {}
}


export const AuthSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload
            state.isLogin = true
        },
        registerSuccess: (state, action) => {
            state.user = action.payload
        },
        logout: (state, action) => {
            state.user = action.payload
            state.isLogin = false

        }
    },
})

// Action creators are generated for each case reducer function
export const { loginSuccess, registerSuccess, logout } = AuthSlice.actions

export const authReducer = AuthSlice.reducer

