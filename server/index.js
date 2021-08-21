require("dotenv").config() // для доступ к переменным окружения
const express = require("express")
const sequelize = require("./db")

const app = express()

const PORT = process.env.PORT || 4004

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
