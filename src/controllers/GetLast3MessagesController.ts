import { Request, Response } from "express";
import { GetLast3MessageService } from "../services/GetLast3MessagesService";

class GetLast3MessagesController {
  async handle(request: Request, response: Response) {
    const service = await new GetLast3MessageService().execute
    // const result = await service.execute

    return response.json(service)
  }
}

export { GetLast3MessagesController }