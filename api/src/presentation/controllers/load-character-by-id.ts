import { LoadCharacterById } from '@/domain/usecases'
import { Controller, HttpResponse, Validation } from '@/presentation/contracts'
import { badRequest, notFound, ok, serverError } from '@/presentation/utils'
import { NotFoundError } from '@/presentation/errors'

export type LoadCharacterByIdParams = {
  id: string
}

export class LoadCharacterByIdController
  implements Controller<LoadCharacterByIdParams>
{
  constructor(
    private readonly validation: Validation,
    private readonly loadCharacterById: LoadCharacterById
  ) {}

  async handle(params: LoadCharacterByIdParams) {
    try {
      const error = this.validation.validate(params)

      if (error) {
        return badRequest(error)
      }

      const character = await this.loadCharacterById.load(params.id)

      if (!character) {
        return notFound(new NotFoundError())
      }

      return ok(character)
    } catch (e) {
      return serverError(e)
    }
  }
}
