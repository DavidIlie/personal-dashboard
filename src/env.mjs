import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
   server: {
      NEWS_API_KEY: z.string().min(1),
      WEATHER_API_KEY: z.string().min(1),
      IP_LOCATOR_KEY: z.string().min(1),
      NAME: z.string().min(1).nullable().default("David"),
   },
   client: {},
   runtimeEnv: {
      NEWS_API_KEY: process.env.NEWS_API_KEY,
      WEATHER_API_KEY: process.env.WEATHER_API_KEY,
      IP_LOCATOR_KEY: process.env.IP_LOCATOR_KEY,
      NAME: process.env.NAME,
   },
});
