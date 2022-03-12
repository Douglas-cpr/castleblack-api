import { ValidationComposite, RequiredFieldValidation } from '@/validators'
import { Validation } from '@/presentation/contracts'

export const makeArmACharacterWithAnItemValidation =
  (): ValidationComposite => {
    const validations: Validation[] = []
    const fields = ['characterId', 'itemId']

    for (const field in fields) {
      validations.push(new RequiredFieldValidation(field))
    }

    return new ValidationComposite(validations)
  }
