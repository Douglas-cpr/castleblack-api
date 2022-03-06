import { CharacterModel } from "@/application/models";

export const characters: CharacterModel[] = [
  { id: '1', name: "Jon Snow", age: 23, health: 100, weapon: null, bag: [], createdAt: new Date()},
  { id: '2', name: "Littlefinger", age: 35, health: 100, weapon: null, bag: [], createdAt: new Date()},
  { id: '3', name: "Daenerys Targaryen", age: 20, health: 100, weapon: null, bag: [], createdAt: new Date()},
  { id: '4', name: "Samwell Tarly", age: 18, health: 100, weapon: null, bag: [], createdAt: new Date() }
];