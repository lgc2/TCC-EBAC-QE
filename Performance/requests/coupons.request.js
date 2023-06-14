import { check } from "k6"
import http from "k6/http"
import Utils from "../utils/utils.js"

export default class Coupons {
    #token = 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'

    listAll() {


        let response = http.get(`${Utils.getBaseUrl()}/wp-json/wc/v3/coupons`, {
            headers: {
                Accept: 'application/json',
                Authorization: this.#token
            }
        })
        check(response, { 'listagem deve retornar 200': r => r && r.status === 200 })
    }
}








// await req(API_URL)
//             .get('/wp-json/wc/v3/coupons')
//             .set('Accept', 'application/json')
//             .set('authorization', TOKEN)
//             .then(response => {
//                 expect(response.statusCode).toEqual(200)
//                 expect(response.body).toBeInstanceOf(Array)
//             })