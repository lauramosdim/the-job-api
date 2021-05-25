/**
 * Auth Local configuration
 * @author: Cristian Moreno Zulauaga <khriztianmoreno@gmail.com>
 */

const Router = require('express').Router
const controller = require('./local.controller')

const router = new Router()

// router.get('/recovery-password', controller.recovery);
// router.get('/forgot-password', controller.forgot);
router.get('/login', controller.login)

module.exports = router
