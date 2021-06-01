/**
 * Auth Local passport configuration
 * @author: Cristian Moreno Zulauaga <khriztianmoreno@gmail.com>
 */
const bcrypt = require('bcrypt')

const { signToken } = require('../../auth/auth.service')
const User = require('../../api/user/user.model')

/**
 * Get list of job
 */
async function login(req, res, next) {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email }).exec()
    if (!user) {
      return res.status(404).json({ error: 'no user found' })
    }

    const profile = user.profile

    bcrypt.compare(password, user.password)
    const token = signToken(user._id)

    return res.status(200).json({ profile, token })
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Change a users password
 */
async function changePassword(req, res) {
  const userId = req.user._id
  const { oldPassword, newPassword } = req.body
}

module.exports = {
  login,
}
