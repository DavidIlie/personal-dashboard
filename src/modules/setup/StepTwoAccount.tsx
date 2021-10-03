import { Slide, Fade } from "react-awesome-reveal";
import { Field, Form, Formik } from "formik";

import useSettings from "@hooks/useSettings";
import { userSchema } from "@schemas/first/userSchema";

import Label from "@ui/form/Label";
import Input from "@ui/form/Input";
import Error from "@ui/form/Error";
import toast from "react-hot-toast";

interface Props {
    update: (step: number) => void;
}

const StepTwoAccountModules = ({ update }: Props): JSX.Element => {
    const settings = useSettings();

    return (
        <Slide triggerOnce>
            <div className="bg-gray-800 bg-opacity-70 shadow-xl sm:flex max-w-6xl rounded">
                <div className="flex flex-col justify-center p-5">
                    <Fade cascade triggerOnce direction="left" duration={500}>
                        <h1 className="text-2xl pb-1">Progress:</h1>
                        <h2 className="ml-0.5 text-gray-300 font-semibold mt-2">
                            Step 2 out of 4
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
                        <h1 className="text-gray-200 font-semibold text-2xl px-4 mb-4 cursor-pointer">
                            {settings.name}, let's setup your account.
                        </h1>

                        <Formik
                            validateOnChange={false}
                            validateOnBlur={false}
                            validationSchema={userSchema}
                            initialValues={{
                                email: "",
                                password: "",
                                confirmPassword: "",
                            }}
                            onSubmit={async (data, { setSubmitting }) => {
                                setSubmitting(true);

                                const r = await fetch("/api/first/user", {
                                    body: JSON.stringify(data),
                                    method: "POST",
                                });
                                const response = await r.json();

                                if (r.status !== 200) {
                                    toast.error(response.message);
                                } else {
                                    toast.success("Updated!");
                                    update(3);
                                }

                                setSubmitting(false);
                            }}
                        >
                            {({ errors, isSubmitting }) => (
                                <Form>
                                    <div className="text-left mb-4">
                                        <Label>What is your email?</Label>
                                        <Field
                                            name="email"
                                            required
                                            as={Input}
                                            type="email"
                                            placeholder="bob@bob.com"
                                        />
                                        <Error error={errors.email} />
                                    </div>
                                    <div className="text-left mb-4">
                                        <Label>What is your password?</Label>
                                        <Field
                                            name="password"
                                            required
                                            as={Input}
                                            type="password"
                                            placeholder="Password123"
                                        />
                                        <Error error={errors.password} />
                                    </div>
                                    <div className="text-left mb-4">
                                        <Label>
                                            Please confirm your password.
                                        </Label>
                                        <Field
                                            name="confirmPassword"
                                            required
                                            as={Input}
                                            type="password"
                                            placeholder="Password123"
                                        />
                                        <Error error={errors.confirmPassword} />
                                    </div>
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
                        <h1
                            className="text-gray-300 font-semibold hover:underline cursor-pointer mt-2 -mb-4"
                            onClick={() => update(1)}
                        >
                            Or you can go back
                        </h1>
                    </Fade>
                </div>
            </div>
        </Slide>
    );
};

export default StepTwoAccountModules;
