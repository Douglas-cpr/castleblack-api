import { LoadCharacterByIdService } from '@/application/services'
import { LoadCharacterByIdRepositorySpy } from '@/tests/application/mocks'

import faker from 'faker'
import { throwError } from '@/tests/domain/mocks'

const loadCharacterByIdParams = (): string => {
  return faker.datatype.uuid()
}

type SutTypes = {
  sut: LoadCharacterByIdService
  loadCharacterByIdRepositorySpy: LoadCharacterByIdRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadCharacterByIdRepositorySpy = new LoadCharacterByIdRepositorySpy()
  const sut = new LoadCharacterByIdService(loadCharacterByIdRepositorySpy)

  return {
    sut,
    loadCharacterByIdRepositorySpy
  }
}

describe('Load character by id usecase', () => {
  it('should return an character on success', async () => {
    const { sut } = makeSut()
    const id = loadCharacterByIdParams()

    const character = await sut.load(id)

    expect(character).toHaveProperty('id')
    expect(character).toHaveProperty('name')
    expect(character).toHaveProperty('age')
  }),
    it('should call correct repository with id', async () => {
      const { sut, loadCharacterByIdRepositorySpy } = makeSut()
      const id = loadCharacterByIdParams()

      await sut.load(id)

      expect(
        loadCharacterByIdRepositorySpy.loadCharacterByIdCalledWith
      ).toEqual(id)
    })

  it('should return character with correct id', async () => {
    const { sut } = makeSut()
    const id = loadCharacterByIdParams()

    const character = await sut.load(id)

    expect(character.id).toEqual(id)
  })

  it('should throw error if repository throws', async () => {
    const { sut, loadCharacterByIdRepositorySpy } = makeSut()

    jest
      .spyOn(loadCharacterByIdRepositorySpy, 'load')
      .mockImplementation(throwError)

    const promise = sut.load(loadCharacterByIdParams())

    await expect(promise).rejects.toThrow()
  })
})
