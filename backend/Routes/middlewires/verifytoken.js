require('dotenv').config();
var jwt = require('jsonwebtoken');
let secret_key=process.env.SECRET_KEY;
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authtoken;
  if (authHeader) {
    try{
    const data = jwt.verify(authHeader, secret_key);
    req.user = data.user;
    next();
    }
    catch(error){
      res.status(401).send({ error: "Please authenticate using a valid token" })
    }
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};
const verifyTokenandAdmin=(req,res,next)=>{
  verifyToken(req,res,()=>{
    if(req.user.isAdmin===true){
      next();
    }else{
      res.status(403).json("Sorry Your not permited to give the data");
    }
  });
}
 module.exports={verifyToken,verifyTokenAndAuthorization,verifyTokenandAdmin};