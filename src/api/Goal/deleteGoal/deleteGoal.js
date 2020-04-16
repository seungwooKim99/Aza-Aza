import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        deleteGoal: async (_, args, { request, isAuthenticated }) => {
            isAuthenticated(request);
            const { goalId } = args;
            const { user } = request;
            const goal = await prisma.$exists.goal({
                id: goalId,
                user: {
                    id: user.id
                }
            });
            if (goal) {
                return prisma.deleteGoal({ id: goalId });
            }
            else {
                throw Error("You can't delete the Goal");
            }
        }
    }
};