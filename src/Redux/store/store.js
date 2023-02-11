import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../../layouts/Auth/AuthSlice'


export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})