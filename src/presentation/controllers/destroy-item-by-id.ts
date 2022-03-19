import { DestroyItemByService } from '@/application/services'
import { Validation, Controller } from '@/presentation/contracts'
import { badRequest, ok, serverError, notFound } from '@/presentation/utils'
import { NotFoundError } from '@/presentation/errors'

export type DestroyItemByIdParams = {
  itemId: string
}

export class DestroyItemByIdController
  implements Controller<DestroyItemByIdParams>
{
  constructor(
    private readonly validation: Validation,
    private readonly destroyItemByIdService: DestroyItemByService
  ) {}

  async handle(params: DestroyItemByIdParams) {
    try {
      const error = this.validation.validate(params)

      if (error) {
        return badRequest(error)
      }

      const destroyedItem = await this.destroyItemByIdService.destroy(params.itemId)

      if (!destroyedItem) {
        return notFound(new NotFoundError())
      }

      return ok(destroyedItem)
    } catch (e) {
      return serverError(e)
    }
  }
}
