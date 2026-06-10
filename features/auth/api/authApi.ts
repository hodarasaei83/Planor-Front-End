import axiosInstance from '@/features/shared/utils/axios/axios'
import { AxiosError } from 'axios'
export interface LoginCredentials {
  username: string
  password: string
}

export interface RegisterData {
  name: string
  username: string
  email?: string
  password: string
  confirmPassword: string
}

export interface User {
  id: number
  name: string
  username: string
  email?: string
}

export interface AuthResponse {
  accessToken: string
  user: User
}

const IS_MOCK =
  process.env.NEXT_PUBLIC_USE_MOCK === 'true' ||
  !process.env.NEXT_PUBLIC_API_BASE_URL

const getErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    return error.response?.data?.message || error.message || 'Network error'
  }
  if (error instanceof Error) {
    return error.message
  }
  return 'An unexpected error occurred'
}

const mockLogin = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 800))

  if (credentials.username === 'test' && credentials.password === '123456') {
    return {
      accessToken: `mock-token-${Date.now()}`,
      user: {
        id: 1,
        name: 'Test User',
        username: credentials.username,
        email: 'test@example.com',
      },
    }
  }
  throw new Error('Invalid username or password (use: test / 123456)')
}

const mockRegister = async (data: RegisterData): Promise<AuthResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 800))

  if (data.password !== data.confirmPassword) {
    throw new Error('Passwords do not match')
  }

  if (data.password.length < 6) {
    throw new Error('Password must be at least 6 characters')
  }

  return {
    accessToken: `mock-token-${Date.now()}`,
    user: {
      id: Date.now(),
      name: data.name,
      username: data.username,
      email: data.email,
    },
  }
}

const mockGetMe = async (): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('No token found')

  return {
    id: 1,
    name: 'Test User',
    username: 'test',
    email: 'test@example.com',
  }
}

const realLogin = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>(
    '/auth/login',
    credentials
  )
  return response.data
}

const realRegister = async (data: RegisterData): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>(
    '/auth/register',
    data
  )
  return response.data
}

const realGetMe = async (): Promise<User> => {
  const response = await axiosInstance.get<User>('/auth/me')
  return response.data
}

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const result = IS_MOCK
      ? await mockLogin(credentials)
      : await realLogin(credentials)

    localStorage.setItem('accessToken', result.accessToken)
    return result
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    const result = IS_MOCK ? await mockRegister(data) : await realRegister(data)

    localStorage.setItem('accessToken', result.accessToken)
    return result
  },

  getMe: async (): Promise<User> => {
    return IS_MOCK ? await mockGetMe() : await realGetMe()
  },

  logout: () => {
    localStorage.removeItem('accessToken')
  },
}

export { getErrorMessage }
