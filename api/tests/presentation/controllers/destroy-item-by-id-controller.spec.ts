import {
  DestroyItemByIdParams,
  DestroyItemByIdController
} from '@/presentation/controllers'
import { throwError } from '@/tests/domain/mocks'
import { DestroyItemByIdSpy, ValidationSpy } from '@/tests/presentation/mocks'
import { serverError } from '@/presentation/utils'

import faker from 'faker'

const destroyItemByIdParams = (): DestroyItemByIdParams => ({
  itemId: faker.datatype.uuid()
})

type SutTypes = {
  sut: DestroyItemByIdController
  validationSpy: ValidationSpy
  destroyItemByIdSpy: DestroyItemByIdSpy
}

const makeSut = (): SutTypes => {
  const destroyItemByIdSpy = new DestroyItemByIdSpy()
  const validationSpy = new ValidationSpy()
  const sut = new DestroyItemByIdController(validationSpy, destroyItemByIdSpy)

  return {
    sut,
    validationSpy,
    destroyItemByIdSpy
  }
}

describe('DestroyItemById Controller', () => {
  it('destroyItemByIdController should be defined', () => {
    const { sut } = makeSut()

    expect(sut).toBeDefined()
  })

  it('it should return an item with correct id', async () => {
    const { sut } = makeSut()
    const params = destroyItemByIdParams()

    const httpResponse = await sut.handle(params)
    const destroyedItem = httpResponse.body

    expect(destroyedItem.id).toBe(params.itemId)
  })

  it('should call validation with correct params', () => {
    const { sut, validationSpy } = makeSut()
    const params = destroyItemByIdParams()

    sut.handle(params)

    expect(validationSpy.input).toEqual(params)
  })

  it('should return status 500 if DestroyItemById throws', async () => {
    const { sut, destroyItemByIdSpy } = makeSut()
    jest.spyOn(destroyItemByIdSpy, 'destroy').mockImplementation(throwError)

    const httpResponse = await sut.handle(destroyItemByIdParams())

    expect(httpResponse).toEqual(serverError(new Error()))
  })

  it('should return status 200 on success', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle(destroyItemByIdParams())

    expect(httpResponse.statusCode).toBe(200)
  })
})
