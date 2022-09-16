import axios from "../utils/requests";
import { createApi } from '@reduxjs/toolkit/query'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import type { AxiosRequestConfig, AxiosError } from 'axios'

interface BaseQuery {
    url: string
    method: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
}

const axiosBaseQuery = (): BaseQueryFn<BaseQuery, unknown, unknown> =>
    async ({ url, method, data, params }) => {
        try {
            const result = await axios({ url, method, data, params })
            return { data: result.data }
        } catch (axiosError) {
            let err = axiosError as AxiosError
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            }
        }
    }

const api = createApi({
    baseQuery: axiosBaseQuery(),
    endpoints(build) {
        return {
            query: build.query({ query: () => ({ url: '/query', method: 'get' }) }),
            mutation: build.mutation({
                query: () => ({ url: '/mutation', method: 'post' }),
            }),
        }
    },
});

export default api;