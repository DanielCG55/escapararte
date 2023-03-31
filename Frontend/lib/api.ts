import axios from "axios";

export const backendAPI = axios.create({ baseURL: "http://127.0.0.1:5000" });

export const deleteCard = (_id: string) =>
    backendAPI.delete("/delete_card", {
        params: { _id },
    });
