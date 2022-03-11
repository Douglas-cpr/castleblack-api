import { makeAddItemValidation } from '@/main/factories'
import { Validation } from '@/presentation/contracts'
import { RequiredFieldValidation, ValidationComposite } from '@/validators'

jest.mock('@/main/factories/validation-composite')

describe('AddItemValidation Factory', () => {
  it('Shoud call validation composite with all validations', async () => {
    makeAddItemValidation()
    const validations: Validation[] = []

    for (const field of ['description', 'damage']) {
      validations.push(new RequiredFieldValidation(field))
    }

    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
