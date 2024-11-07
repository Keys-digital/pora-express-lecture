const express = require("express")
const app = express()

const PORT = 5200

// MAIN ROUTE
app.get("/", function (request, response) {
  response.send("Welcome to my express server")
})

// ENDPOINTS AND ROUTES
app.get("/api", function (request, response) {
  response.status(200).json({
    error: false,
    message: "Welcome to the API section of my express server",
  })
})

// JSON (is synonymous to) Objects in Javascript
// JSON = JavaScript Object Notation

app.listen(PORT, function () {
  console.log(`App server has started on http://localhost:${PORT}`)
})
