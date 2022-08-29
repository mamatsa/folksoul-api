import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectMongo } from 'config'
import { loginRoute, bandMemberRoutes, socialLinkRoutes } from 'routes'
import { errorMiddleware, swaggerMiddleware } from 'middlewares'

connectMongo()

const server = express()

server.use(cors())

server.use('/public/images', express.static('public/images'))

server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use(loginRoute)
server.use(bandMemberRoutes)
server.use(socialLinkRoutes)

server.use(errorMiddleware)

server.use('/api-docs', swaggerMiddleware())

server.listen(process.env.PORT)
