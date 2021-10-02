import { hashPassword } from "../src/lib/hashPassword";
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

    const password = await hashPassword("password");

    await prisma.users.create({
        data: {
            email: "example@example.com",
            password,
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
