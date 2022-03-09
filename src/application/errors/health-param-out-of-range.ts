export class HealthParamOutOfRange extends Error {
  constructor() {
    super('Health out of range must be 1-100')
    this.name = 'HealthParamOutOfRange'
  }
}
