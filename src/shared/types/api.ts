export interface APIResponse<T> {
  state: string
  msg: string
  data: T
}
