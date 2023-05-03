import express, { urlencoded, json } from 'express'
import * as mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(urlencoded({ extended: false }))
app.use(json())

const start = async () => {
  if (!process.env.MongoDBUri) {
    throw  new Error('database uri is required')
  }

  try {
    await mongoose.connect(process.env.MongoDBUri)
  } catch (error) {
    throw error
  }

  app.listen(8080, () => console.log('listening on 8080'))
}

start()
