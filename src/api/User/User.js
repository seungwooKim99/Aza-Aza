import { prisma } from "../../../generated/prisma-client";

export default {
    User: {
        goals: ({ id }) => prisma.user({ id }).goals(),
        comments: ({ id }) => prisma.user({ id }).comments(),
        toDos: ({ id }) => prisma.user({ id }).toDos()
    }
};