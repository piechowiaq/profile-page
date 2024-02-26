/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {

        extend: {
            colors: {
                'laravel': '#ff2d20',
                'inertia': '#9453e9',
            },
            backgroundImage: {
                'dots-darker': "url('data:image/svg+xml,%3Csvg width=%2730%27 height=%2730%27 viewBox=%270 0 30 30%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z%27 fill=%27rgba(0,0,0,0.07)%27/%3E%3C/svg%3E')",
            },
        },
    },
    plugins: [],
}
