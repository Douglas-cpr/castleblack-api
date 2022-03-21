import { Validation } from '@/presentation/contracts'
import { RequiredFieldValidation, ValidationComposite } from '@/validators'
import { makeDestroyItemByIdValidation } from '@/main/factories'

jest.mock('@/validators/validation-composite')

describe('DestroyItemByIdValidation Factory', () => {
  it('should call validation composite with all validations', async () => {
    makeDestroyItemByIdValidation()

    const validations: Validation[] = []
    const fields = ['itemId']

    for (const field of fields) {
      validations.push(new RequiredFieldValidation(field))
    }

    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
