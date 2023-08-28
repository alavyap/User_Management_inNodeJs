const express = require("express");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const connectDB = require("./server/config/db");

const methodOverride = require("method-override");

const flash = require('connect-flash');

const session = require("express-session");

require("dotenv").config();

const app = express();
const port = 3000 || process.env.PORT;

// Connect to MongoDB 
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

// Static Files
app.use(express.static("public"));

// Express Session
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
        }
    })
);


// Flash Message
app.use(flash({ sessionKeyName: 'flashMessage' }));


// Templating Engine
app.use(expressLayout);

app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/main");

app.set("view engine", "ejs");


// Routes
app.use("/", require("./server/routes/customer"));

// Handle 404
app.get("*", (req, res) => {
    res.status(404).render("404");
})


app.listen(port, () => { console.log(`Server is Active on ${port}`) });