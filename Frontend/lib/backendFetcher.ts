import { backendAPI } from './api';

export const backendFetcher = (token: string) => async (endpoint: string) => {
    const res = await backendAPI.get(endpoint, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};