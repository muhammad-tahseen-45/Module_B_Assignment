const express = require("express")
const cookieParser = require('cookie-parser');
// const router = require("./router/router_for_Practic")
const dbconnect = require("./database/db")
const Product_router = require("./router/Product_data_router")
const User_reg_routes = require("./router/User_regester_routes");






const app = express()
app.use(express.json())
app.use(cookieParser())

// app.use(router)
app.use("/",Product_router)

app.use("/user_reg",User_reg_routes)
dbconnect() 

// main()
app.listen(1000,()=>{
    console.log(`server is runing ${1000} ` )
})