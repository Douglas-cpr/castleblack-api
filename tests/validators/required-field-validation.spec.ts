import { RequiredFieldValidation } from '@/validators'
import { MissingParamError } from '@/presentation/errors'

import faker from 'faker'

const field = faker.random.word()

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation(field)
}

describe('RequiredFieldValidation', () => {
  it ('Should return a MissingParamError if validation exists', () => {
    const sut = makeSut()

    const error = sut.validate({
      invalidField: faker.random.word()
    })

    expect(error).toEqual(new MissingParamError(field));
  })

  it ('Should not return if validation succeeds', () => {
    const sut = makeSut()

    const error = sut.validate({
      [field]: faker.random.word()
    })

    expect(error).toBeFalsy()
  })
})