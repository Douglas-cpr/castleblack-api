import { FieldTypeValidation } from '@/validators'
import { InvalidTypeParamError } from '@/presentation/errors'

const makeSut = (type: string): FieldTypeValidation => {
  const sut = new FieldTypeValidation('any_field', type)
  return sut
}

describe('FieldTypeValidation', () => {
  it('Should return if field type is invalid', () => {
    const sut = makeSut('any_type')

    const error = sut.validate({
      any_field: 'any_value'
    })

    expect(error).toEqual(new InvalidTypeParamError('any_field'))
  })

  it('Not should return if validation succeeds', () => {
    const sut = makeSut('string')

    const error = sut.validate({
      any_field: 'any_value'
    })

    expect(error).toBeFalsy()
  })
})
