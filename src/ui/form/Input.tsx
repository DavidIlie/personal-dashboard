interface InputProps {
    input?: string;
    required?: boolean;
    darker?: boolean;
}

const Input = ({
    input,
    required,
    darker,
    ...rest
}: InputProps): JSX.Element => {
    return (
        <input
            className={`w-full py-2 px-3 text-base border rounded-lg placeholder-gray-600 bg-gray-${
                darker ? "900" : "800"
            } border-gray-700 text-gray-400 focus:outline-none focus:border-gray-700 focus:ring-opacity-50`}
            type={input}
            required={required}
            {...rest}
        />
    );
};

export default Input;
