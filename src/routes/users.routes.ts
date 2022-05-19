import { Router } from 'express'
import User from '../model/users.model'
import usersService from '../service/users.service'

const router = Router()

router.post('/register',  (req,res) => {

    let user: User = {
        id: 0,
        name: req.body.name,
        surname: req.body.surname,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password
      }
            
      usersService.create(user)

      let { password, ...newUser } = user
      
      res.json({
        message: 'Register successful!',
        user: newUser
      })
})


// /login ENDPOINT
router.post('/login', async (req, res) => {
  let { email, password } = req.body

  let user = usersService.findByEmail(email)

  if (user == undefined) {
    return res.status(404).json({
      message: 'user with username: ' + email + ' not found.'
    })
  }

  if ((await user).password === password) {
    return res.json({
      message: 'Login successfuly'
    })
  }

  else {
    res.status(401).json({
      message: 'Do`g`ri Yoz, uxlatjak boma bizani, biza moshni!'
    })
  }
})

export default router
