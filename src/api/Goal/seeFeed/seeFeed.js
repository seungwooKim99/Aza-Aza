import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        seeFeed: async (_, __, { request, isAuthenticated }) => {
            isAuthenticated(request);
            return await prisma.goals({
                orderBy: "createdAt_DESC"
            });
        }
    }
}