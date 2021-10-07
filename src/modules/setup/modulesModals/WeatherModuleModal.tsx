import { Form, Field, Formik } from "formik";

import Label from "@ui/form/Label";
import Input from "@ui/form/Input";

import Modal from "@ui/Modal";

interface Props {
    isOpen: boolean;
    updateModalState: () => void;
}

const WeatherModuleModal = ({
    isOpen,
    updateModalState,
}: Props): JSX.Element => {
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
                    initialValues={{ api_key: "" }}
                    onSubmit={async (data, { setSubmitting, resetForm }) => {}}
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
                            </div>
                            <div className="mt-4 flex justify-end gap-2">
                                <button
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-100 bg-blue-100 bg-dark-gray-900 border border-transparent rounded-md hover:bg-dark-gray-800 duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
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
