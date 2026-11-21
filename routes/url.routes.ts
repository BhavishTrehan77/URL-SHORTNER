import express from 'express'
import { redirectUrl, shortURL } from '../controllers/url.controllers.js'
import { Auth } from '../middleware/auth.middleware.js'
import { RateLimiting } from '../middleware/ratelimitng.js'
import { validate, validation } from '../middleware/validation.js'

const router=express.Router()

router.post("/url",Auth,RateLimiting,validation,validate,shortURL)

router.get("/:shortCode",redirectUrl)

export default router