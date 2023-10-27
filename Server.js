const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/registrationDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Schema for User
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    dob: Date,
    gender: String,
    mobile: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
    const { username, email, password, dob, gender, mobile } = req.body;

    const user = new User({
        username,
        email,
        password,
        dob,
        gender,
        mobile
    });

    user.save((err) => {
        if (err) {
            console.log(err);
            res.send("Error occurred while registering user.");
        } else {
            res.send("Registration successful!");
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
