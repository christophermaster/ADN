import { Router } from 'express'

import ControllerAdn from '../controllers/controller_adn'

const router = new Router()

router.post('/mutation', ControllerAdn.detectarMutacion)

router.get('/stats', ControllerAdn.estadisticas)

export default router