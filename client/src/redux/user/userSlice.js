import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser : null,
    error: null,
    loading:false, 
}


const userSlice = createSlice({


    name: 'user',
    initialState,
    reducers: {
        signInStart:(state)=>{
            state.loading = true;
            state.error = null;   
        },
        signInSuccess:(state, action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error=null;
        },
        signInFailure: (state , action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        updateStart:(state)=>{
            state.loading = true;
            state.error = null;
        },
        updateSuccess: (state,action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserStart:(state)=>{
            state.loading = true;
            state.error = null;
        },
        deleteUser:(state)=>{
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        deleteUserFilure:(state,action)=>{
         state.loading = false;
         state.error = action.payload;
        },
        signoutSuccess:(state)=>{
            state.currentUser = null;
            state.loading = false;
            state.error = null;

        }


    }



})


export const {signInStart , signInSuccess , signInFailure , updateSuccess , updateFailure , updateStart , deleteUser , deleteUserStart , deleteUserFilure , signoutSuccess} = userSlice.actions;

export default userSlice.reducer;