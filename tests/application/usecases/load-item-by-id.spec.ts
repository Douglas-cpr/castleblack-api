import { LoadItemByIdService } from '@/application/services'
import { LoadItemByIdRepositorySpy } from '../mocks'

import faker from 'faker'
import { throwError } from '@/tests/domain/mocks'

const loadItemByIdParams = (): string => {
  return faker.datatype.uuid()
}

type SutTypes = {
  sut: LoadItemByIdService
  loadItemByIdRepositorySpy: LoadItemByIdRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadItemByIdRepositorySpy = new LoadItemByIdRepositorySpy()
  const sut = new LoadItemByIdService(loadItemByIdRepositorySpy)

  return {
    sut,
    loadItemByIdRepositorySpy
  }
}

describe('Load item by id usecase', () => {
  it('should return an item on success', async () => {
    const { sut } = makeSut()
    const id = loadItemByIdParams()

    const item = await sut.load(id)

    expect(item).toHaveProperty('id')
    expect(item).toHaveProperty('description')
    expect(item).toHaveProperty('damage')
  }),
    it('should call correct repository with id', async () => {
      const { sut, loadItemByIdRepositorySpy } = makeSut()
      const id = loadItemByIdParams()

      await sut.load(id)

      expect(loadItemByIdRepositorySpy.id).toEqual(id)
    })

  it('should return character with correct id', async () => {
    const { sut } = makeSut()
    const id = loadItemByIdParams()

    const item = await sut.load(id)

    expect(item.id).toEqual(id)
  })

  it('should throw error if repository throws', async () => {
    const { sut, loadItemByIdRepositorySpy } = makeSut()
    jest.spyOn(loadItemByIdRepositorySpy, 'load').mockImplementation(throwError)

    const promise = sut.load(loadItemByIdParams())

    await expect(promise).rejects.toThrow()
  })
})
