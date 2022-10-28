const dotenv = require('dotenv').config()
const express = require('express')
const colors = require("colors")
const { errorHandler } = require("./middleware/errorMiddleware")
const dbConnect = require("./config/db")
const app = express()

dbConnect()

const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/goals", require("./routes/goalRoutes"))
app.use("/api/users", require("./routes/userRoutes"))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is listenig on port ${port}`)
})