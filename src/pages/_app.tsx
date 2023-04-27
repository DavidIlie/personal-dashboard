import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Loader from "@components/Loader";
import { DefaultSeo } from "next-seo";
import AppLayout from "@components/AppLayout";

import "tailwindcss/tailwind.css";
import "@styles/global.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

export default function PersonalDashboard({
   Component,
   pageProps,
   router,
}: AppProps): React.ReactElement {
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      document.documentElement.lang = `en-US`;
      const start = () => {
         setLoading(true);
      };
      const end = () => {
         setLoading(false);
      };
      router.events.on(`routeChangeStart`, start);
      router.events.on(`routeChangeComplete`, end);
      router.events.on(`routeChangeError`, end);
      return () => {
         router.events.off(`routeChangeStart`, start);
         router.events.off(`routeChangeComplete`, end);
         router.events.off(`routeChangeError`, end);
      };
   });
   return (
      <>
         <DefaultSeo
            defaultTitle="Dashboard"
            titleTemplate="%s | Dashboard"
            openGraph={{
               title: `Personal Dashboard`,
               type: `website`,
               site_name: `Personal Dashboard`,
               images: [
                  {
                     url: `https://www.davidilie.com/images/png/me.png`,
                     alt: `Profile Picture`,
                  },
               ],
            }}
            description="Personal dashboard for my services running in my home network."
         />
         <AppLayout>
            {loading ? <Loader /> : <Component {...pageProps} />}
         </AppLayout>
      </>
   );
}
