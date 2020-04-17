import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        addToDo: async (_, args, { request, isAuthenticated }) => {
            isAuthenticated(request);
            const { text, goalId } = args;
            const { user } = request;
            return await prisma.createToDo({
                user: {
                    connect: {
                        id: user.id
                    }
                },
                goal: {
                    connect: {
                        id: goalId
                    }
                },
                text,
                isDone: false
            });
        }
    }
};