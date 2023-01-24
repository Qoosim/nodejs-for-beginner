const usersDB = {
    users: require('../model/users.json'),
    setUser: function (data) { this.users = data }
}
const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) {
        return res.status(400).json({ 'message': 'Username and password are required.'});
    }
    const foundUser = usersDB.users.find((person) => person.username === user);
    if (!foundUser) return res.sendStatus(401); // Unauthorized
    const matchPwd = await bcrypt.compare(pwd, foundUser.password);
    if (matchPwd) {
        // this is where we're going to create JWTs later
        console.log(foundUser, matchPwd);
        res.json({ 'success': `User ${user} is logged in successfully!`});
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };