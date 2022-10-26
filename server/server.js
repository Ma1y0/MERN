const dotenv = require('dotenv').config()
const express = require('express')
const { errorHandler } = require("./middleware/errorMiddleware")
const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/goals", require("./routes/goalRoutes"))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is listenig on port ${port}`)
})