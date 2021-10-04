interface RadioProps {
    label: string;
}

const Radio = ({ label, ...rest }: RadioProps): JSX.Element => {
    return (
        <div className="flex items-center justify-between">
            <div className="block">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        className="rounded border-gray-500 text-gray-500 shadow-sm focus:border-gray-600 focus:ring-1 focus:ring-gray-800 focus:ring-opacity-50 bg-gray-800"
                        {...rest}
                    />
                    <span className="ml-2 text-gray-200">{label}</span>
                </label>
            </div>
        </div>
    );
};

export default Radio;
