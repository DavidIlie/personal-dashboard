import { Form, Field, Formik } from "formik";
import { useRef } from "react";
import toast from "react-hot-toast";

import Label from "@ui/form/Label";
import Input from "@ui/form/Input";
import Error from "@ui/form/Error";

import Modal from "@ui/Modal";

import { useSettingsStore } from "@global-stores/useSettingsStore";

interface Props {
    isOpen: boolean;
    updateModalState: () => void;
}

const WeatherModuleModal = ({
    isOpen,
    updateModalState,
}: Props): JSX.Element => {
    const { updateSettings, settings } = useSettingsStore();

    const formikRef = useRef<HTMLFormElement>();

    const RemoveKey = async () => {
        const r = await fetch("/api/first/modules/weather", {
            method: "DELETE",
        });
        const response = await r.json();

        if (r.status !== 200) {
            toast.error(response.message);
        } else {
            updateSettings(response);
            updateModalState();
            toast.success("Deleted successfully!");
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            updateModalState={updateModalState}
            title="Insert Weather API key"
        >
            <>
                <h1 className="mb-1">
                    You need to enter an API key from{" "}
                    <a
                        href="https://openweathermap.org"
                        target="_blank"
                        className="text-blue-400 hover:text-blue-500 duration-200"
                    >
                        openweathermap.org
                    </a>{" "}
                    in order to use this module. If you don't understand how to
                    do it, check out the{" "}
                    <a
                        href="https://github.com/davidilie/personal-dashboard"
                        target="_blank"
                        className="text-blue-400 hover:text-blue-500 duration-200"
                    >
                        wiki
                    </a>
                    .
                </h1>

                <Formik
                    validateOnChange={false}
                    validateOnBlur={false}
                    initialValues={{ api_key: settings.weatherKey || "" }}
                    onSubmit={async (data, { setSubmitting }) => {
                        setSubmitting(true);

                        const r = await fetch("/api/first/modules/weather", {
                            method: "POST",
                            body: JSON.stringify(data),
                        });
                        const response = await r.json();

                        if (r.status !== 200) {
                            toast.error(response.message);
                        } else {
                            updateSettings(response);
                            toast.success("Added successfully!");
                            updateModalState();
                        }

                        setSubmitting(false);
                    }}
                >
                    {({ errors, isSubmitting }) => (
                        <Form>
                            <div className="mt-2">
                                <Label>API Key</Label>
                                <Field
                                    name="api_key"
                                    required
                                    darker
                                    as={Input}
                                />
                                <Error error={errors.api_key} />
                            </div>
                            <div className="mt-4 flex justify-end gap-2">
                                {settings.weatherKey !== null && (
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-100 bg-red-600 border border-transparent rounded-md hover:bg-red-700 duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={() => RemoveKey()}
                                    >
                                        Remove Key
                                    </button>
                                )}
                                <button
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-100 bg-dark-gray-900 border border-transparent rounded-md hover:bg-gray-900 duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={updateModalState}
                                >
                                    Nevermind
                                </button>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-100 bg-gray-900 border border-transparent rounded-md hover:bg-dark-gray-900 duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                >
                                    {isSubmitting ? "Updating" : "Update"}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </>
        </Modal>
    );
};

export default WeatherModuleModal;
