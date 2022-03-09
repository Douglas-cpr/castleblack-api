export class InvalidHealthParamError extends Error {
  constructor() {
    super('Health out of range must be 1-100')
    this.name = 'InvalidHealthParamError'
  }
}
