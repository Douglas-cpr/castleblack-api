import {
  LoadItemByIdController,
  LoadItemByIdControllerParams
} from '@/presentation/controllers'
import { throwError } from '@/tests/domain/mocks'
import { ValidationSpy, LoadItemByIdSpy } from '@/tests/presentation/mocks'

import faker from 'faker'
import { serverError } from '@/presentation/utils'

const loadItemByIdParams = (): LoadItemByIdControllerParams => ({
  id: faker.datatype.uuid()
})

type SuyTypes = {
  sut: LoadItemByIdController
  validationSpy: ValidationSpy
  loadItemByIdSpy: LoadItemByIdSpy
}

const makeSut = (): SuyTypes => {
  const loadItemByIdSpy = new LoadItemByIdSpy()
  const validationSpy = new ValidationSpy()
  const sut = new LoadItemByIdController(validationSpy, loadItemByIdSpy)

  return {
    sut,
    validationSpy,
    loadItemByIdSpy
  }
}

describe('LoadItemById Controller', () => {
  it('controller should be defined', () => {
    const { sut } = makeSut()

    expect(sut).toBeDefined()
  }),
    it('it should return item with correct id', async () => {
      const { sut } = makeSut()
      const params = loadItemByIdParams()

      const httpResponse = await sut.handle(params)
      const item = httpResponse.body

      expect(item.id).toEqual(params.id)
    })

  it('should call validation with correct params', async () => {
    const { sut, validationSpy } = makeSut()
    const params = loadItemByIdParams()

    await sut.handle(params)

    expect(validationSpy.input).toEqual(params)
  }),
    it('should return status 500 if LoadItemById throws', async () => {
      const { loadItemByIdSpy, sut } = makeSut()
      jest.spyOn(loadItemByIdSpy, 'load').mockImplementation(throwError)

      const httpResponse = await sut.handle(loadItemByIdParams())

      expect(httpResponse).toEqual(serverError(new Error()))
    })

  it('should return status 200 on success', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle(loadItemByIdParams())

    expect(httpResponse.statusCode).toBe(200)
  })
})
