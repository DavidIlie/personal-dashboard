import { NextSeo } from "next-seo";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { GetServerSideProps } from "next";

import prisma from "@lib/prisma";

import StepOneNameModule from "@modules/setup/StepOneName";
import StepTwoAccountModules from "@modules/setup/StepTwoAccount";

interface Props {
    step: number;
}

const Home = ({ step }: Props): JSX.Element => {
    const [currentStep, setCurrentStep] = useState<number>(step || 1);
    const [pendingAnimation, setPendingAnimation] = useState<boolean>(false);
    const [pendingDisableScrollBar, setPendingDisabledScrollbar] =
        useState<boolean>(false);

    const updateToNextStep = (step: number) => {
        setPendingAnimation(true);
        setPendingDisabledScrollbar(true);

        setTimeout(() => {
            setCurrentStep(step);
            setPendingAnimation(false);
        }, 500);

        setTimeout(() => {
            setPendingDisabledScrollbar(false);
        }, 700);
    };

    return (
        <>
            {pendingDisableScrollBar && (
                <style jsx>{`
                    ::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            )}
            <NextSeo title="Welcome!" />
            <div className="h-screen flex flex-col justify-center items-center">
                <LeaveEntranceTransition
                    argument={currentStep === 1 && pendingAnimation === false}
                >
                    <StepOneNameModule update={updateToNextStep} />
                </LeaveEntranceTransition>
                <LeaveEntranceTransition
                    argument={currentStep === 2 && pendingAnimation === false}
                >
                    <StepTwoAccountModules update={updateToNextStep} />
                </LeaveEntranceTransition>
                <LeaveEntranceTransition
                    argument={currentStep === 3 && pendingAnimation === false}
                >
                    <h1>This is step 3</h1>
                </LeaveEntranceTransition>
            </div>
        </>
    );
};

const LeaveEntranceTransition = ({
    children,
    argument,
}: {
    children: React.ReactNode;
    argument: any;
}): JSX.Element => {
    return (
        <Transition
            show={argument}
            enter="transform transition ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-full"
            leave="transform transition ease-in-out duration-500"
            leaveFrom="translate-x-0"
            leaveTo="translateTransition"
        >
            {children}
        </Transition>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
    let step = 1;
    const settingsArray = await prisma.settings.findMany();
    const settings = settingsArray[0];

    const user = await prisma.users.findFirst({ where: { id: 1 } });

    if (settings.name !== "Example Name") step = 2;
    if (user) step = 3;

    return {
        props: { step },
    };
};

export default Home;
