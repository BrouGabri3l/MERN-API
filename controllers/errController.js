//erros de validação
const handleValidationError = (err, res) => {
    res.status(400).send({ message: 'Erro de validação encontrado, tente novamente mais tarde' })
}
//controlador de erros
module.exports = (err, req, res, next) => {
    //código 121  = validação
    if (err.code == 121) {
        return err = handleValidationError(err, res)
    } else {
        //código 500 = erro desconhecido
        res.status(500).send('Aconteceu um erro Inesperado!')
    }
}
