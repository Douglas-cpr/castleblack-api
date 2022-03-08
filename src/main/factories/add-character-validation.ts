import { ValidationComposite, RequiredFieldValidation } from '@/validators'
import { Validation } from '@/presentation/contracts'

export const makeAddCharacterValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'age']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
