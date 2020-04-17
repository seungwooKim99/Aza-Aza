import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        setAchieved: async (_, args, { request, isAuthenticated }) => {
            isAuthenticated(request);
            const { goalId } = args;
            const { user } = request;
            try {
                await prisma.updateGoal({
                    where: {
                        id: goalId
                    },
                    data: {
                        isAchieved: true
                    }
                })
                return true;
            }
            catch{
                return false;
            }
        }
    }
};