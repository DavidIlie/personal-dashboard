import { Slide, Fade } from "react-awesome-reveal";
import { Field, Form, Formik } from "formik";

import useSettings from "@hooks/useSettings";

import Label from "@ui/form/Label";
import Input from "@ui/form/Input";
import Error from "@ui/form/Error";

interface Props {
    update: (step: number) => void;
    maxStep: number;
}

const StepThreeModulesModule = ({ update, maxStep }: Props): JSX.Element => {
    const settings = useSettings();

    return (
        <Slide triggerOnce>
            <div className="bg-gray-800 bg-opacity-70 shadow-xl sm:flex max-w-6xl rounded">
                <div className="flex flex-col justify-center p-5">
                    <Fade cascade triggerOnce direction="left" duration={500}>
                        <h1 className="text-2xl pb-1">Progress:</h1>
                        <h2 className="ml-0.5 text-gray-300 font-semibold mt-2">
                            Step 3 out of 4
                        </h2>
                    </Fade>
                </div>
                <div className="bg-indigo-800 flex-col justify-center px-8 py-6 text-center rounded">
                    <Fade
                        cascade
                        triggerOnce
                        direction="right"
                        delay={300}
                        duration={500}
                    >
                        <div className="px-4">
                            <h1 className="text-gray-200 font-semibold text-2xl -mb-1">
                                {settings.name}, let's setup your modules.
                            </h1>
                            <h1 className="mb-4 text-gray-300 italic">
                                *what aspects of the app you want enabled*
                            </h1>
                        </div>

                        <Formik
                            validateOnChange={false}
                            validateOnBlur={false}
                            initialValues={{
                                email: "",
                                password: "",
                                confirmPassword: "",
                            }}
                            onSubmit={async (data, { setSubmitting }) => {
                                setSubmitting(true);

                                console.log(data);

                                setSubmitting(false);
                            }}
                        >
                            {({ errors, isSubmitting }) => (
                                <Form>
                                    <h1>Work in progress</h1>
                                    <button
                                        type="submit"
                                        className="bg-gray-800 px-3 py-2 rounded duration-150 hover:bg-gray-900"
                                    >
                                        {isSubmitting
                                            ? "Submitting"
                                            : "Continue"}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                        <div className="flex justify-center gap-2">
                            <h1
                                className="text-gray-300 font-semibold hover:underline cursor-pointer mt-2 -mb-4"
                                onClick={() => update(2)}
                            >
                                Or you can go back
                            </h1>
                            {maxStep > 3 && (
                                <h1
                                    className="text-gray-300 font-semibold hover:underline cursor-pointer mt-2 -mb-4"
                                    onClick={() => update(4)}
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

export default StepThreeModulesModule;
