import express, { request, response } from "express";
import "dotenv/config"

const app = express()

app.get("/github", (request, response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENTE_ID}`)
})

app.get("/signin/callback", (request, response) => {
  const { code } = request.query

  return response.json(code)
})
app.listen(3000, () => console.log("Server is running"))