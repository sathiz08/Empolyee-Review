
// import mongoose
const mongoose = require('mongoose');

// mongoDB url stored in env variable
const MONGODB_URL = "mongodb+srv://ssathish0024:Sathiz08@main.ov8cjai.mongodb.net/Empolyee?retryWrites=true&w=majority"
//  "mongodb://0.0.0.0:27017/Empolyee";


// connect to database
exports.connect = () => {
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        // if database connected
        console.log('Database is connected successfullly')
    )
    .catch((error) => {
        // if there is some error
        console.log('database connection is failed');
        console.log(error);
        exit(1);
    })
}