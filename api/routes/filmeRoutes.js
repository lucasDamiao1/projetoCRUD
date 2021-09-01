const { Router } = require('express')
const FilmesController =require('../controllers/FilmeController')

const router = Router()

router.get('/filme', FilmesController.pegaTodosFilmes)
router.get('/filme/:id', FilmesController.pegaUmFilme)
router.post('/filme', FilmesController.criaFilme)
router.put('/filme/:id', FilmesController.atualizaFilme)
router.delete('/filme/:id', FilmesController.apagaFilme)

module.exports = router