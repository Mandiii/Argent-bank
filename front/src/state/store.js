import {configureStore} from '@reduxjs/toolkit'
import {userTokenReducer} from './user/userSlice'


export const store = configureStore({
    reducer: {userToken: userTokenReducer},
})