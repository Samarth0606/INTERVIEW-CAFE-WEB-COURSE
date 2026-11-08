const { register, login } = require("../controllers/user.controller");
const verifyToken = require("../middleware/verify");

function userRoutes(app){
    app.post('/api/register', verifyToken , register)
    app.post('/api/login' , login)
}

module.exports = userRoutes;