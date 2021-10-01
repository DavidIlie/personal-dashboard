import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const url = decodeURIComponent((req.query as any).url);
    const result = await fetch(url);
    const body = await result.body;
    //@ts-ignore
    body?.pipe(res);
};
