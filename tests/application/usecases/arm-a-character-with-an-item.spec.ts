import { ArmACharacterWithAnItemRepositorySpy } from '@/tests/application/mocks'
import { ArmACharacterWithAnItemService } from '@/application/services'
import { throwError } from '@/tests/domain/mocks/test-helpers'
import { mockArmACharacterWithAnItemParams } from '@/tests/domain/mocks'

type SutTypes = {
  sut: ArmACharacterWithAnItemService
  armCharacterWithAnItemRepositorySpy: ArmACharacterWithAnItemRepositorySpy
}

const makeSut = (): SutTypes => {
  const armCharacterWithAnItemRepositorySpy =
    new ArmACharacterWithAnItemRepositorySpy()
  const sut = new ArmACharacterWithAnItemService(
    armCharacterWithAnItemRepositorySpy
  )

  return {
    sut,
    armCharacterWithAnItemRepositorySpy
  }
}

describe('Add item usecase', () => {
  it('should return new character on success', async () => {
    const { sut } = makeSut()
    const params = mockArmACharacterWithAnItemParams()

    const character = await sut.arm(params)

    expect(character).toHaveProperty('id')
    expect(character).toHaveProperty('name')
    expect(character).toHaveProperty('health')
    expect(character).toHaveProperty('createdAt')
  })

  it('should be return character armed with correct item', async () => {
    const { sut } = makeSut()
    const params = mockArmACharacterWithAnItemParams()

    const character = await sut.arm(params)

    expect(character.weapon).toBe(params.itemId)
    expect(character.id).toBe(params.characterId)
  })

  it('should throw error if armCharacter throws', async () => {
    const { sut, armCharacterWithAnItemRepositorySpy } = makeSut()
    jest
      .spyOn(armCharacterWithAnItemRepositorySpy, 'arm')
      .mockImplementation(throwError)

    const promise = sut.arm(mockArmACharacterWithAnItemParams())

    await expect(promise).rejects.toThrow()
  })
})
