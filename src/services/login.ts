import type { LoginResult } from '@/types/member'
import { http } from '@/utils/http'

type LoginWxMinParams = {
  code: string
}
/**
 * 小程序登录
 * @param data 请求参数
 */
export const postLoginWxMinAPI = (data: LoginWxMinParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/user/user/login',
    data,
  })
}
