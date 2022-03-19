import {
  KillCharacterParams,
  KillCharacterController
} from '@/presentation/controllers'
import { throwError } from '@/tests/domain/mocks'
import { KillCharacterSpy, ValidationSpy } from '@/tests/presentation/mocks'
import { serverError } from '@/presentation/utils'

import faker from 'faker'

const killCharacterParams = (): KillCharacterParams => ({
  characterId: faker.datatype.uuid()
})

type SutTypes = {
  sut: KillCharacterController
  validationSpy: ValidationSpy
  killCharacterSpy: KillCharacterSpy
}

const makeSut = (): SutTypes => {
  const killCharacterSpy = new KillCharacterSpy()
  const validationSpy = new ValidationSpy()
  const sut = new KillCharacterController(validationSpy, killCharacterSpy)

  return {
    sut,
    validationSpy,
    killCharacterSpy
  }
}

describe('KillCharacter Controller', () => {
  it('killCharacterController should be defined', () => {
    const { sut } = makeSut()

    expect(sut).toBeDefined()
  })

  it('it should return a character with correct id', async () => {
    const { sut } = makeSut()
    const params = killCharacterParams()

    const httpResponse = await sut.handle(params)
    const killedCharacter = httpResponse.body

    expect(killedCharacter.id).toBe(params.characterId)
  })

  it('should call validation with correct params', () => {
    const { sut, validationSpy } = makeSut()
    const params = killCharacterParams()

    sut.handle(params)

    expect(validationSpy.input).toEqual(params)
  })

  it('should return status 500 if KillCharacter throws', async () => {
    const { sut, killCharacterSpy } = makeSut()
    jest.spyOn(killCharacterSpy, 'kill').mockImplementation(throwError)

    const httpResponse = await sut.handle(killCharacterParams())

    expect(httpResponse).toEqual(serverError(new Error()))
  })

  it('should return status 200 on success', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle(killCharacterParams())

    expect(httpResponse.statusCode).toBe(200)
  })
})
