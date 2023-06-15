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

    listAllAndReturnTheFirstCoupon() {
        let response = http.get(`${Utils.getBaseUrl()}/wp-json/wc/v3/coupons`, {
            headers: {
                Accept: 'application/json',
                Authorization: this.#token
            }
        })
        const responseBody = response.json()
        const firstId = responseBody[0].id
        return firstId
    }

    listSpecificCoupon(couponId) {
        let response = http.get(`${Utils.getBaseUrl()}/wp-json/wc/v3/coupons/${couponId}`, {
            headers: {
                Accept: 'application/json',
                Authorization: this.#token
            }
        })
        check(response, { 'busca por cupom específico deve retornar 200': r => r && r.status === 200 })
    }
}