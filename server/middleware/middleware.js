import jwt from "jsonwebtoken"
const secretKey="ishija$3"
function authMiddleware(req, res, next){
    const token= req.cookies.token;

    if(!token) return res.status(401).send("Unauthenticated")
try{
    const decoded= jwt.verify(token, secretKey);
    req.user=decoded
    next();
}
catch(err){
    console.log(err);
    res.status(401).send("Unauthorized")
}   
}