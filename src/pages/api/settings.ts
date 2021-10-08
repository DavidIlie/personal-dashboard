import { NextApiResponse, NextApiRequest } from "next";

import prisma from "@lib/prisma";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    const settingsArray = await prisma.settings.findMany();
    let settings = settingsArray[0];

    if (!settings.setup) {
        delete settings.ipKey;
        delete settings.newsKey;
        delete settings.weatherKey;
    }

    delete settings.id;

    res.json(settings);
};

export default handler;
