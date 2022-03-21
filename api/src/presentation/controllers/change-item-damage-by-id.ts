import {
  ChangeItemDamageById,
  ChangeItemDamageByIdParams
} from '@/domain/usecases'
import { Controller, Validation } from '@/presentation/contracts'
import { badRequest, notFound, ok, serverError } from '@/presentation/utils'
import { NotFoundError } from '@/presentation/errors'

export class ChangeItemDamageByIdController
  implements Controller<ChangeItemDamageByIdParams>
{
  constructor(
    private readonly validation: Validation,
    private readonly changeItemDamageById: ChangeItemDamageById
  ) {}

  async handle(params: ChangeItemDamageByIdParams) {
    try {
      const error = this.validation.validate(params)

      if (error) {
        return badRequest(error)
      }

      const changedItem = await this.changeItemDamageById.change(params)

      if (!changedItem) {
        return notFound(new NotFoundError())
      }

      return ok(changedItem)
    } catch (e) {
      return serverError(e)
    }
  }
}
