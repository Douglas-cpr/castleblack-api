export type Character = {
  name: string
  age: number
  health: number
  weapon: ItemId
  bag: ItemId[]
}

type ItemId = string
