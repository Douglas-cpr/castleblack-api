import { Router } from "express";
import { adaptRoute } from "main/adapters/express-router";
import { makeLoadCharactersController } from "@/main/factories/load-characters-controller";
import { makeAddCharacterController } from "../factories/add-character-controller";

export default (router: Router): void => {
  router.get('/character', adaptRoute(makeLoadCharactersController()))
  router.post('/character', adaptRoute(makeAddCharacterController()))
}