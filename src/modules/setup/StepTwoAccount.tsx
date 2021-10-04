import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";

import useSettings from "@hooks/useSettings";
import { userSchema } from "@schemas/first/userSchema";

import Label from "@ui/form/Label";
import Input from "@ui/form/Input";
import Error from "@ui/form/Error";
import SetupCard from "@components/SetupCard";

interface Props {
    update: (step: number) => void;
    maxStep: number;
}

const StepTwoAccountModules = ({ update, maxStep }: Props): JSX.Element => {
    const settings = useSettings();

    return (
        <SetupCard step={2} maxStep={maxStep} update={update}>
            <h1 className="text-gray-200 font-semibold text-2xl px-4 mb-4">
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
                            <Label>Please confirm your password.</Label>
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
                            {isSubmitting ? "Submitting" : "Continue"}
                        </button>
                    </Form>
                )}
            </Formik>
        </SetupCard>
    );
};

export default StepTwoAccountModules;
