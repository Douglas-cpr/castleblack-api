import { ArmACharacterWithAnItemParams } from '@/domain/usecases'
import { ArmACharacterWithAnItemController } from '@/presentation/controllers'
import { throwError } from '@/tests/domain/mocks'
import { ValidationSpy } from '@/tests/presentation/mocks'
import { ArmACharacterWithAnItemSpy } from '@/tests/presentation/mocks'
import { serverError } from '@/presentation/utils'

import faker from 'faker'

const armACharacterWithAnItemParams = (): ArmACharacterWithAnItemParams => ({
  itemId: faker.datatype.uuid(),
  characterId: faker.datatype.uuid()
})

type SutTypes = {
  armACharacterWithAnItemSpy: ArmACharacterWithAnItemSpy
  validationSpy: ValidationSpy
  armACharacterWithAnItemController: ArmACharacterWithAnItemController
}

const makeSut = (): SutTypes => {
  const armACharacterWithAnItemSpy = new ArmACharacterWithAnItemSpy()
  const validationSpy = new ValidationSpy()
  const armACharacterWithAnItemController =
    new ArmACharacterWithAnItemController(
      validationSpy,
      armACharacterWithAnItemSpy
    )

  return {
    armACharacterWithAnItemSpy,
    validationSpy,
    armACharacterWithAnItemController
  }
}

describe('ArmACharacterWithAnItem Controller', () => {
  it('armACharacterWithAnItemController should be defined', () => {
    const { armACharacterWithAnItemController } = makeSut()

    expect(armACharacterWithAnItemController).toBeDefined()
  })

  it('it should return character with correct params', async () => {
    const { armACharacterWithAnItemController } = makeSut()
    const params = armACharacterWithAnItemParams()

    const httpResponse = await armACharacterWithAnItemController.handle(params)
    const character = httpResponse.body

    expect(character.id).toBe(params.characterId)
    expect(character.weapon).toBe(params.itemId)
  })

  it('should call validation with correct params', () => {
    const { armACharacterWithAnItemController, validationSpy } = makeSut()
    const params = armACharacterWithAnItemParams()

    armACharacterWithAnItemController.handle(params)

    expect(validationSpy.input).toEqual(params)
  })

  it('should return status 500 if ArmACharacterWithAnItem throws', async () => {
    const { armACharacterWithAnItemController, armACharacterWithAnItemSpy } =
      makeSut()
    jest.spyOn(armACharacterWithAnItemSpy, 'arm').mockImplementation(throwError)

    const httpResponse = await armACharacterWithAnItemController.handle(
      armACharacterWithAnItemParams()
    )

    expect(httpResponse).toEqual(serverError(new Error()))
  })

  it('should return status 200 on success', async () => {
    const { armACharacterWithAnItemController } = makeSut()

    const httpResponse = await armACharacterWithAnItemController.handle(
      armACharacterWithAnItemParams()
    )

    expect(httpResponse.statusCode).toBe(200)
  })
})
