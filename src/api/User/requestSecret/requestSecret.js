import { prisma } from "../../../../generated/prisma-client";
import { generateSecret, sendSecretMail } from "../../../util";

export default {
    Mutation: {
        requestSecret: async (_, args, { request }) => {
            const { email } = args;
            const signUpSecret = generateSecret();
            try {
                await sendSecretMail(email, signUpSecret);
                await prisma.updateUser({ data: { signUpSecret }, where: { email } });
                return true;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        }
    }
}