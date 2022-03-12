import { LoadCharactersController } from '@/presentation/controllers'
import { LoadCharactersSpy } from '@/tests/presentation/mocks'

type SutTypes = {
  loadCharactersController: LoadCharactersController
  loadCharactersSpy: LoadCharactersSpy
}

const makeSut = (): SutTypes => {
  const loadCharactersSpy = new LoadCharactersSpy()
  const loadCharactersController = new LoadCharactersController(
    loadCharactersSpy
  )

  return {
    loadCharactersController,
    loadCharactersSpy
  }
}

describe('LoadCharacters Controller', () => {
  it('should be defined', async () => {
    const { loadCharactersController } = makeSut()

    expect(loadCharactersController).toBeDefined()
  })

  it('should return a list of characters on success', async () => {
    const { loadCharactersController, loadCharactersSpy } = makeSut()

    const httpResponse = await loadCharactersController.handle()
    const mockedCharacters = await loadCharactersSpy.load()
    const loadedCharactersLength = httpResponse.body.length

    expect(loadedCharactersLength).toEqual(mockedCharacters.length)
  })

  it('should throw error with status code 500 if LoadCharactersRepository throw error', async () => {
    const { loadCharactersController, loadCharactersSpy } = makeSut()

    jest.spyOn(loadCharactersSpy, 'load').mockRejectedValueOnce(new Error())
    const httpResponse = await loadCharactersController.handle()

    expect(httpResponse.statusCode).toEqual(500)
  })
})
