import { prisma } from "../../../../generated/prisma-client";

export default {
    try {
        await prisma.updateUser({
            where: {
                email
            },
            data: {
                isUnlocked: true
            }
        });
        return true;
    }
            catch{
        return false;
    }
}
    }
}