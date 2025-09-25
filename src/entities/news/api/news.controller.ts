import { httpClient } from '@/shared/lib'
import { NewsResponse } from '../model/type'

export const fetchNews = async (): Promise<NewsResponse> => {
  return httpClient.get<NewsResponse>('/api/v1/news')
}
