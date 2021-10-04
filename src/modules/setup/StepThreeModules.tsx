import { Field, Form, Formik } from "formik";

import useSettings from "@hooks/useSettings";

import Label from "@ui/form/Label";
import Input from "@ui/form/Input";
import Error from "@ui/form/Error";
import SetupCard from "@components/SetupCard";

interface Props {
    update: (step: number) => void;
    maxStep: number;
}

const StepThreeModulesModule = ({ update, maxStep }: Props): JSX.Element => {
    const settings = useSettings();

    return (
        <SetupCard step={3} maxStep={maxStep} update={update}>
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
                            {isSubmitting ? "Submitting" : "Continue"}
                        </button>
                    </Form>
                )}
            </Formik>
        </SetupCard>
    );
};

export default StepThreeModulesModule;
