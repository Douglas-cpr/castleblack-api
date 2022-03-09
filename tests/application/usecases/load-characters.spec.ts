import { LoadCharactersService } from '@/application/services'
import { throwError } from '@/tests/domain/mocks/test-helpers'
import { LoadCharactersSpy } from '@/tests/presentation/mocks'

type SutTypes = {
  sut: LoadCharactersService
  loadCharactersSpy: LoadCharactersSpy
}

const makeSut = (): SutTypes => {
  const loadCharactersSpy = new LoadCharactersSpy()
  const sut = new LoadCharactersService(loadCharactersSpy)

  return {
    loadCharactersSpy,
    sut
  }
}

describe('Load characters usecase', () => {
  it('should return a list of characters on success', async () => {
    const { sut, loadCharactersSpy } = makeSut()

    const characters = await sut.load()

    expect(characters).toEqual(loadCharactersSpy.result)
  })

  it('Should call loadCharactersRepository', async () => {
    const { sut, loadCharactersSpy } = makeSut()

    await sut.load()

    expect(loadCharactersSpy.result).toBeTruthy()
  })

  it('Should throw error if loadCharactersRepository throws', async () => {
    const { sut, loadCharactersSpy } = makeSut()

    jest.spyOn(loadCharactersSpy, 'load').mockImplementation(throwError)
    const promise = sut.load()

    await expect(promise).rejects.toThrow()
  })
})
