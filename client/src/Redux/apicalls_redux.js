import axios from "axios";
import { loginSuccess,loginFailure,loginStarted } from "./UserRedux";
export const login=async(dispatch,user,password)=>{
    dispatch(loginStarted);
    try{
      const res=await axios.post('https://woocommerce-pe5h.vercel.app/api/auth/login',
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
