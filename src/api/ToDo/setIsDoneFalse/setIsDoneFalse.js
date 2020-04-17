import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        setIsDoneFalse: async (_, args, { request, isAuthenticated }) => {
            isAuthenticated(request);
            const { toDoId } = args;
            const { user } = request;
            try {
                await prisma.updateToDo({
                    data: {
                        isDone: false,

                    },
                    where: {
                        id: toDoId
                    }
                });
                return true;
            }
            catch{
                return false;
            }
        }
    }
};