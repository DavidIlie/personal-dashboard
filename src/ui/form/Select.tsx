interface InputProps {
    required?: boolean;
    children: any;
}

const Select = ({ required, children, ...rest }: InputProps): JSX.Element => {
    return (
        <div className="relative inline-block w-full">
            <select
                {...rest}
                className="w-full px-3 py-2 text-base border rounded-lg bg-gray-800 border-gray-700 text-gray-400 focus:outline-none focus:border-dark-gray-700 focus:ring-opacity-50"
            >
                {children}
            </select>
        </div>
    );
};

export default Select;
