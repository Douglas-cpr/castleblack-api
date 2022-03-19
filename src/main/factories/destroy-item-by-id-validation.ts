import { Validation } from '@/presentation/contracts'
import { RequiredFieldValidation, ValidationComposite } from '@/validators'

export const makeDestroyItemByIdValidation = (): ValidationComposite => {
  const validations: Validation[] = []

  validations.push(new RequiredFieldValidation('itemId'))

  return new ValidationComposite(validations)
}
