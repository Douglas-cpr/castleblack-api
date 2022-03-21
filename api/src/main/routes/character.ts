import { Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import {
  makeLoadCharactersController,
  makeAddCharacterController,
  makeArmACharacterWithAnItemController,
  makeLoadCharacterByIdController,
  makeKillCharacterController
} from '@/main/factories'

export default (router: Router): void => {
  router.get('/character', adaptRoute(makeLoadCharactersController()))
  router.post('/character', adaptRoute(makeAddCharacterController()))
  router.put(
    '/character/arm-character',
    adaptRoute(makeArmACharacterWithAnItemController())
  )
  router.get('/character/:id', adaptRoute(makeLoadCharacterByIdController()))
  router.put(
    '/character/kill/:characterId',
    adaptRoute(makeKillCharacterController())
  )
}
