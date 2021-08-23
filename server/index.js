require("dotenv").config() // для доступ к переменным окружения
const express = require("express")
const sequelize = require("./db")
const models = require("./models/models")
const cors = require("cors")
const router = require("./routes")

const PORT = process.env.PORT || 4004

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api", router)

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "WOW" })
// })

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()
