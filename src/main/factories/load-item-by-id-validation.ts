import { ValidationComposite, RequiredFieldValidation } from '@/validators'
import { Validation } from '@/presentation/contracts'

export const makeLoadItemByIdValidation = (): ValidationComposite => {
  const validations: Validation[] = []

  validations.push(new RequiredFieldValidation('id'))

  return new ValidationComposite(validations)
}
