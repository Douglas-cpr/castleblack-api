import { Validation } from '@/presentation/contracts'
import { InvalidTypeParamError } from '@/presentation/errors'

export class FieldTypeValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly type: string,
  ) {}

  validate(input: any): Error {
    if (typeof input[this.fieldName] !== this.type) {
      return new InvalidTypeParamError(this.fieldName)
    }
  }
}
