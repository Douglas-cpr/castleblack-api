export class NotFoundError extends Error {
  constructor() {
    super('Object not found')
    this.name = 'NotFound'
  }
}
