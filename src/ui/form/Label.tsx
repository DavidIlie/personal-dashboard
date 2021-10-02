interface LabelProps {
    children: React.ReactElement | string;
}

const Label = ({ children }: LabelProps): JSX.Element => {
    return (
        <label className="block text-sm text-gray-100 mb-1">{children}</label>
    );
};

export default Label;
