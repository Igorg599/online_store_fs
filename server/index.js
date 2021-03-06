require("dotenv").config() // для доступ к переменным окружения
const express = require("express")
const sequelize = require("./db")
const models = require("./models/models")
const cors = require("cors")
const fileupload = require("express-fileupload")
const router = require("./routes")
const errorHandler = require("./middleware/ErrorHandlingMiddleware")
const path = require("path")

const PORT = process.env.PORT || 4004

const app = express()
app.use(cors()) // обработка заголовков
app.use(express.json()) // обработка json-объектов
app.use(express.static(path.resolve(__dirname, "static")))
app.use(fileupload({})) // для работы с файлами
app.use("/api", router) // обработка роутов

// Обработка ошибок, всегда последний Middleware
app.use(errorHandler)

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
