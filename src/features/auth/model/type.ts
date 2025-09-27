import { APIResponse } from '@/shared/types'

export type DeleteAccountResponse = APIResponse<null>

export enum SocialProvider {
  KAKAO = 'kakao',
  GOOGLE = 'google'
}
