import axios from "axios";
import { loginSuccess,loginFailure,loginStarted } from "./UserRedux";
export const login=async(dispatch,user,password)=>{
    dispatch(loginStarted);
    try{
      const res=await axios.post('https://backend-api-ycs4.onrender.com/api/auth/login',
      {
        username:user,
        password:password,
      }
      );
      dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
};


export const Signup=async(dispatch,user,password,email)=>{
  dispatch(loginStarted);
  try{
    const res=await axios.post('https://backend-api-ycs4.onrender.com/api/auth/register',
    {
      username:user,
      email:email,
      password:password,
      isAdmin:false
    }
    );
    dispatch(loginSuccess(res.data));
  }catch(err){
    dispatch(loginFailure());
  }
};