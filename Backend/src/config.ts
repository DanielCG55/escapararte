import dotenv from "dotenv";

dotenv.config();

export const PORT: number = process.env.PORT
    ? parseInt(process.env.PORT)
    : 5000;
export const DB_URL: string = process.env.DB_URL
    ? process.env.DB_URL
    : "mongodb+srv://borrowell5:rcpMrV4elKL5in5a@cluster0.fijk29i.mongodb.net/test";
