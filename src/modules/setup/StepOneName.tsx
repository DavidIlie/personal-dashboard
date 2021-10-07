import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";

import { useSettingsStore } from "@global-stores/useSettingsStore";
import { settingSchema } from "@schemas/first/settingSchema";

import Tooltip from "@ui/Tooltip";
import SetupCard from "@components/SetupCard";

import Label from "@ui/form/Label";
import Input from "@ui/form/Input";
import Select from "@ui/form/Select";
import Error from "@ui/form/Error";

interface Props {
    update: (step: number) => void;
    maxStep: number;
}

const StepOneNameModule = ({ update, maxStep }: Props): JSX.Element => {
    const { updateSettings } = useSettingsStore();

    return (
        <SetupCard step={1} maxStep={maxStep} update={update}>
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
                initialValues={{ name: "", default_location: "" }}
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
                            <Label>Which city are you from?</Label>
                            <Field
                                name="default_location"
                                required
                                as={Input}
                                placeholder="This is for location purposes!"
                            />
                            <Error error={errors.default_location} />
                        </div>
                        <button
                            type="submit"
                            className="bg-gray-800 px-3 py-2 rounded duration-150 hover:bg-gray-900"
                        >
                            {isSubmitting ? "Submitting" : "Continue"}
                        </button>
                    </Form>
                )}
            </Formik>
        </SetupCard>
    );
};

export default StepOneNameModule;
