const bcrypt = require("bcryptjs")

const drivers = [
    {
        "name": "driver one",
        "username": "driver username one",
        "phone": "09383901120",
        "email":"dasda@adasd1.com",
        "password": bcrypt.hashSync('12345678', 12),
        "firstCity": "isfahan",
        "lastCity": "tehran",
        "movingDate": "2024-10-15",
        "returningDate": "2024-10-17",
        "isActive": true
    },
    {
        "name": "driver two",
        "username": "driver username two",
        "phone": "09383901121",
        "email":"dasda@adasd2.com",
        "password": bcrypt.hashSync('12345678', 12),
        "firstCity": "isfahan",
        "lastCity": "tehran",
        "movingDate": "2024-10-15",
        "returningDate": "2024-10-18",
        "isActive": true
    },
    {
        "name": "driver three",
        "username": "driver username three",
        "phone": "09383901122",
        "email":"dasda@adasd3.com",
        "password": bcrypt.hashSync('12345678', 12),
        "firstCity": "isfahan",
        "lastCity": "tehran",
        "movingDate": "2024-10-15",
        "returningDate": "2024-10-18",
        "isActive": true
    },
    {
        "name": "driver four",
        "username": "driver username four",
        "phone": "09383901123",
        "email":"dasda@adasd4.com",
        "password": bcrypt.hashSync('12345678', 12),
        "firstCity": "isfahan",
        "lastCity": "tehran",
        "movingDate": "2024-10-15",
        "returningDate": "2024-10-18",
        "isActive": true
    },
    {
        "name": "driver five",
        "username": "driver username five",
        "phone": "09383901124",
        "email":"dasda@adasd5.com",
        "password": bcrypt.hashSync('12345678', 12),
        "firstCity": "tehran",
        "lastCity": "mashhad",
        "movingDate": "2024-10-18",
        "returningDate": "2024-10-21",
        "isActive": true
    },
    {
        "name": "driver six",
        "username": "driver username six",
        "phone": "09383901125",
        "email":"dasda@adasd6.com",
        "password": bcrypt.hashSync('12345678', 12),
        "firstCity": "tehran",
        "lastCity": "mashhad",
        "movingDate": "2024-10-18",
        "returningDate": "2024-10-21",
        "isActive": true
    },
    {
        "name": "driver seven",
        "username": "driver username seven",
        "phone": "09383901126",
        "email":"dasda@adasd7.com",
        "password": bcrypt.hashSync('12345678', 12),
        "firstCity": "isfahan",
        "lastCity": "mashhad",
        "movingDate": "2024-10-18",
        "returningDate": "2024-10-20",
        "isActive": true
    },
    {
        "name": "driver eight",
        "username": "driver username eight",
        "phone": "09383901127",
        "email":"dasda@adasd8.com",
        "password": bcrypt.hashSync('12345678', 12),
        "firstCity": "isfahan",
        "lastCity": "mashhad",
        "movingDate": "2024-10-18",
        "returningDate": "2024-10-26",
        "isActive": true
    },
    {
        "name": "driver nine",
        "username": "driver username nine",
        "phone": "09383901128",
        "email":"dasda@adasd9.com",
        "password": bcrypt.hashSync('12345678', 12),
        "firstCity": "isfahan",
        "lastCity": "rasht",
        "movingDate": "2024-10-18",
        "returningDate": "2024-10-26",
        "isActive": true
    },
    {
        "name": "driver ten",
        "username": "driver username ten",
        "phone": "09383901129",
        "email":"dasda@adasd10.com",
        "password": bcrypt.hashSync('12345678', 12),
        "firstCity": "isfahan",
        "lastCity": "rasht",
        "movingDate": "2024-10-17",
        "returningDate": "2024-10-20",
        "isActive": true
    },
]


module.exports = drivers