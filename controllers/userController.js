const users = require('../models/users');

//get all users
const getAllUsers = (req, res) => {
    const user = users.map((user)=>{
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        };
    });
    res.status(200).json(user);
};


module.exports = {
    getAllUsers
};