import { httpClient } from '@/shared/lib'
import { DeleteAccountResponse } from './type'

export const deleteAccount = async (): Promise<void> => {
  const response = await httpClient.delete<DeleteAccountResponse>('/api/auth')
  const { status } = response

  if (status !== '200') {
    throw new Error('계정 삭제 실패')
  }
}
