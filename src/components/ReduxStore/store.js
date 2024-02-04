import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './LoginSlice'

const store=configureStore({
    reducer:{auth:authReducer}
})

export default store