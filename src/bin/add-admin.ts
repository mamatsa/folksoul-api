import 'dotenv/config'
import promptSync from 'prompt-sync'
import bcrypt from 'bcryptjs'
import colors from 'colors'
import { connectMongo } from 'config'
import { Admin } from 'models'

const prompt = promptSync({ sigint: true })

const nickname = prompt('Enter a nickname of new admin: '.cyan)
const password = prompt('Enter admin password: '.cyan, { echo: '*' })

;(async () => {
  try {
    const mongoose = await connectMongo()

    if (await Admin.findOne({ nickname })) {
      console.log('Nickname is already taken. Try again.'.red)
      await mongoose.connection.close()
      return
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // add admin
    await Admin.create({ nickname, password: hashedPassword })

    await mongoose.connection.close()

    console.log(`Admin with nickname ${colors.green(nickname)} added`.italic)
  } catch (e) {
    console.log(e)
  }
})()
