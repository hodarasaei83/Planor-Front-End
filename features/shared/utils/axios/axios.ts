import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api',
  timeout: 15000, // افزایش به 15 ثانیه
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - فقط توکن اضافه کن
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('accessToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - فقط خطاهای مهم را بگیر
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // فقط 401 را مدیریت کن (بقیه خطاها به فرم می‌روند)
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken');
      // فقط در سمت کلاینت و اگر در صفحه محافظت‌شده هستیم
      if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;