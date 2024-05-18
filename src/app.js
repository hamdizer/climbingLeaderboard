const express=require("express")
const { getDocs,  climbingLeaderboard } = require("./Controllers/controller")
const bodyParser = require("body-parser")
require("dotenv").config()
const app=express()
app.use(bodyParser())
app.get("/climbingLeaderboard",getDocs)
app.post("/climbingLeaderboard",climbingLeaderboard)


app.listen(`${process.env.PORT}`,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`)})
