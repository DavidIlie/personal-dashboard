import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
import { QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

import { queryClient } from "@lib/queryClient";

import Loader from "@components/Loader";
import AppLayout from "@components/AppLayout";

import { useSettingsStore } from "@global-stores/useSettingsStore";
import { getSettingsData } from "@lib/settingsManager";

import "tailwindcss/tailwind.css";
import "@styles/global.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

export default function PersonalDashboard({
    Component,
    pageProps,
    router,
}: AppProps): React.ReactElement {
    const [finishedSettingsCheck, setFinishedSettingsCheck] =
        useState<boolean>(false);

    const { settings, updateSettings } = useSettingsStore((s) => s);

    useEffect(() => {
        if (performance.navigation.type != 1) {
            if (settings.name) return setFinishedSettingsCheck(true);
        }
        const getData = async () => {
            const settings = await getSettingsData();
            updateSettings(settings);
            setFinishedSettingsCheck(true);
        };
        getData();
    }, []);

    const [loading, setLoading] = useState<boolean>(false);

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
                }}
                description="Personal dashboard for my services running in my home network."
            />
            <QueryClientProvider client={queryClient}>
                <Toaster position="top-center" />
                {!finishedSettingsCheck ||
                (!finishedSettingsCheck && loading) ||
                loading ? (
                    <Loader />
                ) : (
                    <AppLayout>
                        <Component {...pageProps} />
                    </AppLayout>
                )}
            </QueryClientProvider>
        </>
    );
}
