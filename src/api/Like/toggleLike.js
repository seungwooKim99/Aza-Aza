import { isAuthenticated } from "../../isAuthenticated";
import { prisma } from "../../../generated/prisma-client";

export default {
    Mutation: {
        toggleLike: async (_, args, { request }) => {
            isAuthenticated(request);
            const { goalId } = args;
            const { user } = request;
            const searchOpt = {
                AND: [
                    {
                        user: {
                            id: user.id
                        }
                    },
                    {
                        goal: {
                            id: goalId
                        }
                    }
                ]
            };

            try {
                const isExist = await prisma.$exists.like(searchOpt);
                if (isExist) {
                    await prisma.deleteManyLikes(searchOpt);
                }
                else {
                    await prisma.createLike({
                        user: {
                            connect: {
                                id: user.id
                            }
                        },
                        goal: {
                            connect: {
                                id: goalId
                            }
                        }
                    });
                }
                return true;
            }
            catch (err) {
                return false;
            }
        }
    }
};