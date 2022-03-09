import { makeAddCharacterValidation } from '@/main/factories'
import { Validation } from '@/presentation/contracts'
import { RequiredFieldValidation, ValidationComposite } from '@/validators'

jest.mock('@/main/factories/validation-composite')

describe('AddCharacterValidation Factory', () => {
  it('Should call validation composite with all validations', async () => {
    makeAddCharacterValidation()
    const validations: Validation[] = []

    for (const field of ['name', 'age']) {
      validations.push(new RequiredFieldValidation(field))
    }

    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
