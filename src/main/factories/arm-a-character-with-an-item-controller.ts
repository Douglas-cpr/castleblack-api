import { ArmACharacterWithAnItemService } from "@/application/services"
import { FakeArmACharacterWithAnItemRepository } from "@/infra/fake"
import { Controller } from "@/presentation/contracts"
import { ArmACharacterWithAnItemController } from "@/presentation/controllers"
import { makeArmACharacterWithAnItemValidation } from "@/main/factories"
import { ArmACharacterWithAnItemParams } from "@/domain/usecases" 

export const makeArmACharacterWithAnItemController = (): Controller<ArmACharacterWithAnItemParams> => {
  const repo = new FakeArmACharacterWithAnItemRepository()
  const service = new ArmACharacterWithAnItemService(repo)
  return new ArmACharacterWithAnItemController(makeArmACharacterWithAnItemValidation(), service)
}