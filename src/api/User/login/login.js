import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../util";

export default {
    Mutation: {
        login: async (_, args) => {
            const { email, password } = args;
            const user = await prisma.user({ email });
            if (!user) {
                throw Error("Wrong email. Can't find the user.");
            }
            if (user.password === password) {
                return generateToken(user.id);
            }
            else {
                throw Error("Wrong password");
            }
        }
    }
}