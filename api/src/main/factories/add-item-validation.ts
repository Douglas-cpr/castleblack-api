import {
  ValidationComposite,
  RequiredFieldValidation,
  FieldTypeValidation
} from '@/validators'
import { Validation } from '@/presentation/contracts'

export const makeAddItemValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  const fields = {
    description: {
      type: 'string'
    },
    damage: {
      type: 'number'
    }
  }

  for (const field of Object.keys(fields)) {
    const type = fields[field].type

    validations.push(new RequiredFieldValidation(field))
    validations.push(new FieldTypeValidation(field, type))
  }

  return new ValidationComposite(validations)
}
