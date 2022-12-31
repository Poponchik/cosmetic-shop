import 'dotenv/config'
import User from '../models/User.js'
import tokenService from '../service/token-service.js'
import bcrypt from 'bcrypt'



class AuthController {

    async registration(req, res) {
        try {
            const { email, password, name, role } = req.body
            const candidate = await User.findOne({ email })
            if (candidate) {
                return res.status(400).json({ message: `Пользователь с email: ${email} уже существует` })
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = new User({ email, name, role, password: hashPassword })
            await user.save()
            return res.json({ message: 'Пользователь был успешно зарегистрирован' })
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Registration error' })
        }
    }

    async login(req, res) {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: `Пользоватеть с email ${email} не найден` })
        }
        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(400).json({ message: 'Введен не верный пароль' })
        }
        const token = tokenService.generateAccessToken(user._id, user.email, user.role)
        return res.json(token)
    }


}


export default new AuthController()

