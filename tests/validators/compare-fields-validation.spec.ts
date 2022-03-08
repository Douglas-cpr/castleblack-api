import { CompareFieldsValidation } from '@/validators'
import { InvalidParamError } from '@/presentation/errors'

import faker from 'faker'

const field = faker.random.word()
const fieldToCompare = faker.random.word()

const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation(field, fieldToCompare)
}

describe('CompareFieldsValidation', () => {
  it('Should return error type InvalidParamError if validation fails', () => {
    const sut = makeSut()

    const error = sut.validate({
      [field]: 'field',
      [fieldToCompare]: 'other_field'
    })

    expect(error).toEqual(new InvalidParamError(fieldToCompare))
  })

  it('Should not return if validation is success', () => {
    const sut = makeSut()

    const error = sut.validate({
      [field]: 'field',
      [fieldToCompare]: 'field'
    })

    expect(error).toBeFalsy()
  })
})
