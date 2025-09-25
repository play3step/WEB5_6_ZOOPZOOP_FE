import { NewsResponse } from '../model/type'

const baseUrl = process.env.NEXT_API_URL

export const fetchNews = async (): Promise<NewsResponse> => {
  const response = await fetch(`${baseUrl}/api/news`)
  return response.json()
}
