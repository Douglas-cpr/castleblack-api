import { Validation, Controller } from '@/presentation/contracts'
import { badRequest, ok, serverError, notFound } from '@/presentation/utils'
import { DestroyItemById } from '@/domain/usecases'

export type DestroyItemByIdParams = {
  itemId: string
}

export class DestroyItemByIdController
  implements Controller<DestroyItemByIdParams>
{
  constructor(
    private readonly validation: Validation,
    private readonly destroyItemById: DestroyItemById
  ) {}

  async handle(params: DestroyItemByIdParams) {
    try {
      const error = this.validation.validate(params)

      if (error) {
        return badRequest(error)
      }

      const destroyedItem = await this.destroyItemById.destroy(params.itemId)

      if (!destroyedItem) {
        return notFound()
      }

      return ok(destroyedItem)
    } catch (e) {
      return serverError(e)
    }
  }
}
