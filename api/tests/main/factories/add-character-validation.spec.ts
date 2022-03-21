import { makeAddCharacterValidation } from '@/main/factories'
import { Validation } from '@/presentation/contracts'
import {
  FieldTypeValidation,
  RequiredFieldValidation,
  ValidationComposite
} from '@/validators'

jest.mock('@/validators/validation-composite')

describe('AddCharacterValidation Factory', () => {
  it('Should call validation composite with all validations', async () => {
    makeAddCharacterValidation()
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

    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
