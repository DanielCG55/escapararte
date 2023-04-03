import axios from "axios";

export const backendAPI = axios.create({ baseURL: "http://127.0.0.1:5001" });

export const deleteCard = (_id: string) =>
    backendAPI.delete("/delete_card", {
        params: { _id },
    });
