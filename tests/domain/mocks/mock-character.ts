import { CharacterModel } from '@/application/models';
import { Character } from '@/domain/entities';

import faker from 'faker';

export const mockCharacterModel = (): CharacterModel => ({
  id: faker.random.uuid(),
  name: faker.name.firstName(),
  age: faker.datatype.number({ min: 1, max: 100 }),
  health: faker.datatype.number({ min: 1, max: 100 }),
  weapon: null,
  bag: [],
  createdAt: new Date()
})

export const mockCharactersModel = (): CharacterModel[] => [
  mockCharacterModel(),
  mockCharacterModel()
]

export const mockAddCharacterParams = (): Character => ({
  name: faker.name.firstName(),
  age: faker.datatype.number({ min: 1, max: 100 }),
  health: faker.datatype.number({ min: 1, max: 100 }),
  weapon: null,
  bag: [],
})