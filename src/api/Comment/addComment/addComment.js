import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        addComment: async (_, args, { request, isAuthenticated }) => {
            isAuthenticated(request);
            const { goalId, text } = args;
            const { user } = request;
            return await prisma.createComment({
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
                text
            });
        }
    }
}