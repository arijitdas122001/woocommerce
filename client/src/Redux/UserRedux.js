import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:'user',
    initialState:{
         currentUser:null,
         isFetching:false,
         Error:false
    },
    reducers:{
        loginStarted:(state)=>{
            state.isFetching=true;
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentUser=action.payload;
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.Error=true;
        },
        logout:(state,action)=>{
            state.currentUser=action.payload;
            state.isFetching=false;
        }
        
    }
})

export const {loginStarted,loginFailure,loginSuccess,logout}=UserSlice.actions;
export default UserSlice.reducer;