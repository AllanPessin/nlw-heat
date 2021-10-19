import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateController {
  async hander(request: Request, response: Response) {
    const service = new AuthenticateUserService
    
  }
}

export { AuthenticateController }