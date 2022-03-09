import { LoadItems } from '@/domain/usecases'
import { ItemModel } from '@/application/models'
import { Controller, HttpResponse } from '@/presentation/contracts'
import { serverError, ok } from '@/presentation/utils'

export class LoadItemsController implements Controller<void> {
  constructor(private readonly loadItems: LoadItems) {}

  async handle(): Promise<HttpResponse<ItemModel[]>> {
    try {
      const items = await this.loadItems.load()
      return ok(items)
    } catch (e) {
      return serverError(e)
    }
  }
}
