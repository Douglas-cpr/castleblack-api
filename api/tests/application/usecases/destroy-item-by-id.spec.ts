import { DestroyItemByService } from '@/application/services'
import { DestroyItemByIdRepositorySpy } from '@/tests/application/mocks'
import { throwError } from '@/tests/domain/mocks'

import faker from 'faker'

const destroyItemByIdParams = (): string => {
  return faker.datatype.uuid()
}

type SutTypes = {
  sut: DestroyItemByService
  destroyItemByIdRepositorySpy: DestroyItemByIdRepositorySpy
}

const makeSut = (): SutTypes => {
  const destroyItemByIdRepositorySpy = new DestroyItemByIdRepositorySpy()
  const sut = new DestroyItemByService(destroyItemByIdRepositorySpy)

  return {
    sut,
    destroyItemByIdRepositorySpy
  }
}

describe('Destroy item by id usecase', () => {
  it('should return destroyed item on success', async () => {
    const { sut } = makeSut()

    const destroyedItem = await sut.destroy(destroyItemByIdParams())

    expect(destroyedItem).toHaveProperty('id')
    expect(destroyedItem).toHaveProperty('damage')
    expect(destroyedItem).toHaveProperty('description')
  })

  it('should be return a destroyed item with correct id', async () => {
    const { sut } = makeSut()
    const itemId = destroyItemByIdParams()

    const destroyedItem = await sut.destroy(itemId)

    expect(destroyedItem.id).toEqual(itemId)
  })

  it('should throw error if destroyItem throws', async () => {
    const { sut, destroyItemByIdRepositorySpy } = makeSut()
    jest
      .spyOn(destroyItemByIdRepositorySpy, 'destroy')
      .mockImplementation(throwError)

    const promise = sut.destroy(destroyItemByIdParams())

    await expect(promise).rejects.toThrow()
  })
})
