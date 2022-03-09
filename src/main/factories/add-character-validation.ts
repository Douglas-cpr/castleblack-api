import { ValidationComposite, RequiredFieldValidation, FieldTypeValidation } from '@/validators'
import { Validation } from '@/presentation/contracts'

export const makeAddCharacterValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  const fields = {
    name: {
      type: 'string'
    },
    age: {
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
