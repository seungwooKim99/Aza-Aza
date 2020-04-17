import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        seeFullGoal: async (_, args) => {
            const { id } = args;
            return prisma.goal({ id });
        }
    }
}