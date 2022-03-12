import { Item } from '@/domain/entities'
import { AddItemController } from '@/presentation/controllers'
import { ValidationSpy } from '@/tests/presentation/mocks'
import { AddItemSpy } from '@/tests/presentation/mocks'
import { serverError } from '@/presentation/utils'
import { throwError } from '@/tests/domain/mocks/test-helpers'

import faker from 'faker'

const addItemParams = (): Item => ({
  description: faker.random.word(),
  damage: faker.datatype.number({ min: 1, max: 100 })
})

type SutTypes = {
  addItemController: AddItemController
  addItemSpy: AddItemSpy
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const addItemSpy = new AddItemSpy()
  const validationSpy = new ValidationSpy()
  const addItemController = new AddItemController(validationSpy, addItemSpy)

  return {
    addItemController,
    addItemSpy,
    validationSpy
  }
}

describe('AddItem Controller', () => {
  it('addItemController should be defined', () => {
    const { addItemController } = makeSut()

    expect(addItemController).toBeDefined()
  })

  it('should return a item with correct params', async () => {
    const { addItemController } = makeSut()
    const params = addItemParams()

    const httpResponse = await addItemController.handle(params)

    expect(httpResponse.body).toMatchObject(params)
  })

  it('should call validation with correct params', () => {
    const { addItemController, validationSpy } = makeSut()
    const params = addItemParams()

    addItemController.handle(params)

    expect(validationSpy.input).toEqual(params)
  })

  it('should return status 500 if AddItem throws', async () => {
    const { addItemController, addItemSpy } = makeSut()
    jest.spyOn(addItemSpy, 'add').mockImplementation(throwError)

    const httpResponse = await addItemController.handle(addItemParams())

    expect(httpResponse).toEqual(serverError(new Error()))
  })

  it('should return status 200 on success', async () => {
    const { addItemController } = makeSut()

    const httpResponse = await addItemController.handle(addItemParams())

    expect(httpResponse.statusCode).toBe(200)
  })
})
