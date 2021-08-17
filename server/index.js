require("dotenv").config() // для доступ к переменным окружения
const express = require("express")

const app = express()

const PORT = process.env.PORT || 4004

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
