import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        unlockUser: async (_, args) => {
            const { email } = args;
            const user = await prisma.user({ email });
            try {
                await prisma.updateUser({
                    where: {
                        email
                    },
                    data: {
                        isUnlocked: true
                    }
                });
                return true;
            }
            catch{
                return false;
            }
        }
    }
}