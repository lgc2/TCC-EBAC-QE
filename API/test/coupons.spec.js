const req = require('supertest');
const API_URL = process.env.API_URL
const TOKEN = process.env.TOKEN

describe('Coupons Service', () => {
    it('(E2E) listar cupons cadastrados', async () => {
        await req(API_URL)
            .get('//wp-json/wc/v3/coupons')
            .set('Accept', 'application/json')
            .set('authorization', TOKEN)
            .then(response => {
                expect(response.statusCode).toEqual(200)
                expect(response.body).toBeInstanceOf(Array)
            })
    })

    it('(E2E) validar tentativa de listar cupons, passando senha incorreta no header', async () => {
        const tokenIncorreto = 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIu'

        await req(API_URL)
            .get('//wp-json/wc/v3/coupons')
            .set('Accept', 'application/json')
            .set('authorization', tokenIncorreto)
            .then(response => {
                expect(response.statusCode).toEqual(500)
                expect(response.body.code).toBe('incorrect_password')
            })
    })
})
