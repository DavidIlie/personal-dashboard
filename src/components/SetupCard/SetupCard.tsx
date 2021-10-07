import { Slide, Fade } from "react-awesome-reveal";

interface SetupCardProps {
    step: number;
    maxStep: number;
    children: React.ReactNode;
    update: (step: number) => void;
}

const SetupCard = ({
    step,
    maxStep,
    children,
    update,
}: SetupCardProps): JSX.Element => {
    return (
        <Slide triggerOnce>
            <div className="bg-gray-800 bg-opacity-70 shadow-xl sm:flex max-w-6xl rounded">
                <div className="flex flex-col justify-center p-5">
                    {step === 1 ? (
                        <Fade
                            cascade
                            triggerOnce
                            direction="left"
                            duration={500}
                        >
                            <h1 className="text-2xl pb-1">
                                Welcome to your new
                            </h1>
                            <span className="gradient-text font-bold text-3xl">
                                Personal Dashboard
                            </span>
                            <h2 className="ml-0.5 text-gray-300 italic font-semibold mt-2">
                                Let's get this show on the road...
                            </h2>
                        </Fade>
                    ) : (
                        <Fade direction="left" triggerOnce>
                            <h1 className="text-2xl pb-1">Progress:</h1>
                            <h2 className="ml-0.5 text-gray-300 font-semibold mt-2">
                                Step {step} out of 4
                            </h2>
                        </Fade>
                    )}
                </div>
                <div className="bg-indigo-800 flex-col justify-center px-8 py-6 text-center rounded-r">
                    <Fade
                        cascade
                        triggerOnce
                        direction="left"
                        delay={300}
                        duration={500}
                    >
                        {children}
                    </Fade>
                    <Fade
                        cascade
                        triggerOnce
                        direction="up"
                        delay={400}
                        duration={500}
                    >
                        <div
                            className={`grid ${
                                step >= 2 && maxStep > step && "grid-cols-2"
                            } divide-x-2 divide-gray-600`}
                        >
                            {step >= 2 && (
                                <h1
                                    className="text-gray-300 font-semibold hover:underline cursor-pointer mt-2 -mb-4"
                                    onClick={() => update(step - 1)}
                                >
                                    Or you can go back
                                </h1>
                            )}
                            {maxStep > step && (
                                <h1
                                    className="text-gray-300 font-semibold hover:underline cursor-pointer mt-2 -mb-4"
                                    onClick={() => update(step + 1)}
                                >
                                    Go to the next one
                                </h1>
                            )}
                        </div>
                    </Fade>
                </div>
            </div>
        </Slide>
    );
};

export default SetupCard;
