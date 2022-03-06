import { AddCharacterRepository } from "@/application/contracts/character";
import { Character } from "@/domain/entities";
import faker from "faker";
import { CharacterModel } from "../models";

export class AddCharacterRepositorySpy implements AddCharacterRepository {
  public addCharacterCalledWith: Character;

  public async add(character: Character): Promise<CharacterModel> {
    this.addCharacterCalledWith = character;
    
    const addCharacterReturnValue = {
      id: faker.random.uuid(),
      ...this.addCharacterCalledWith
    }

    return addCharacterReturnValue
  }
}