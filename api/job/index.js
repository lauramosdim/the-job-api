/**
 * Job
 * @author: Cristian Moreno Zuluaga <khriztianmoreno@gmail.com>
 */

const Router = require('express').Router

const controller = require('./job.controller')
const { validateParamId } = require('../../middlewares')
const { hasRole } = require('../../auth/auth.service')

const router = new Router()

router.get('/', controller.index)
router.delete('/:id', validateParamId, hasRole('manager'), controller.destroy)
router.get('/:id', validateParamId, controller.show)
router.post('/', controller.create)
router.put('/:id', validateParamId, controller.update)

module.exports = router
