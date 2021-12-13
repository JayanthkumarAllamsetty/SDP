
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());


mongoose.connect('mongodb+srv://charannivas:charan123@cluster0.ejosu.mongodb.net/logindata?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); () => {
    console.log("connected to DB")
}


//user schema 
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//routes routes
app.post("/login", async (req, res) => {
    try {

        const { email, password } = req.body;




        // res.json({'hey': 'there'})
        let user = await User.find({ email: email })


        if (user.length !== 0) {
            
            if (password === user[0].password) {
                res.json({ message: "login sucess", user: user })
            } else {
                res.json({ message: "wrong credentials" })
            }
        } else {
            res.json("not register")
        }

    }
    catch (e) {
        console.log(e)
        res.json("not register")
    }
});
app.post("/register", async (req, res) => {

    try { 
        const { username, email, password } = req.body;
        
        let user = await User.find({ email: email });
        console.log("USER:", user)
        if (user.length !== 0) {
            res.json({ message: "user already exist" })
        } else {
            const user = await User.create({ username, email, password })
    
            res.json({
                message: "user created successfull"
            })
            
        }
    }
    catch(e) {
        console.log(e)
        res.json({
            message: "Some Error Occurred"
        })
    }
    })

app.listen(4000, () => {
    console.log("started")
})