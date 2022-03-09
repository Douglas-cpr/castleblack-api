import { Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import {
  makeAddItemController,
  makeLoadItemsController
} from '@/main/factories'

export default (router: Router): void => {
  router.get('/item', adaptRoute(makeLoadItemsController()))
  router.post('/item', adaptRoute(makeAddItemController()))
}
