import { http } from '@/utils/http'
/**
 * 获取用户轮胎币余额
 */
export const getMemberTireCoinAPI = async () => {
  return http<number>({
    method: 'GET',
    url: '',
  })
}

/**
 * 轮胎币充值
 * @returns
 */
export const putMemberTireCoinAPI = async () => {
  return http<number>({
    method: 'PUT',
    url: '/user/user/deposit',
  })
}
