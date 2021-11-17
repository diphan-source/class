const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const authHeader = req.headers['Authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.Status(401).send('Access denied. No token provided.');
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.status(403).send('Access denied. Invalid token.');
        req.user = user;
        next();
    });
};

    const generateToken = (user) => {
    console.log(process.env.ACCESS_TOKEN_SECRET);
       return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1hr'})
  
    }


module.exports = {
    auth,
    generateToken
}