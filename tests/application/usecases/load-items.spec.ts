import { LoadItemsSpy } from "@/tests/presentation/mocks"
import { LoadItemsService } from "@/application/services"
import { throwError } from "@/tests/domain/mocks/test-helpers"


type SutTypes = {
  sut: LoadItemsService
  loadItemsSpy: LoadItemsSpy
}

const makeSut = (): SutTypes => {
  const loadItemsSpy = new LoadItemsSpy()
  const sut = new LoadItemsService(loadItemsSpy)

  return {
    loadItemsSpy,
    sut
  }
}

describe('Load items usecase', () => {
  it('should return a list of items on success', async () => {
    const { sut, loadItemsSpy } = makeSut()

    const items = await sut.load()

    expect(items).toEqual(loadItemsSpy.result)
  })

  it('should call loadItemsRepository', async () => {
    const { sut, loadItemsSpy } = makeSut()

    await sut.load()

    expect(loadItemsSpy.result).toBeTruthy()
  })

  it('should throw error if loadItemsRepository throws', async () => {
    const { sut, loadItemsSpy } = makeSut()

    jest.spyOn(loadItemsSpy, 'load').mockImplementation(throwError)
    const promise = sut.load()

    await expect(promise).rejects.toThrow()
  })
})