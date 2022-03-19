import { LoadCharactersService } from '@/application/services/load-characters'
import { LoadCharactersController } from '@/presentation/controllers/load-characters'
import { FakeLoadCharactersRepository } from '@/infra/fake'
import { Controller } from '@/presentation/contracts'

export const makeLoadCharactersController = (): Controller<void> => {
  const repo = new FakeLoadCharactersRepository()
  const service = new LoadCharactersService(repo)
  return new LoadCharactersController(service)
}
