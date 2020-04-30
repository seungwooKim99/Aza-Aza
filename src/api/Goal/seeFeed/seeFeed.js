import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        seeFeed: async (_, __, { request, isAuthenticated }) => {
            //console.log(request);
            //isAuthenticated(request);
            return await prisma.goals({
                orderBy: "createdAt_DESC"
            });
        }
    }
}