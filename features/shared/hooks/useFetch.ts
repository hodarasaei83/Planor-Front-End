import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import axiosInstance from '../utils/axios/axios';
import { AxiosError } from 'axios';

export function useFetch<TData = unknown, TError = AxiosError>(
  key: string[],
  url: string,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>
) {
  return useQuery<TData, TError>({
    queryKey: key,
    queryFn: async ({ signal }) => {
      const response = await axiosInstance.get<TData>(url, { signal });
      return response.data;
    },
    ...options,
  });
}