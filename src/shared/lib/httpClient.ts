const baseUrl = process.env.NEXT_API_URL || ''

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
  const data = await response.json()
  return data
}

export const httpClient = {
  async request<T>(
    method: string,
    endpoint: string,
    data?: unknown,
    options?: RequestInit
  ): Promise<T> {
    const url = `${baseUrl}${endpoint}`
    const fetchOptions = createFetchOptions(method, data, options)
    const response = await fetch(url, fetchOptions)
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
