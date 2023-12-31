const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
require('dotenv').config(
    // { path: '../.env'}
    );
const dbConfig = require('./config/dbConfig');

// //to make use of userRoutes
app.use(express.json());
const usersRoute = require("./routes/usersRoute") //entry point in the server 
// const inventoryRoute = require('./routes/inventoryRoute')
// const dashboardRoute = require("./routes/dashboardRoute")
app.use('/api/users', usersRoute)
// app.use('/api/inventory', inventoryRoute)
// app.use('/api/dashboard', dashboardRoute)

app.listen(port, () => console.log(`Node Js server Started at ${port}`));
// })
//update this 