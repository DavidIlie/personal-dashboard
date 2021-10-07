import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.settings.create({
        data: {
            setup: true,
        },
    });
};

main()
    .catch((e) => {
        throw new Error(e);
    })
    .finally(() => {
        prisma.$disconnect;
    });
