import { ChangeItemDamageByIdController } from '@/presentation/controllers'
import { throwError } from '@/tests/domain/mocks'
import {
  ChangeItemDamageByIdSpy,
  ValidationSpy
} from '@/tests/presentation/mocks'
import { ChangeItemDamageByIdParams } from '@/domain/usecases'
import { serverError } from '@/presentation/utils'

import faker from 'faker'

const destroyItemByIdParams = (): ChangeItemDamageByIdParams => ({
  itemId: faker.datatype.uuid(),
  damage: faker.datatype.number({ min: 1, max: 100 })
})

type SutTypes = {
  sut: ChangeItemDamageByIdController
  validationSpy: ValidationSpy
  changeItemDamageByIdSpy: ChangeItemDamageByIdSpy
}

const makeSut = (): SutTypes => {
  const changeItemDamageByIdSpy = new ChangeItemDamageByIdSpy()
  const validationSpy = new ValidationSpy()
  const sut = new ChangeItemDamageByIdController(
    validationSpy,
    changeItemDamageByIdSpy
  )

  return {
    sut,
    validationSpy,
    changeItemDamageByIdSpy
  }
}

describe('ChangeItemDamageById Controller', () => {
  it('changeItemDamageByIdController should be defined', () => {
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

  it('it should return an item with correct damage', async () => {
    const { sut } = makeSut()
    const params = destroyItemByIdParams()

    const httpResponse = await sut.handle(params)
    const destroyedItem = httpResponse.body

    expect(destroyedItem.damage).toBe(params.damage)
  })

  it('should call validation with correct params', () => {
    const { sut, validationSpy } = makeSut()
    const params = destroyItemByIdParams()

    sut.handle(params)

    expect(validationSpy.input).toEqual(params)
  })

  it('should return status 500 if ChangeItemDamageById throws', async () => {
    const { sut, changeItemDamageByIdSpy } = makeSut()
    jest.spyOn(changeItemDamageByIdSpy, 'change').mockImplementation(throwError)

    const httpResponse = await sut.handle(destroyItemByIdParams())

    expect(httpResponse).toEqual(serverError(new Error()))
  })

  it('should return status 200 on success', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle(destroyItemByIdParams())

    expect(httpResponse.statusCode).toBe(200)
  })
})
