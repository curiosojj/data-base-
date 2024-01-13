import prismaClient from "../prisma"

interface DeleteCustomeprops {
  id: string;
}

class DeleteCustomeService {
  async execute({ id }: DeleteCustomeprops) {

    if (!id) {
      throw new Error("informe o numero de id  de cadastro desta pessoa")
    }
    const findcustomer = await prismaClient.customer.findFirst({
      where: {
        id: id
      }
    })
    if (!findcustomer) {
      throw new Error("Cliente não existe.")

    }
    await prismaClient.customer.delete({
      where: {
        id: findcustomer.id
      }
    })

    return { message: "deletado com sucesso" }
  }
}

export { DeleteCustomeService }