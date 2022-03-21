import { ItemModel } from '@/application/models'
import { Item } from '@/domain/entities'
import { AddItem } from '@/domain/usecases'
import { HttpResponse, Validation, Controller } from '@/presentation/contracts'
import { badRequest, ok, serverError } from '@/presentation/utils'

export class AddItemController implements Controller<Item> {
  constructor(
    private readonly validation: Validation,
    private readonly addItem: AddItem
  ) {}

  async handle(item: Item): Promise<HttpResponse<ItemModel>> {
    try {
      const error = this.validation.validate(item)

      if (error) {
        return badRequest(error)
      }

      const newItem = await this.addItem.add(item)
      return ok(newItem)
    } catch (e) {
      return serverError(e)
    }
  }
}
