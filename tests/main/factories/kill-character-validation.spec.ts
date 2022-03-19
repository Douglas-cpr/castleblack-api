import { Validation } from '@/presentation/contracts'
import { RequiredFieldValidation, ValidationComposite } from '@/validators'
import { makeKillCharacterValidation } from '@/main/factories'

jest.mock('@/validators/validation-composite')

describe('KillCharacterValidation Factory', () => {
  it('should call validation composite with all validations', async () => {
    makeKillCharacterValidation()

    const validations: Validation[] = []
    const fields = ['characterId']

    for (const field of fields) {
      validations.push(new RequiredFieldValidation(field))
    }

    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
