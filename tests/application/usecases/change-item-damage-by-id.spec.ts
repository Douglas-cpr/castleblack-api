import { ChangeItemDamageByIdService } from '@/application/services'
import { ChangeItemDamageByIdParams } from '@/domain/usecases'
import { ChangeItemDamageByIdRepositorySpy } from '@/tests/application/mocks'
import { throwError } from '@/tests/domain/mocks'

import faker from 'faker'

const changeItemDamageByIdParams = (): ChangeItemDamageByIdParams => ({
  itemId: faker.datatype.uuid(),
  damage: faker.datatype.number({ min: 1, max: 999 })
})

type SutTypes = {
  sut: ChangeItemDamageByIdService
  changeItemDamageByIdRepositorySpy: ChangeItemDamageByIdRepositorySpy
}

const makeSut = (): SutTypes => {
  const changeItemDamageByIdRepositorySpy =
    new ChangeItemDamageByIdRepositorySpy()
  const sut = new ChangeItemDamageByIdService(changeItemDamageByIdRepositorySpy)

  return {
    sut,
    changeItemDamageByIdRepositorySpy
  }
}

describe('Change item damage by id usecase', () => {
  it('should return changed item on success', async () => {
    const { sut } = makeSut()

    const changedItem = await sut.change(changeItemDamageByIdParams())

    expect(changedItem).toHaveProperty('id')
    expect(changedItem).toHaveProperty('damage')
    expect(changedItem).toHaveProperty('description')
  })

  it('should be return a changed item with correct id', async () => {
    const { sut } = makeSut()
    const params = changeItemDamageByIdParams()

    const changedItem = await sut.change(params)

    expect(changedItem.id).toEqual(params.itemId)
  })

  it('should be return a changed item with correct damage', async () => {
    const { sut } = makeSut()
    const params = changeItemDamageByIdParams()

    const changedItem = await sut.change(params)

    expect(changedItem.damage).toEqual(params.damage)
  })

  it('should throw error if changeItemDamageById throws', async () => {
    const { sut, changeItemDamageByIdRepositorySpy } = makeSut()
    jest
      .spyOn(changeItemDamageByIdRepositorySpy, 'change')
      .mockImplementation(throwError)

    const promise = sut.change(changeItemDamageByIdParams())

    await expect(promise).rejects.toThrow()
  })
})
