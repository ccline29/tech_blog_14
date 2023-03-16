const { User } = require('../models');

const userdata = [
    {
        "username": "Maverick",
        "password": "Password0987"
    },
    {
        "username": "Colonel",
        "password": "Passw0d123"
    },
    {
        "username": "Jester",
        "password": "123Password"
    },
    {
        "username": "Cobb",
        "password": "P123assword"
    },
    {
        "username": "Hawkeye",
        "password": "Pass12098word"
    },
    {
        "username": "Sundown",
        "password": "Passw0123rd"
    },
    {
        "username": "Pilot",
        "password": "Pass1230987"
    }
]

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;