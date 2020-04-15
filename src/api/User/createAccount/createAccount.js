import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createAccount: async (_, args, { request }) => {
            const { username, email, firstName = "", lastName = "", password } = args;
            const isExist = await prisma.$exists.user({ username });
            if (isExist) {
                throw Error("Username already exists!");
            }
            await prisma.createUser({
                username,
                email,
                firstName,
                lastName,
                password
            });
            return true;
        }
    }
};