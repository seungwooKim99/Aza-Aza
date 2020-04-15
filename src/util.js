import dotenv from "dotenv";
import path from "path";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";


dotenv.config({ path: path.resolve(__dirname, ".env") });

import { randomCodes } from "./randomCodes";

export const generateSecret = () => {
    const randomNuber = Math.floor(Math.random() * randomCodes.length);
    return `${randomCodes[randomNuber]}`;
};

export const sendSecretMail = (email, signUpSecret) => {
    const mail = {
        from: "seungwooKim@aza-aza.com",
        to: email,
        subject: "Sign Up Secret for Aza-Aza!",
        html: `
        Hello! Your sign up secret is <strong>${signUpSecret}</strong>.
        <br/>Please copy paste on app / website to log in :).
        `
    };
    var options = {
        auth: {
            api_user: process.env.SENDGRID_USERNAME,
            api_key: process.env.SENDGRID_PASSWORD
        }
    };
    var client = nodemailer.createTransport(sgTransport(options));

    return client.sendMail(mail);
};