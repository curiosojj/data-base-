import { FastifyRequest, FastifyReply } from "fastify"
import { DeleteCustomeService } from "../services/DeleteCustomeService"

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string }

    const customerService = new DeleteCustomeService();

    const customer = await customerService.execute({ id })

    reply.send(customer);
  }

}

export { DeleteCustomerController }