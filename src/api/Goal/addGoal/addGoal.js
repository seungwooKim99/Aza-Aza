import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        addGoal: async (_, args, { request, isAuthenticated }) => {
            isAuthenticated(request);
            const { caption, toDos } = args;
            const { user } = request;
            const Goal = await prisma.createGoal({
                caption,
                user: {
                    connect: {
                        id: user.id
                    }
                }
            });
            toDos.forEach(async toDo => {
                await prisma.createToDo({
                    text: toDo,
                    user: {
                        connect: {
                            id: user.id
                        }
                    },
                    goal: {
                        connect: {
                            id: Goal.id
                        }
                    }
                })
            });
            return Goal;
        }
    }
};