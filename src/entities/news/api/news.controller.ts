import { httpClient } from '@/shared/lib'
import { NewsResponse } from '../model/type'

export const fetchNews = async (): Promise<NewsResponse> => {
  return httpClient.get<NewsResponse>('/api/v1/news', {
    next: { revalidate: 30 }
  })
}

export const fetchNewsByKeywords = async (
  keywords: string
): Promise<NewsResponse> => {
  return httpClient.post<NewsResponse>(`/api/v1/news/keywords`, {
    keywords: [keywords]
  })
}
