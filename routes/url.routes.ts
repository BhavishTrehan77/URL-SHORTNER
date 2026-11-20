import express from 'express'
import { redirectUrl, shortURL } from '../controllers/url.controllers.js'

const router=express.Router()

router.post("/url",shortURL)

router.get("/:shortCode",redirectUrl)

export default router