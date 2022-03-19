import { Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import {
  makeAddItemController,
  makeLoadItemsController,
  makeLoadItemByIdController,
  makeDestroyItemByIdController,
  makeChangeItemDamageByIdController
} from '@/main/factories'

export default (router: Router): void => {
  router.get('/item', adaptRoute(makeLoadItemsController()))
  router.post('/item', adaptRoute(makeAddItemController()))
  router.get('/item/:id', adaptRoute(makeLoadItemByIdController()))
  router.delete(
    '/item/destroy/:itemId',
    adaptRoute(makeDestroyItemByIdController())
  ),
    router.put(
      '/item/change-damage',
      adaptRoute(makeChangeItemDamageByIdController())
    )
}
