import { backendAPI } from "./api";

export const backendFetcher = async (endpoint: string) => {
    const res = await backendAPI.get(endpoint);
    return res.data;
};
