const API_BASE_URL = process.env.API_URL || ''

const createFetchOptions = (
  method: string,
  data?: unknown,
  options?: RequestInit
): RequestInit => ({
  method,
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    ...options?.headers
  },
  body: data ? JSON.stringify(data) : undefined,
  ...options
})

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    switch (response.status) {
      case 401:
        throw new Error('인증이 필요합니다')
      case 403:
        throw new Error('권한이 없습니다')
      case 404:
        throw new Error('요청한 리소스를 찾을 수 없습니다')
      case 500:
        throw new Error('서버 내부 오류가 발생했습니다')
    }
  }
  return response.json()
}

export const httpClient = {
  async request<T>(
    method: string,
    endpoint: string,
    data?: unknown,
    options?: RequestInit
  ): Promise<T> {
    const { ...fetchOptions } = options || {}
    const url = `${API_BASE_URL}${endpoint}`

    const requestOptions = createFetchOptions(method, data, fetchOptions)
    const response = await fetch(url, requestOptions)

    return handleResponse<T>(response)
  },

  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>('GET', endpoint, undefined, options)
  },

  async post<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit
  ): Promise<T> {
    return this.request<T>('POST', endpoint, data, options)
  },

  async put<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit
  ): Promise<T> {
    return this.request<T>('PUT', endpoint, data, options)
  },

  async patch<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit
  ): Promise<T> {
    return this.request<T>('PATCH', endpoint, data, options)
  },

  async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>('DELETE', endpoint, undefined, options)
  }
}
