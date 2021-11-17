const users = require('../models/users');
const {generateToken} = require('../middlewares/jwt');
const bcrypt = require('bcryptjs');



const login = async (req , res) =>{
    const {email , password} = req.body;
    //find the user in the array of users
    const user = users.find(user => user.email === email ) ;
    console.log(user);  
    //find user by email
    if(!user) return res.status(400).send('User not found');

    //compare password
    const validPassword = bcrypt.compare(password, user.password);
    if(!validPassword) return res.status(400).json({
        ok: false,
        message: 'Invalid  password'
    });
     //generate token
        const token = generateToken({
            id: user.id,
            name: user.name,
            email: user.email,
        });
    //send the token
    res.status(200).json({token});
       
    }

    //create new user
     


    module.exports ={
        login 
    }