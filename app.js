//express is a web framework
const express = require('express');
//chalk is a package that allows us to color our terminal output
const chalk = require('chalk');
//debug is a package that allows us to log information to the console
const debug = require('debug')('app');
//morgan is a package that allows us to log for http requests
const morgan = require('morgan');
//path is a package that allows us to work with paths
const path = require('path');

const productsRouter = require("./src/router/productsRouter");


const app = express();
//main port 3000 backup port is 4000
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));
 
app.set("views","./src/views");
app.set("view engine","ejs")



app.use("/products", productsRouter)

app.get("/",(req,res)=>{
 
    res.render("index",{
        username: 'KornTK', customers: ["Kitti","korn","kite"]
    });
    
})

app.listen(PORT, () => {
    debug("Listening on port " + chalk.green(PORT));

})
