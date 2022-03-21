import { makeLoadItemByIdValidation } from '@/main/factories'
import { ValidationComposite, RequiredFieldValidation } from '@/validators'
import { Validation } from '@/presentation/contracts'

jest.mock('@/validators/validation-composite')

describe('LoadItemByIdValidation Factory', () => {
  it('should call validation composite with all validations', async () => {
    makeLoadItemByIdValidation()

    const validations: Validation[] = []
    const fields = ['id']

    for (const field of fields) {
      validations.push(new RequiredFieldValidation(field))
    }

    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
