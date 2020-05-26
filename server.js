const express = require("express");
const connectDB = require("./config/db");
const path = require('path');


const app = express();

// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

// define route
app.use("/api/tasks", require("./routes/api/tasks"));

//Serve static assets in production
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
