import express from 'express'
import { redirectUrl, shortURL } from '../controllers/url.controllers.js'
import { Auth } from '../middleware/auth.middleware.js'

const router=express.Router()

router.post("/url",Auth,shortURL)

router.get("/:shortCode",redirectUrl)

export default router