const express = require("express")
const app = express()

const PORT = 5200

app.listen(PORT, function () {
  console.log(`App server has started on http://localhost:${PORT}`)
})
