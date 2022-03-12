export class NotFound extends Error {
  constructor(field: string, id: string) {
    super(`No ${field} found with this id ${id}`)
    this.name = 'NotFound'
  }
}
