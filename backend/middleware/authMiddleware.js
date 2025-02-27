import jwt  from "jsonwebtoken"
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";


 const protect = asyncHandler(async(req,res,next)=>{
 let token;
 
 token =req.cookies.jwt;
 if(token){
    try{
           const decoded = jwt.verify(token,process.env.JWT_SECRET);

           req.user= await User.findById(decoded.userId).select('-password');
           next();

    } catch (error){
        res.status(401);
        throw new Error("Not authorized,invaild token");
    }
} else{
    res.status(401);
    throw new Error("Not authorized,no token");
}
 });

const isAdmin = asyncHandler(async (req, res, next) => {
    let token;
    token =req.cookies.jwt;
   const decoded = jwt.verify(token,process.env.JWT_SECRET);
              req.user= await User.findById(decoded.userId)
   
const { email} = req.user;
const adminUser = await User.findOne({ email });
console.log(adminUser);
if (adminUser.role !== "admin") {
throw new Error("You are not an admin");
} else {
next();
}
});

const authLoginUser = asyncHandler(async (req, res, next) => {
    let token;
    token = req.headers.authorization;
 
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.userId).select('-password');
            next();

        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, invalid token");
        }
    } else {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

export { protect, isAdmin,authLoginUser}