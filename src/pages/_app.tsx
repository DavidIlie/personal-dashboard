import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Loader from "@components/Loader";
import { DefaultSeo } from "next-seo";
import { QueryClient, QueryClientProvider } from "react-query";
import AppLayout from "@components/AppLayout";
import ReactModal from "react-modal";

import "tailwindcss/tailwind.css";
import "@styles/global.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import "react-toastify/dist/ReactToastify.css";

ReactModal.setAppElement("#__next");

const queryClient = new QueryClient();
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
      <QueryClientProvider client={queryClient}>
        <AppLayout>
          {loading ? <Loader /> : <Component {...pageProps} />}
        </AppLayout>
      </QueryClientProvider>
      <ToastContainer autoClose={2500} newestOnTop={true} />
    </>
  );
}
