import { Router } from 'express'

import ControllerNotas from '../controllers/controller_notas'

const router = new Router()

// Crear un nuevo ejercicio
router.post('/mutation', ControllerNotas.detectarMutacion)

// obtener nota por id
router.get('/stats', ControllerNotas.estadisticas)

export default router