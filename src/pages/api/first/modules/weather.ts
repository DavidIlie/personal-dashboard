import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@lib/prisma";
import { moduleSchema } from "@schemas/first/moduleSchema";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const settingsArray = await prisma.settings.findMany();
        const settings = settingsArray[0];

        if (settings.setup) {
            try {
                const body = await moduleSchema.validate(req.body);

                const updatedSettings = await prisma.settings.update({
                    where: {
                        id: settings.id,
                    },
                    data: {
                        weatherKey: body.api_key,
                    },
                });
                return res.status(200).json(updatedSettings);
            } catch (error) {
                return res.status(400).json({ message: error.message });
            }
        } else {
            return res.status(403).json({
                message: "this app has already been setup!",
            });
        }
    } else if (req.method === "DELETE") {
        const settingsArray = await prisma.settings.findMany();
        const settings = settingsArray[0];

        if (settings.setup) {
            try {
                const updatedSettings = await prisma.settings.update({
                    where: {
                        id: settings.id,
                    },
                    data: {
                        weatherKey: null,
                    },
                });
                return res.status(200).json(updatedSettings);
            } catch (error) {
                return res.status(400).json({ message: error.message });
            }
        } else {
            return res.status(403).json({
                message: "this app has already been setup!",
            });
        }
    } else {
        return res.status(400).json({ message: "wrong method" });
    }
};

export default handler;
