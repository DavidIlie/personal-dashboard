import { Slide, Fade } from "react-awesome-reveal";
import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";

import { useSettingsStore } from "@global-stores/useSettingsStore";
import { settingSchema } from "@schemas/first/settingSchema";

import Tooltip from "@ui/Tooltip";

import Label from "@ui/form/Label";
import Input from "@ui/form/Input";
import Select from "@ui/form/Select";
import Error from "@ui/form/Error";

interface Props {
    update: (step: number) => void;
}

const StepOneNameModule = ({ update }: Props): JSX.Element => {
    const { updateSettings } = useSettingsStore();

    return (
        <Slide triggerOnce>
            <div className="bg-gray-800 bg-opacity-70 shadow-xl sm:flex max-w-6xl rounded">
                <div className="flex flex-col justify-center p-5">
                    <Fade cascade triggerOnce direction="left" duration={500}>
                        <h1 className="text-2xl pb-1">Welcome to your new</h1>
                        <span className="gradient-text font-bold text-3xl">
                            Personal Dashboard
                        </span>
                        <h2 className="ml-0.5 text-gray-300 italic font-semibold mt-2">
                            Let's get this show on the road...
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
                        <Tooltip
                            content="Only to welcome you each time, nothing else."
                            animation="shift-away"
                        >
                            <h1 className="text-gray-200 font-semibold text-2xl px-8 mb-3 cursor-pointer">
                                Basic Introduction
                            </h1>
                        </Tooltip>

                        <Formik
                            validateOnChange={false}
                            validateOnBlur={false}
                            validationSchema={settingSchema}
                            initialValues={{ name: "" }}
                            onSubmit={async (data, { setSubmitting }) => {
                                setSubmitting(true);

                                const r = await fetch("/api/first/settings", {
                                    body: JSON.stringify(data),
                                    method: "POST",
                                });
                                const response = await r.json();

                                if (r.status !== 200) {
                                    toast.error(response.message);
                                } else {
                                    toast.success("Updated!");
                                    update(2);
                                    updateSettings(response);
                                }

                                setSubmitting(false);
                            }}
                        >
                            {({ errors, isSubmitting }) => (
                                <Form>
                                    <div className="text-left mb-4">
                                        <Label>What is your name?</Label>
                                        <Field
                                            name="name"
                                            required
                                            as={Input}
                                            placeholder="This is what I'll call you as!"
                                        />
                                        <Error error={errors.name} />
                                    </div>
                                    <div className="text-left mb-4">
                                        <Label>
                                            How are you feeling today?
                                        </Label>
                                        <Select>
                                            <option>Excellent</option>
                                            <option>Good</option>
                                            <option>Decent</option>
                                            <option>Relaxing</option>
                                            <option>Could be better</option>
                                            <option>Bad</option>
                                            <option>Terrible</option>
                                        </Select>
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
                    </Fade>
                </div>
            </div>
        </Slide>
    );
};

export default StepOneNameModule;
