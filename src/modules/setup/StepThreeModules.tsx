import useSettings from "@hooks/useSettings";

import SetupCard from "@components/SetupCard";

import Tooltip from "@ui/Tooltip";
import Radio from "@ui/form/Radio";

interface Props {
    update: (step: number) => void;
    maxStep: number;
}

const StepThreeModulesModule = ({ update, maxStep }: Props): JSX.Element => {
    const settings = useSettings();

    return (
        <SetupCard step={3} maxStep={maxStep} update={update}>
            <div className="px-4">
                <h1 className="text-gray-200 font-semibold text-2xl">
                    {settings.name}, let's setup your modules.
                </h1>
                <h1 className="mb-4 text-gray-300 italic">
                    *what aspects of the app you want enabled*
                </h1>
            </div>

            <div>
                <div className="sm:flex items-center gap-2 mb-2">
                    <div>
                        <Radio label="Weather Module" />
                    </div>
                    {"- "}
                    <Tooltip content="See example" animation="shift-away">
                        <a className="text-red-100 font-semibold cursor-pointer">
                            Displays the weather according to your location.
                        </a>
                    </Tooltip>
                </div>

                <div className="sm:flex items-center gap-2 mb-2">
                    <div>
                        <Radio label="News Module" />
                    </div>
                    {"- "}
                    <Tooltip content="See example" animation="shift-away">
                        <a className="text-red-100 font-semibold cursor-pointer">
                            Shows the recent news, tailored to your liking.
                        </a>
                    </Tooltip>
                </div>

                <div className="sm:flex items-center gap-2 mb-2">
                    <div>
                        <Radio label="IP Location Modules" />
                    </div>
                    {"- "}
                    <Tooltip content="See example" animation="shift-away">
                        <a className="text-red-100 font-semibold cursor-pointer">
                            A fallback if the app can't see where you are via
                            GPS.
                        </a>
                    </Tooltip>
                </div>
                <button className="bg-gray-800 px-3 py-2 rounded duration-150 hover:bg-gray-900">
                    Continue
                </button>
            </div>
        </SetupCard>
    );
};

export default StepThreeModulesModule;
