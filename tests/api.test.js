const req = require('supertest')
const router = require('../app')

describe('teste inicial', () => {
    it('deve retornar true', () => {
        expect(true).toBe(true)
    })
})
describe('Teste de Usuários', () => {
    describe('Teste rota de listagem', () => {
        it('Deve retornar a rota da lista de usuários', async () => {
            const res = await req(router).get('/api/test')
            console.log(res.body)
            expect(res.body).toHaveProperty('message')
        })
    })
})