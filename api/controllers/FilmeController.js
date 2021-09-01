const database = require('../models')

class FilmeController {
    static async pegaTodosFilmes(req, res){
        try {        
                const todosFilmes = await database.Filme.findAll()
                return res.status(200).json(todosFilmes)
            
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static  async pegaUmFilme(req, res) {
        const{ id } = req.params
        try {
            const umFilme = await database.Filme.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(umFilme)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaFilme(req, res){
        const novoFilme = req.body
        try {
            const novoFilmeCriado = await database.Filme.create(novoFilme)
            return res.status(200).json(novoFilmeCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaFilme(req, res){
        const { id } = req.params
        const novasInfo = req.body
        try {
            await database.Filme.update(novasInfo,  {where: { id:Number(id)}})
            const filmeAtualizado = await database.Filme.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(filmeAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        }

    static async apagaFilme(req, res){
        const { id } = req.params
        try {
            await database.Filme.destroy( {where: { id:Number(id)}} )
            return res.status(200).json({ mensgem:`id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }    
}


module.exports = FilmeController
