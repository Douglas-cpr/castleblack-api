import { LoadItemById } from '@/domain/usecases'
import { Controller, Validation } from '@/presentation/contracts'
import { badRequest, ok, serverError, notFound } from '@/presentation/utils'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export type LoadItemByIdControllerParams = {
  id: string
}

export class LoadItemByIdController
  implements Controller<LoadItemByIdControllerParams>
{
  constructor(
    private readonly validation: Validation,
    private readonly loadItemById: LoadItemById
  ) {}

  async handle(params: LoadItemByIdControllerParams) {
    try {
      const error = this.validation.validate(params)

      if (error) {
        return badRequest(error)
      }

      const item = await this.loadItemById.load(params.id)

      if (!item) {
        return notFound(new NotFoundError())
      }

      return ok(item)
    } catch (e) {
      return serverError(e)
    }
  }
}
