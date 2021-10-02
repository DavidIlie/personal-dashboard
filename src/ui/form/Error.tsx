const Error = ({
    error,
}: {
    error: string | string[] | undefined;
}): JSX.Element => {
    return error !== undefined ? (
        <p className="text-sm text-red-300 font-semibold mt-2">{error}</p>
    ) : (
        <div className="hidden" />
    );
};

export default Error;
