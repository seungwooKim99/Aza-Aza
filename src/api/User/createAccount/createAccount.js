import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createAccount: async (_, args, { request }) => {
            const { username, email, firstName = "", lastName = "", password } = args;
            const isUsernameExist = await prisma.$exists.user({ username });
            const isEmailExist = await prisma.$exists.user({ email });
            if (isUsernameExist) {
                throw Error("Username already exists!");
            }
            if (isEmailExist) {
                throw Error("Email already exists!");
            }
            await prisma.createUser({
                username,
                email,
                firstName,
                lastName,
                password,
                isUnlocked: false
            });
            return true;
        }
    }
};