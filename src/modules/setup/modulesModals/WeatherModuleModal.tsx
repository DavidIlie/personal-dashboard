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
            title="Insert API Key"
        >
            <h1>
                It is required that you put an API key in order to enable this
                module.
            </h1>
        </Modal>
    );
};

export default WeatherModuleModal;
