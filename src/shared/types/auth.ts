import { APIResponse } from '@/shared/types'

type NullResponse = APIResponse<null>

// 계정 삭제
export type DeleteAccountResponse = NullResponse

// 로그아웃
export type LogoutResponse = NullResponse
