const express = require("express");
const cors = require("cors");
const  db  = require("./app/models");
const app = express();
// It is an info ab CORS below 
// https://stackabuse.com/handling-cors-with-node-js/
var corsOptions = {
    origin: 'http://localhost:8081'
};

// It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

app.use(cors(corsOptions));

app.use(express.urlencoded({extend: true}));

const Role = db.role;
db.mongoose.connect("mongodb+srv://zy-uu:hi123@cluster0.omcie.mongodb.net/localLibrary?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connect to the mongooseDB");
    initial();
})
.catch(err => {
    console.log("Connection err",err);
})

function initial() {
    Role.estimatedDocumentCount((err,count) => {
        if(!err && count === 0) {
            new Role ({
                name: 'user'
            }).save(err => {
                if(err) {
                    console.log("error",err);
                }
                console.log("added 'user' to the roles collection");
            });

            new Role({
                name: 'moderator',
            }).save(err => {
                if(err) {
                    console.log("error",err);
                }
                console.log("added 'moderator' to the roles collection");
            })

            new Role({
                name: 'admin',
            }).save(err => {
                if(err) {
                    console.log("error",err);
                }
                console.log("added 'admin' to the roles collection");
            })
        }
    })
}

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

app.get("/", (req,res) => {
    res.json({message: 'Welcome to the application'});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
