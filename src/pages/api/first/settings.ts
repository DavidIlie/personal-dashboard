import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@lib/prisma";

import { settingSchema } from "@schemas/first/settingSchema";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(400).json({ message: "wrong method" });
    }
    try {
        const body = await settingSchema.validate(req.body);

        const settingsArray = await prisma.settings.findMany();
        const settings = settingsArray[0];

        if (settings.setup) {
            const updatedSettings = await prisma.settings.update({
                where: {
                    id: settings.id,
                },
                data: {
                    name: body.name,
                },
            });
            return res.status(200).json(updatedSettings);
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
