import { AddCharacterService } from '@/application/services'
import { mockAddCharacterParams } from '@/tests/domain/mocks'
import { AddCharacterRepositorySpy } from '@/tests/application/mocks';

type SutTypes = {
  sut: AddCharacterService;
  addCharacterRepositorySpy: AddCharacterRepositorySpy;
}

const makeSut = (): SutTypes => {
  const addCharacterRepositorySpy = new AddCharacterRepositorySpy()
  const sut = new AddCharacterService(addCharacterRepositorySpy)

  return {
    addCharacterRepositorySpy,
    sut
  }
}

describe('Add character usecase', () => {
  test('Should return new character on success', async () => {
    const { sut } = makeSut()
    const character = mockAddCharacterParams()

    const newCharacter = await sut.add(character)

    expect(newCharacter).toMatchObject(character)
  })
})


