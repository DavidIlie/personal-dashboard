import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.settings.create({
        data: {
            prefered_theme: "dark",
            setup: true,
            name: "Example Name",
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
