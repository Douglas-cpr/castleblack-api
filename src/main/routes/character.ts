import { Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import {
  makeLoadCharactersController,
  makeAddCharacterController
} from '@/main/factories'

export default (router: Router): void => {
  router.get('/character', adaptRoute(makeLoadCharactersController()))
  router.post('/character', adaptRoute(makeAddCharacterController()))
}
