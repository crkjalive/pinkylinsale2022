// console.log("Hola Mundo Express")
const express = require("express")
const app = express()
const port = process.env.PORT || 3022
const path = require("path")
const connection = require("./connection")
const sales = require('./routes/salesRoutes.js')
const products = require("./routes/productsRoutes.js")
const total = require("./routes/totalRoutes.js")
const mounth = require("./routes/mounthRoutes.js")
const day = require("./routes/dayRoutes.js")

// Settings
app.set("title", "Aplicacion hecha en Node.Js") // title console
app.set("port", 3022) // puerto
app.set("view engine", "ejs") // motor de plantilla
app.set("views", path.join(__dirname, "views")) // path de vistas

// middlewares
/* app.use(logged.isLogged) */
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: false }))

// Routes
app.get("/", (req, res) => {
  res.render("index")
})
// Routes + controller
app.use('/sales', sales)
app.use('/products', products)
app.use('/total', total)
app.use('/mounth', mounth)
app.use('/day', day)

app.listen(port, () => {
  console.log(app.get("title"), "Server run on", app.get("port"))
})
