import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        confirmSecret: async (_, args) => {
            const { secret, email } = args;
            const user = await prisma.user({ email });
            if (user.signUpSecret === secret) {
                await prisma.updateUser({
                    where: {
                        id: user.id
                    },
                    data: {
                        signUpSecret: ""
                    }
                });
                return true;
            }
            else {
                throw Error("Wrong email/secret combination");
            }
        }
    }
};