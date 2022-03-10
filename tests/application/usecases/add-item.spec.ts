import { AddItemRepositorySpy } from "@/tests/application/mocks"
import { AddItemService } from "@/application/services"
import { mockAddItemParams } from "@/tests/domain/mocks/mock-item"
import { throwError } from "@/tests/domain/mocks/test-helpers"

type SutTypes = {
  sut: AddItemService
  addItemRepositorySpy: AddItemRepositorySpy
}

const makeSut = (): SutTypes => {
  const addItemRepositorySpy = new AddItemRepositorySpy()
  const sut = new AddItemService(addItemRepositorySpy)

  return {
    sut,
    addItemRepositorySpy
  }
}


describe('Add item usecase', () => {
  it ('Should return new item on success', async () => {
    const { sut } = makeSut()
    const item = mockAddItemParams()

    const newItem = await sut.add(item)

    expect(newItem).toMatchObject(item)
  })

  it ('should be return new item with id and created date', async () => {
    const { sut } = makeSut()
    const item = mockAddItemParams()

    const newItem = await sut.add(item)

    expect(newItem.id).toBeTruthy()
    expect(newItem.createdAt).toBeInstanceOf(Date)
  })

  it ('should throw error if addItem throws', async () => {
    const { sut, addItemRepositorySpy } = makeSut()

    jest.spyOn(addItemRepositorySpy, 'add').mockImplementation(throwError)
    const promise = sut.add(mockAddItemParams())

    await expect(promise).rejects.toThrow()
  })
})