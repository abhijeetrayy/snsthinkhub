import React from 'react'
import Link from 'next/link'

export default function product() {
    return (
        <>
            <section class="flex items-center bg-gray-200 lg:h-screen font-poppins dark:bg-gray-900 ">
                <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                        <div class="relative bg-white rounded-2xl dark:bg-gray-700">
                            <div class="w-full h-56 px-4 pt-4">
                                <img src="https://i.postimg.cc/fW3hVdhv/pexels-rodnae-productions-7648047.jpg" alt=""
                                    class="object-cover w-full h-full rounded-lg " />
                            </div>
                            <div>
                                <div class="p-4">
                                    <div class="mb-3">
                                        <a href="">
                                            <h2 class="text-2xl font-semibold dark:text-gray-300">
                                                Lorem ipsum dor amet ispiciousas
                                            </h2>
                                        </a>
                                    </div>
                                    <p class="pb-16 text-base font-base text-gray-700 dark:text-gray-400">
                                        We will take you different places of nepal and will translate japanese to english
                                        entertain ...
                                    </p>
                                </div>
                                <div class="flex items-center justify-end ">
                                    <a href="#"
                                        class="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-indigo-600 rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div class="relative bg-white rounded-2xl dark:bg-gray-700">
                            <div class="w-full h-56 px-4 pt-4 ">
                                <img src="https://i.postimg.cc/s2tvtrPF/first.jpg" alt=""
                                    class="object-cover w-full h-full rounded-lg " />
                            </div>
                            <div>
                                <div class="p-4">
                                    <div class="mb-3">
                                        <a href="">
                                            <h2 class="text-2xl font-semibold dark:text-gray-300">
                                                Lorem ipsum dor amet ispiciousas
                                            </h2>
                                        </a>
                                    </div>
                                    <p class="pb-16 text-base font-base text-gray-700 dark:text-gray-400">
                                        We will take you different places of nepal and will translate japanese to english
                                        entertain ...
                                    </p>
                                </div>
                                <div class="flex items-center justify-end ">
                                    <a href="#"
                                        class="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-indigo-600 rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div class="relative bg-white rounded-2xl dark:bg-gray-700">
                            <div class="w-full h-56 px-4 pt-4 ">
                                <img src="https://i.postimg.cc/Qdhgyp8g/second.jpg" alt=""
                                    class="object-cover w-full h-full rounded-lg " />
                            </div>
                            <div>
                                <div class="p-4">
                                    <div class="mb-3">
                                        <a href="">
                                            <h2 class="text-2xl font-semibold dark:text-gray-300">
                                                Lorem ipsum dor amet ispiciousas
                                            </h2>
                                        </a>
                                    </div>
                                    <p class="pb-16 text-base font-base text-gray-700 dark:text-gray-400">
                                        We will take you different places of nepal and will translate japanese to english
                                        entertain ...
                                    </p>
                                </div>
                                <div class="flex items-center justify-end ">
                                    <a href="#"
                                        class="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-indigo-600 rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100">
                                        Find out more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="w-full px-4 mb-4 md:w-96 ">
                <div class="p-6 border border-blue-100 dark:bg-gray-900 dark:border-gray-900 bg-gray-50 md:p-8">
                    <h2 class="mb-8 text-3xl font-bold text-gray-700 dark:text-gray-400">Order Summary</h2>
                    <div
                        class="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
                        <span class="text-gray-700 dark:text-gray-400">Subtotal</span>
                        <span class="text-xl font-bold text-gray-700 dark:text-gray-400 ">$100</span>
                    </div>
                    <div class="flex items-center justify-between pb-4 mb-4 ">
                        <span class="text-gray-700 dark:text-gray-400 ">Shipping</span>
                        <span class="text-xl font-bold text-gray-700 dark:text-gray-400 ">Free</span>
                    </div>
                    <div class="flex items-center justify-between pb-4 mb-4 ">
                        <span class="text-gray-700 dark:text-gray-400">Order Total</span>
                        <span class="text-xl font-bold text-gray-700 dark:text-gray-400">$99.00</span>
                    </div>
                    <h2 class="text-lg text-gray-500 dark:text-gray-400">We offer:</h2>
                    <div class="flex items-center gap-2 mb-4 ">
                        <a href="#">
                            <img src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png" alt=""
                                class="object-cover h-16 w-26" />
                        </a>
                        <a href="#">
                            <img src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png" alt=""
                                class="object-cover h-16 w-26" />
                        </a>
                        <a href="#">
                            <img src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png" alt=""
                                class="object-cover h-16 w-26" />
                        </a>
                    </div>
                    <div class="flex items-center justify-between ">
                        <button
                            class="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600">Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}
