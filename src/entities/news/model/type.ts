export interface NewsResponse {
  status: string
  msg: string
  data: {
    total: number
    items: News[]
  }
}

export interface News {
  title: string
  link: string
  description: string
  pubDate: string
}
