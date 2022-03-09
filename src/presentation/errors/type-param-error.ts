export class InvalidTypeParamError extends Error {
  constructor(paramName: string) {
    super(`Type param: ${paramName}`)
    this.name = 'TypeParamError'
  }
}
