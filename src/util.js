import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

import { randomCodes } from "./randomCodes";

export const generateSecret = () => {
    const randomNuber = Math.floor(Math.random() * randomCodes.length);
    return `${randomCodes[randomNuber]}`;
};