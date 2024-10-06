const House = require("../models/House")
const Owner = require("../models/Owner")

const bcrypt = require("bcryptjs")
// const { MongoClient } = require('mongodb');

function getRandomIranianPhoneNumber() {
    // Define mobile operator codes in Iran
    const operatorCodes = [
        '910', '911', '912', '913', '914', '915', '916', '917', '918', '919',
        '920', '921', '922', '930', '931', '932', '933', '934', '935', '936',
        '937', '938', '939', '990', '991', '992', '993', '994', '995', '996',
        '997', '998'
    ];

    // Pick a random operator code
    const randomOperatorCode = operatorCodes[Math.floor(Math.random() * operatorCodes.length)];

    // Generate the rest of the number (7 digits)
    let randomNumber = '';
    for (let i = 0; i < 7; i++) {
        randomNumber += Math.floor(Math.random() * 10);  // Generate random digit from 0 to 9
    }

    // Combine country code, operator code, and the random number
    const iranianPhoneNumber = `0${randomOperatorCode}${randomNumber}`;

    return iranianPhoneNumber;
}


// async function main() {
//     const uri = "mongodb://localhost:27017/mernparsdb";

//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         // Specify the database and collection
//         const database = client.db('mernparsdb');
//         const collection = database.collection('houses');

//         // Query the collection (fetch data)
//         const query = {}; // Define your query here
//         const options = {
//             // Optionally, you can add options like sort, limit, etc.
//         };

//         const results = await collection.find(query, options).toArray();

//         return results
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     } finally {
//         await client.close();
//     }
// }


// let owners = []

// main().then(async (houses) => {
//     for (let i = 0; i < houses.length; i++) {
        // let data = {
        //     "_id": houses[i].owner,
        //     "phone": getRandomIranianPhoneNumber(),
        //     "password": bcrypt.hashSync('12345678', 12),
        //     "name": `مالک ${i + 1}`,
        //     "username": `username ${i + 1}`,
        //     "email": `owner${i + 1}@owenr${i + 1}.com`
        // }

//         owners.push(data)
//     }

//     console.log(owners);

// })


// module.exports = owners




const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017/mernparsdb";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Specify the database and collection
        const database = client.db('mernparsdb');
        const collection = database.collection('houses');

        // Query the collection (fetch data)
        const query = {}; // Define your query here
        const options = {
            // Optionally, you can add options like sort, limit, etc.
        };

        const results = await collection.find(query, options).toArray();

        return results
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        await client.close();
    }
}


let owners = []


try {

    main().then(async (houses) => {
        for (let i = 0; i < houses.length; i++) {
            newOwner = {
                "_id": houses[i].owner,
                "phone": getRandomIranianPhoneNumber(),
                "password": bcrypt.hashSync('12345678', 12),
                "name": `مالک ${i + 1}`,
                "username": `username ${i + 1}`,
                "email": `owner${i + 1}@owenr${i + 1}.com`
            }
    
            owners=[...owners,newOwner]
        }
    })

} catch (error) {
    console.error(error.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        status: 'failure',
        msg: "خطای داخلی سرور",
        error
    });
}


// module.exports = owners

console.log(owners);