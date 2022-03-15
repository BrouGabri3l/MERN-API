const handleValidationError = (err, res) => {
    res.status(400).send({ message: 'Erro de validação encontrado, tente novamente mais tarde' })
}
module.exports = (err, req, res, next) => {
    console.log(err)
    console.log('congrats you hit the error middleware')
    if (err.code == 121) {
        return err = handleValidationError(err, res)
    } else {
        console.log(err)
        res.status(500).send('an unknow error has occured')
    }
}
