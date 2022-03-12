import { AddCharacterController } from '@/presentation/controllers'
import { Character } from '@/domain/entities'
import { AddCharacterSpy } from '@/tests/presentation/mocks'
import { ValidationSpy } from '@/tests/presentation/mocks'
import { serverError } from '@/presentation/utils'
import { throwError } from '@/tests/domain/mocks/test-helpers'

import faker from 'faker'

const addCharacterParams = (): Character => ({
  name: faker.name.firstName(),
  age: faker.datatype.number({ min: 1, max: 100 }),
  health: faker.datatype.number({ min: 1, max: 100 }),
  weapon: null,
  bag: []
})

type SutTypes = {
  addCharacterController: AddCharacterController
  addCharacterSpy: AddCharacterSpy
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const addCharacterSpy = new AddCharacterSpy()
  const validationSpy = new ValidationSpy()
  const addCharacterController = new AddCharacterController(
    validationSpy,
    addCharacterSpy
  )

  return {
    addCharacterController,
    addCharacterSpy,
    validationSpy
  }
}

describe('AddCharacter Controller', () => {
  it('addCharacterController should be defined', () => {
    const { addCharacterController } = makeSut()

    expect(addCharacterController).toBeDefined()
  })

  it('should return a character with correct values', async () => {
    const { addCharacterController } = makeSut()
    const params = addCharacterParams()

    const httpResponse = await addCharacterController.handle(params)

    expect(httpResponse.body).toMatchObject(params)
  })

  it('should call validation with correct params', () => {
    const { addCharacterController, validationSpy } = makeSut()
    const params = addCharacterParams()

    addCharacterController.handle(params)

    expect(validationSpy.input).toEqual(params)
  })

  it('should return status 500 if AddCharacter throws', async () => {
    const { addCharacterController, addCharacterSpy } = makeSut()
    jest.spyOn(addCharacterSpy, 'add').mockImplementationOnce(throwError)

    const httpResponse = await addCharacterController.handle(
      addCharacterParams()
    )

    expect(httpResponse).toEqual(serverError(new Error()))
  })

  it('should return status 200 on success', async () => {
    const { addCharacterController } = makeSut()
    
    const httpResponse = await addCharacterController.handle(
      addCharacterParams()
    )

    expect(httpResponse.statusCode).toBe(200)
  })
})
