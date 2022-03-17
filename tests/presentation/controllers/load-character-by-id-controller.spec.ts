import {
  LoadCharacterByIdController,
  LoadCharacterByIdParams
} from '@/presentation/controllers'
import { throwError } from '@/tests/domain/mocks'
import { ValidationSpy, LoadCharacterByIdSpy } from '@/tests/presentation/mocks'

import faker from 'faker'
import { serverError } from '@/presentation/utils'

const loadCharacterByIdParams = (): LoadCharacterByIdParams => ({
  id: faker.datatype.uuid()
})

type SuyTypes = {
  sut: LoadCharacterByIdController
  validationSpy: ValidationSpy
  loadCharacterByIdSpy: LoadCharacterByIdSpy
}

const makeSut = (): SuyTypes => {
  const loadCharacterByIdSpy = new LoadCharacterByIdSpy()
  const validationSpy = new ValidationSpy()
  const sut = new LoadCharacterByIdController(
    validationSpy,
    loadCharacterByIdSpy
  )

  return {
    sut,
    validationSpy,
    loadCharacterByIdSpy
  }
}

describe('LoadCharacterById Controller', () => {
  it('controller should be defined', () => {
    const { sut } = makeSut()

    expect(sut).toBeDefined()
  }),
    it('it should return character with correct id', async () => {
      const { sut } = makeSut()
      const params = loadCharacterByIdParams()

      const httpResponse = await sut.handle(params)
      const character = httpResponse.body

      expect(character.id).toEqual(params.id)
    })

  it('should call validation with correct params', async () => {
    const { sut, validationSpy } = makeSut()
    const params = loadCharacterByIdParams()

    await sut.handle(params)

    expect(validationSpy.input).toEqual(params)
  }),
    it('should return status 500 if LoadCharacterById throws', async () => {
      const { loadCharacterByIdSpy, sut } = makeSut()
      jest.spyOn(loadCharacterByIdSpy, 'load').mockImplementation(throwError)

      const httpResponse = await sut.handle(loadCharacterByIdParams())

      expect(httpResponse).toEqual(serverError(new Error()))
    })

  it('should return status 200 on success', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle(loadCharacterByIdParams())

    expect(httpResponse.statusCode).toBe(200)
  })
})
