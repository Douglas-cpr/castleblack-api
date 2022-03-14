import { makeArmACharacterWithAnItemValidation } from '@/main/factories'
import { Validation } from '@/presentation/contracts'
import { RequiredFieldValidation, ValidationComposite } from '@/validators'

jest.mock('@/validators/validation-composite')

describe('AddCharacterValidation Factory', () => {
  it('Should call validation composite with all validations', async () => {
    makeArmACharacterWithAnItemValidation()

    const validations: Validation[] = []
    const fields = ['characterId', 'itemId']

    for (const field of fields) {
      validations.push(new RequiredFieldValidation(field))
    }

    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
