export interface APIResponse<T> {
  status: string
  msg: string
  data: T
}
