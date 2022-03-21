import { AddCharacterService } from '@/application/services'
import { mockAddCharacterParams } from '@/tests/domain/mocks'
import { AddCharacterRepositorySpy } from '@/tests/application/mocks'
import { throwError } from '@/tests/domain/mocks/test-helpers'
import { HealthParamOutOfRange } from '@/application/errors'

type SutTypes = {
  sut: AddCharacterService
  addCharacterRepositorySpy: AddCharacterRepositorySpy
}

const makeSut = (): SutTypes => {
  const addCharacterRepositorySpy = new AddCharacterRepositorySpy()
  const sut = new AddCharacterService(addCharacterRepositorySpy)

  return {
    addCharacterRepositorySpy,
    sut
  }
}

describe('Add character usecase', () => {
  it('Should return new character on success', async () => {
    const { sut } = makeSut()
    const character = mockAddCharacterParams()

    const newCharacter = await sut.add(character)

    expect(newCharacter).toMatchObject(character)
  })

  it('should be return new character with new id and created date', async () => {
    const { sut } = makeSut()
    const character = mockAddCharacterParams()

    const newCharacter = await sut.add(character)

    expect(newCharacter.id).toBeTruthy()
    expect(newCharacter.createdAt).toBeTruthy()
  })

  it('should return new character with correct createdDate', async () => {
    const { sut } = makeSut()
    const character = mockAddCharacterParams()
    const createdAt = new Date()

    const newCharacter = await sut.add(character)

    expect(newCharacter.createdAt).toEqual(createdAt)
  })

  it('should throw HealthParamOutOfRange if health param is greather than 100', async () => {
    const { sut } = makeSut()
    const character = mockAddCharacterParams()
    character.health = 101

    const promise = sut.add(character)

    await expect(promise).rejects.toBeInstanceOf(HealthParamOutOfRange)
  })

  it('should throw HealthParamOutOfRange if health param is smallest than 1', async () => {
    const { sut } = makeSut()
    const character = mockAddCharacterParams()
    character.health = 0

    const promise = sut.add(character)

    await expect(promise).rejects.toBeInstanceOf(HealthParamOutOfRange)
  })

  it('should throw error if AddCharacter throws', async () => {
    const { sut, addCharacterRepositorySpy } = makeSut()

    jest.spyOn(addCharacterRepositorySpy, 'add').mockImplementation(throwError)
    const promise = sut.add(mockAddCharacterParams())

    await expect(promise).rejects.toThrow()
  })
})
