import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router()

router.get("/", (request, response) => {
  response.json({message: "Server is up"})
})
router.post("/authenticate", new AuthenticateUserController().handle)

export { router }