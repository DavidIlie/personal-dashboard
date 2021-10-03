import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@lib/prisma";

import { hashPassword } from "@lib/hashPassword";
import { userSchema } from "@schemas/first/userSchema";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(400).json({ message: "wrong method" });
    }
    try {
        const body = await userSchema.validate(req.body);

        const settingsArray = await prisma.settings.findMany();
        const settings = settingsArray[0];

        if (settings.setup) {
            if (body.password === body.confirmPassword) {
                const password = await hashPassword(body.password);

                let userTest = await prisma.users.findFirst({
                    where: { id: 1 },
                });

                let user;

                if (userTest) {
                    user = await prisma.users.update({
                        where: { id: 1 },
                        data: {
                            email: body.email,
                            password,
                        },
                    });
                } else {
                    user = await prisma.users.create({
                        data: {
                            email: body.email,
                            password,
                            isAdmin: true,
                        },
                    });
                }

                return res.json(user);
            } else {
                return res
                    .status(400)
                    .json({ message: "Passwords must match!" });
            }
        } else {
            return res.status(403).json({
                message: "this app has already been setup!",
            });
        }
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export default handler;
