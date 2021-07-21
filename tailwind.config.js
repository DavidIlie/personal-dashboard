module.exports = {
    purge: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                "3xl": "1792px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
