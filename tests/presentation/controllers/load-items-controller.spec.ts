import { LoadItemsController } from '@/presentation/controllers'
import { LoadItemsSpy } from '@/tests/presentation/mocks'

type SutTypes = {
  loadItemsController: LoadItemsController
  loadItemsSpy: LoadItemsSpy
}

const makeSut = (): SutTypes => {
  const loadItemsSpy = new LoadItemsSpy()
  const loadItemsController = new LoadItemsController(loadItemsSpy)

  return {
    loadItemsController,
    loadItemsSpy
  }
}

describe('LoadItems Controller', () => {
  it('should be defined', async () => {
    const { loadItemsController } = makeSut()

    expect(loadItemsController).toBeDefined()
  })

  it('should return a list of items on success', async () => {
    const { loadItemsController, loadItemsSpy } = makeSut()

    const httpResponse = await loadItemsController.handle()

    expect(httpResponse.body).toEqual(loadItemsSpy.result)
  })

  it('should throw error with status code 500 if LoadItemsRepository throws', async () => {
    const { loadItemsController, loadItemsSpy } = makeSut()

    jest.spyOn(loadItemsSpy, 'load').mockRejectedValue(new Error())
    const httpResponse = await loadItemsController.handle()

    expect(httpResponse.statusCode).toEqual(500)
  })
})
