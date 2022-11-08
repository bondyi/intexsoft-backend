const jwt = require('jsonwebtoken');
require('dotenv').config();

const accessTokenSecret = process.env.JWT_ACCESS_SECRET;
const refreshTokenSecret = process.env.JWT_REFRESH_SECRET;

const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send("Email or password required");
    }

    //db

    const accessToken = jwt.sign({}, accessTokenSecret);
    const refreshToken = jwt.sign({}, refreshTokenSecret);

    res.send({ accessToken, refreshToken });
}

const register = (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    if (!email || !password) {
        res.status(400).send("Email or password required");
    }

    //db too i guess

    res.send({ email, password, firstName, lastName });
}

const refresh = (req, res) => {
    
}

module.exports = {
    login,
    register,
    refresh
};
