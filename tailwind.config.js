module.exports = {
    purge: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                "3xl": "1792px",
            },
            colors: {
                "dark-gray": {
                    100: "#a5a5af",
                    200: "#a5a5af",
                    300: "#9898aa",
                    400: "#8e8ea0",
                    500: "#4b4b55",
                    600: "#333341",
                    700: "#30303a",
                    800: "#262632",
                    900: "#1e1e28",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
