const { connect } = require("mongoose");

// const uri = "mongodb://localhost:27017/test-db"
const uri = "mongodb+srv://Tejashwini:50Bi6O9F8vm9eklx@cluster0.qw6kk.mongodb.net/brillio-db?retryWrites=true&w=majority"

connect(uri)
    .then(() => console.log("Connected"))
    .catch(console.log)