import { LoadItemsService } from '@/application/services/load-items'
import { FakeLoadItemsRepository } from '@/infra/fake/fake-load-items'
import { Controller } from '@/presentation/contracts'
import { LoadItemsController } from '@/presentation/controllers'

export const makeLoadItemsController = (): Controller<void> => {
  const repo = new FakeLoadItemsRepository()
  const service = new LoadItemsService(repo)
  return new LoadItemsController(service)
}
