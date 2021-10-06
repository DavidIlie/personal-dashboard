import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";

interface ModalProps {
    isOpen: boolean;
    updateModalState: () => void;
    title: string;
    children: JSX.Element;
}

const Modal = ({
    isOpen,
    updateModalState,
    title,
    children,
    ...rest
}: ModalProps): JSX.Element => {
    let refDiv = useRef(null);

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={updateModalState}
                initialFocus={refDiv}
                {...rest}
            >
                <div className="min-h-screen px-4 text-center" ref={refDiv}>
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="text-gray-100 inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 border-2 border-gray-700 shadow-xl rounded-2xl">
                            <Dialog.Title
                                as="h3"
                                className="text-xl font-medium leading-6 text-gray-300"
                            >
                                {title}
                            </Dialog.Title>
                            <div className="mb-4" />
                            {children}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal;
