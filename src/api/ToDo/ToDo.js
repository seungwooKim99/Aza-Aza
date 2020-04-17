import { prisma } from "../../../generated/prisma-client";

export default {
    ToDo: {
        goal: ({ id }) => prisma.toDo({ id }).goal(),
        user: ({ id }) => prisma.toDo({ id }).user()
    }
}