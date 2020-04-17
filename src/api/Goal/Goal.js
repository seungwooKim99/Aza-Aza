import { prisma } from "../../../generated/prisma-client";

export default {
    Goal: {
        toDos: ({ id }) => prisma.goal({ id }).toDos(),
        comments: ({ id }) => prisma.goal({ id }).comments(),
        user: ({ id }) => prisma.goal({ id }).user()
    }
}