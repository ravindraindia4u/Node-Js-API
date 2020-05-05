const config = require("config");
const connectdb = () => {
    mongoClient.connect('process.env.MONGODB_URL', {
        if(err) {
            throw err;
        }
    })
}

module.exports = connectdb;