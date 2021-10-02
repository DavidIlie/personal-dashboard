import { GetServerSideProps } from "next";

import prisma from "@lib/prisma";
import serverRedirect from "@lib/serverRedirect";

const Home = (): JSX.Element => {
    return (
        <div className="h-screen flex items-center justify-center">
            <h1 className="text-5xl text-white text-semibold">Upload Server</h1>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
    const settingsArray = await prisma.settings.findMany();
    const settings = settingsArray[0];

    if (settings.setup) {
        serverRedirect(res, "setup");
    } else {
        serverRedirect(res, "home");
    }

    return {
        props: {},
    };
};

export default Home;
