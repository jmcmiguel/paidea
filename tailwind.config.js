const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },

            colors: {
                blue: {
                    1000: "#228ab7",
                },
                yellow: {
                    1000: "#ff8f00",
                },
            },

            animation: {
                wave: "wave 1s ease-in-out",
            },

            keyframes: {
                wave: {
                    "0%, 100%": {
                        transform: "rotate(0deg)",
                    },
                    "25%": {
                        transform: "rotate(-30deg)",
                    },
                    "75%": {
                        transform: "rotate(30deg)",
                    },
                },
            },

            spacing: {
                110: "85rem",
                100: "75rem",
                99: "65rem",
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
