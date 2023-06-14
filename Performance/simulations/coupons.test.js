import http from 'k6/http';
import { group, sleep } from 'k6';
import Coupons from '../requests/coupons.request.js';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '5s', target: 20 },
    { duration: '10s', target: 10 },
    { duration: '5s', target: 0 }
  ],
  thresholds: {
    http_req_duration: ['p(99) < 6000']
  }
}

export default function () {
  let coupons = new Coupons()

  group('list all coupons', () => {
    coupons.listAll()
  })
}