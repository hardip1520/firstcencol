import {configureStore} from '@reduxjs/toolkit'
import TotaluserReducer from './TotaluserSlice';
import SingleuserReducer from './SingleuserSlice'

const store = configureStore({
    reducer:{

        totalusers: TotaluserReducer,
        singleuser : SingleuserReducer

    }
})

export default store;