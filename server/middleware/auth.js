const jwt = require('jsonwebtoken');
const secretkey='userSchema'

    const verifyToken = async(req,res,next)=>{
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token,secretkey);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};


module.exports = {verifyToken};