import { Validation } from '@/presentation/contracts'
import { RequiredFieldValidation, ValidationComposite } from '@/validators'

export const makeKillCharacterValidation = (): ValidationComposite => {
  const validations: Validation[] = []

  validations.push(new RequiredFieldValidation('characterId'))

  return new ValidationComposite(validations)
}
