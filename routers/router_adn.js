import { Router } from 'express'

import ControllerAdn from '../controllers/controller_adn'

const router = new Router()

// Crear un nuevo ejercicio
router.post('/mutation', ControllerAdn.detectarMutacion)

// obtener nota por id
router.get('/stats', ControllerAdn.estadisticas)

export default router