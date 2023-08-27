import axios from "axios";
import { loginSuccess,loginFailure,loginStarted } from "./UserRedux";
export const login=async(dispatch,user,password)=>{
    dispatch(loginStarted);
    try{
      const res=await axios.post('https://woocommerce-3mgdgc0ve-arijitdas122001.vercel.app/api/auth/login',
      {
        username:user,
        password:password,
      },{
        headers:{
          'Access-Control-Allow-Origin':'*',
        }
      }
      );
      dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
};