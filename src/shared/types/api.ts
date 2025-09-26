export interface APIResponse<T> {
  status: string
  msg: string
  data: T
}

export interface NextFetchOptions extends RequestInit {
  next?: {
    revalidate?: number | false
    tags?: string[]
  }
  cache?: 'force-cache' | 'no-store'
}
