import http from 'k6/http';
import { group, sleep } from 'k6';
import Coupons from '../requests/coupons.request.js';

export const options = {
  stages: [
    { duration: '20s', target: 20 },
    { duration: '100s', target: 20 },
  ],
  thresholds: {
    http_req_duration: ['p(99) < 6000']
  }
}

export default function () {
  let coupons = new Coupons()
  const couponId = coupons.listAllAndReturnTheFirstCoupon()

  group('list all coupons', () => {
    coupons.listAll()
  })

  group('list specific coupon', () => {
    coupons.listSpecificCoupon(couponId)
  })
}