import { KillCharacterService } from '@/application/services'
import { KillCharacterRepositorySpy } from '@/tests/application/mocks'
import { throwError } from '@/tests/domain/mocks'

import faker from 'faker'

const killCharacterParams = (): string => {
  return faker.datatype.uuid()
}

type SutTypes = {
  sut: KillCharacterService
  killCharacterRepositorySpy: KillCharacterRepositorySpy
}

const makeSut = (): SutTypes => {
  const killCharacterRepositorySpy = new KillCharacterRepositorySpy()
  const sut = new KillCharacterService(killCharacterRepositorySpy)

  return {
    sut,
    killCharacterRepositorySpy
  }
}

describe('Kill character usecase', () => {
  it('should return killed character on success', async () => {
    const { sut } = makeSut()

    const killedCharacter = await sut.kill(killCharacterParams())

    expect(killedCharacter).toHaveProperty('id')
    expect(killedCharacter).toHaveProperty('name')
    expect(killedCharacter).toHaveProperty('createdAt')
  })

  it('should return killed character on health to equal 0', async () => {
    const { sut } = makeSut()

    const killedCharacter = await sut.kill(killCharacterParams())

    expect(killedCharacter.health).toEqual(0)
  })

  it('should be return a killed character with correct id', async () => {
    const { sut } = makeSut()
    const characterId = killCharacterParams()

    const killedCharacter = await sut.kill(characterId)

    expect(killedCharacter.id).toEqual(characterId)
  })

  it('should throw error if destroyItem throws', async () => {
    const { sut, killCharacterRepositorySpy } = makeSut()
    jest
      .spyOn(killCharacterRepositorySpy, 'kill')
      .mockImplementation(throwError)

    const promise = sut.kill(killCharacterParams())

    await expect(promise).rejects.toThrow()
  })
})
