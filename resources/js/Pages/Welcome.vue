<script setup>
import {Head, Link} from '@inertiajs/vue3';

defineProps({
    profile: Object
})

</script>

<template>
  <Head title="Welcome"/>

    <section class="py-10 md:py-16 bg-dots-darker">

        <div class="container max-w-screen-xl mx-auto px-4">

            <nav class="flex items-center justify-between mb-10">
                <div class="flex space-x-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 grayscale hover:grayscale-0" viewBox="0 0 128 128"><path fill="none" d="m0 8.934l49.854.158l14.167 24.47l14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02l-38.476 66.053L25.691 9.592L.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168l-15.053 24.647L49.216 9.73l-22.794-.168l37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"/><path fill="#35495e" d="m25.997 9.393l23.002.009L64.035 34.36L79.018 9.404L102 9.398L64.15 75.053z"/><path fill="#41b883" d="m.91 9.569l25.067-.172l38.15 65.659L101.98 9.401l25.11.026l-62.966 108.06z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:fill-white grayscale fill-inertia hover:grayscale-0 px-1 py-1.5 hover:bg-gradient-to-r from-inertia to-violet-400" viewBox="0 0 24 24"><path  d="M6.901 5.331H0L6.669 12L0 18.669h6.901L13.571 12zm10.43 0H10.43L17.099 12l-6.67 6.669h6.902L24 12z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 256 264"><path fill="#ff2d20" d="M255.856 59.62c.095.351.144.713.144 1.077v56.568c0 1.478-.79 2.843-2.073 3.578L206.45 148.18v54.18a4.135 4.135 0 0 1-2.062 3.579l-99.108 57.053c-.227.128-.474.21-.722.299c-.093.03-.18.087-.278.113a4.15 4.15 0 0 1-2.114 0c-.114-.03-.217-.093-.325-.134c-.227-.083-.464-.155-.68-.278L2.073 205.938A4.128 4.128 0 0 1 0 202.36V32.656c0-.372.052-.733.144-1.083c.031-.119.103-.227.145-.346c.077-.216.15-.438.263-.639c.077-.134.19-.242.283-.366c.119-.165.227-.335.366-.48c.119-.118.274-.206.408-.309c.15-.124.283-.258.453-.356h.005L51.613.551a4.135 4.135 0 0 1 4.125 0l49.546 28.526h.01c.165.104.305.232.454.351c.134.103.284.196.402.31c.145.149.248.32.371.484c.088.124.207.232.279.366c.118.206.185.423.268.64c.041.118.113.226.144.35c.095.351.144.714.145 1.078V138.65l41.286-23.773V60.692c0-.36.052-.727.145-1.072c.036-.124.103-.232.144-.35c.083-.217.155-.44.268-.64c.077-.134.19-.242.279-.366c.123-.165.226-.335.37-.48c.12-.118.269-.206.403-.309c.155-.124.289-.258.454-.356h.005l49.551-28.526a4.13 4.13 0 0 1 4.125 0l49.546 28.526c.175.103.309.232.464.35c.128.104.278.197.397.31c.144.15.247.32.37.485c.094.124.207.232.28.366c.118.2.185.423.267.64c.047.118.114.226.145.35m-8.115 55.258v-47.04l-17.339 9.981l-23.953 13.792v47.04l41.297-23.773zm-49.546 85.095V152.9l-23.562 13.457l-67.281 38.4v47.514zM8.259 39.796v160.177l90.833 52.294v-47.505L51.64 177.906l-.015-.01l-.02-.01c-.16-.093-.295-.227-.444-.34c-.13-.104-.279-.186-.392-.3l-.01-.015c-.134-.129-.227-.289-.34-.433c-.104-.14-.227-.258-.31-.402l-.005-.016c-.093-.154-.15-.34-.217-.515c-.067-.155-.154-.3-.196-.464v-.005c-.051-.196-.061-.403-.082-.604c-.02-.154-.062-.309-.062-.464V63.57L25.598 49.772l-17.339-9.97zM53.681 8.893L12.399 32.656l41.272 23.762L94.947 32.65L53.671 8.893zm21.468 148.298l23.948-13.786V39.796L81.76 49.778L57.805 63.569v103.608zM202.324 36.935l-41.276 23.762l41.276 23.763l41.271-23.768zm-4.13 54.676l-23.953-13.792l-17.338-9.981v47.04l23.948 13.787l17.344 9.986zm-94.977 106.006l60.543-34.564l30.264-17.272l-41.246-23.747l-47.489 27.34l-43.282 24.918z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 grayscale hover:grayscale-0" viewBox="0 0 256 154"><defs><linearGradient id="logosTailwindcssIcon0" x1="-2.778%" x2="100%" y1="32%" y2="67.556%"><stop offset="0%" stop-color="#2298bd"/><stop offset="100%" stop-color="#0ed7b5"/></linearGradient></defs><path fill="url(#logosTailwindcssIcon0)" d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"/></svg>
                </div>

                <button class="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">Get my CV</button>
            </nav>

            <div class="text-center">
                <div class="flex justify-center mb-16">
                    <img :src=profile alt="Logo" class="object-contain h-56 w-56 rounded-b-lg grayscale ">

                </div>

                <h6 class="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Bartosz Piechowiak</h6>

                <h1 class="font-normal text-laravel font-bold text-2xl md:text-7xl leading-none mb-8">Aspiring Junior Developer</h1>

                <p class="font-normal text-gray-600 text-md md:text-xl mb-16"> I dedicate every spare moment beyond my current profession and family commitments to mastering the art of coding. What started as a hobby is now my dream career—I'm eager to turn my passion into my full-time job.</p>

                <a href="#" class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Hire me</a>
            </div>

        </div>

    </section>

    <section class="py-10 md:py-16">

        <div class="container max-w-screen-xl mx-auto px-4">

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-gray-50 px-8 py-10 rounded-md">
                    <div class="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                        <i data-feather="activity"></i>
                    </div>

                    <h4 class="font-medium text-gray-700 text-lg mb-4">High experience</h4>

                    <p class="font-normal text-gray-500 text-md">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div class="bg-gray-50 px-8 py-10 rounded-md">
                    <div class="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                        <i data-feather="codesandbox"></i>
                    </div>

                    <h4 class="font-medium text-gray-700 text-lg mb-4">Useful sandboxes</h4>

                    <p class="font-normal text-gray-500 text-md">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div class="bg-gray-50 px-8 py-10 rounded-md">
                    <div class="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                        <i data-feather="coffee"></i>
                    </div>

                    <h4 class="font-medium text-gray-700 text-lg mb-4">Success side projects</h4>

                    <p class="font-normal text-gray-500 text-md">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

        </div>

    </section>

    <section class="py-10 md:py-16">

        <div class="container max-w-screen-xl mx-auto px-4">

            <div class="flex flex-col lg:flex-row justify-between">
                <div class="mb-10 lg:mb-0">
                    <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Portfolio</h1>

                    <p class="font-normal text-gray-500 text-xs md:text-base">I have brought here my biggest and favorite works <br> as a professional.</p>
                </div>

                <div class="space-y-24">
                    <div class="flex space-x-6">
                        <h1 class="font-normal text-gray-700 text-3xl md:text-4xl">01</h1>

                        <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>

                        <div>
                            <h1 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Demo API Generator</h1>

                            <p class="font-normal text-gray-500 text-sm md:text-base">A dummy data free and documented API generator to facilitate <br> the process of testing the front-end portion of projects.</p>
                        </div>
                    </div>

                    <div class="flex space-x-6">
                        <h1 class="font-normal text-gray-700 text-3xl md:text-4xl">02</h1>

                        <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>

                        <div>
                            <h1 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Demo API Generator</h1>

                            <p class="font-normal text-gray-500 text-sm md:text-base">A dummy data free and documented API generator to facilitate <br> the process of testing the front-end portion of projects.</p>
                        </div>
                    </div>

                    <div class="flex space-x-6">
                        <h1 class="font-normal text-gray-700 text-3xl md:text-4xl">03</h1>

                        <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>

                        <div>
                            <h1 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Demo API Generator</h1>

                            <p class="font-normal text-gray-500 text-sm md:text-base">A dummy data free and documented API generator to facilitate <br> the process of testing the front-end portion of projects.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>

    <section class="py-10 md:py-16 bg-dots-darker">

        <div class="container max-w-screen-xl mx-auto px-4">

            <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Education</h1>

            <p class="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of the places I studied</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-gray-50 px-8 py-10 rounded-md">
                    <h4 class="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

                    <p class="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>

                    <div class="relative">
                        <h6 class="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                        <span class="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                    </div>
                </div>

                <div class="bg-gray-50 px-8 py-10 rounded-md">
                    <h4 class="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

                    <p class="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>

                    <div class="relative">
                        <h6 class="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                        <span class="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                    </div>
                </div>

                <div class="bg-gray-50 px-8 py-10 rounded-md">
                    <h4 class="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

                    <p class="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>

                    <div class="relative">
                        <h6 class="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                        <span class="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                    </div>
                </div>

                <div class="bg-gray-50 px-8 py-10 rounded-md">
                    <h4 class="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

                    <p class="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>

                    <div class="relative">
                        <h6 class="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                        <span class="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                    </div>
                </div>

                <div class="bg-gray-50 px-8 py-10 rounded-md">
                    <h4 class="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

                    <p class="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>

                    <div class="relative">
                        <h6 class="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                        <span class="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                    </div>
                </div>

                <div class="bg-gray-50 px-8 py-10 rounded-md">
                    <h4 class="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

                    <p class="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>

                    <div class="relative">
                        <h6 class="font-semibold text-gray-500 text-md relative z-10">See the place here</h6>
                        <span class="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                    </div>
                </div>
            </div>

        </div>

    </section>

    <section class="py-10 md:py-16">

        <div class="container max-w-screen-xl mx-auto px-4">

            <div class="text-center">
                <h1 class="font-normal text-gray-300 text-3xl md:text-6xl lg:text-7xl mb-20 md:mb-32 lg:mb-48">Please do not measure your skills in <br> percentages!</h1>

                <p class="font-medium text-gray-700 text-xs md:text-base">In my many years of experience, I use @laravel for backend projects and @vuejs for <br> front-end projects. I’m an avid programmer, so I create designs based on the <br> weekend @figmadesign.</p>
            </div>

        </div>

    </section>

    <section class="py-10 md:py-16">

        <div class="container max-w-screen-xl mx-auto px-4">

            <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Experience</h1>

            <p class="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of the places I studied</p>

            <div class="flex flex-col lg:flex-row justify-between">
                <div class="space-y-8 md:space-y-16 mb-16 md:mb-0">
                    <h6 class="font-medium text-gray-400 text-base uppercase">Company</h6>

                    <p class="font-semibold text-gray-600 text-base">Massa Fames <span class="font-normal text-gray-300">/ New York</span></p>

                    <p class="font-semibold text-gray-600 text-base">Massa Fames <span class="font-normal text-gray-300">/ New York</span></p>

                    <p class="font-semibold text-gray-600 text-base">Massa Fames <span class="font-normal text-gray-300">/ New York</span></p>

                    <p class="font-semibold text-gray-600 text-base">Massa Fames <span class="font-normal text-gray-300">/ New York</span></p>

                    <p class="font-semibold text-gray-600 text-base">Massa Fames <span class="font-normal text-gray-300">/ New York</span></p>
                </div>

                <div class="space-y-8 md:space-y-16 mb-16 md:mb-0">
                    <h6 class="font-medium text-gray-400 text-base uppercase">Position</h6>

                    <p class="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

                    <p class="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

                    <p class="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

                    <p class="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

                    <p class="font-normal text-gray-400 text-base">Junior Front-End Developer</p>
                </div>

                <div class="space-y-8 md:space-y-16">
                    <h6 class="font-medium text-gray-400 text-base uppercase">Year</h6>

                    <p class="font-normal text-gray-400 text-base">2016</p>

                    <p class="font-normal text-gray-400 text-base">2016</p>

                    <p class="font-normal text-gray-400 text-base">2016</p>

                    <p class="font-normal text-gray-400 text-base">2016</p>

                    <p class="font-normal text-gray-400 text-base">2016</p>
                </div>
            </div>

        </div>

    </section>

    <section class="py-10 md:py-16">

        <div class="container max-w-screen-xl mx-auto px-4">

            <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Brands</h1>

            <p class="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">Below is a summary of the places I studied</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <img src="assets/image/brand-1.png" alt="Image">

                <img src="assets/image/brand-2.png" alt="Image">

                <img src="assets/image/brand-3.png" alt="Image">

                <img src="assets/image/brand-4.png" alt="Image">

                <img src="assets/image/brand-5.png" alt="Image">

                <img src="assets/image/brand-6.png" alt="Image">
            </div>

        </div>

    </section>

    <section class="py-10 md:py-16">

        <div class="container max-w-screen-xl mx-auto px-4">

            <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Testimonial</h1>

            <p class="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">Below is a summary of the places I studied</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-gray-50 px-8 py-10 rounded-md">

                    <p class="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>

                    <h6 class="font-semibold text-gray-500 text-md">Stephan Clark <span class="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
                </div>

                <div class="bg-gray-50 px-8 py-10 rounded-md">

                    <p class="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>

                    <h6 class="font-semibold text-gray-500 text-md">Stephan Clark <span class="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
                </div>

                <div class="bg-gray-50 px-8 py-10 rounded-md">

                    <p class="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>

                    <h6 class="font-semibold text-gray-500 text-md">Stephan Clark <span class="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
                </div>

                <div class="bg-gray-50 px-8 py-10 rounded-md">

                    <p class="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>

                    <h6 class="font-semibold text-gray-500 text-md">Stephan Clark <span class="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
                </div>

                <div class="bg-gray-50 px-8 py-10 rounded-md">

                    <p class="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>

                    <h6 class="font-semibold text-gray-500 text-md">Stephan Clark <span class="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
                </div>

                <div class="bg-gray-50 px-8 py-10 rounded-md">

                    <p class="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>

                    <h6 class="font-semibold text-gray-500 text-md">Stephan Clark <span class="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
                </div>
            </div>

        </div>

    </section>

    <footer class="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">

        <div class="container max-w-screen-xl mx-auto px-4">

            <div class="text-center">
                <h1 class="font-medium text-gray-700 text-4xl md:text-5xl mb-5">Testimonial</h1>

                <p class="font-normal text-gray-400 text-md md:text-lg mb-20">I’m not currently taking on new client work but feel free to contact me for any <br> other inquiries.</p>

                <div class="flex items-center justify-center space-x-8">
                    <a href="#" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                        <i data-feather="twitter" class="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500"></i>
                    </a>

                    <a href="#" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                        <i data-feather="dribbble" class="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
                    </a>

                    <a href="#" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                        <i data-feather="facebook" class="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
                    </a>

                    <a href="#" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                        <i data-feather="codepen" class="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
                    </a>

                    <a href="#" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                        <i data-feather="at-sign" class="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
                    </a>

                    <a href="#" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                        <i data-feather="instagram" class="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
                    </a>
                </div>
            </div>

        </div>

    </footer>
</template>

