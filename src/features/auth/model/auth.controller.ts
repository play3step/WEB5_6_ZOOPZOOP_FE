import { httpClient } from '@/shared/lib'
import { DeleteAccountResponse } from './type'
import { NextFetchOptions } from '@/shared/types'

// 계정 삭제
export const deleteAccountApi = async (
  options: NextFetchOptions
): Promise<DeleteAccountResponse> => {
  return httpClient.delete<DeleteAccountResponse>('/api/v1/member', options)
}
