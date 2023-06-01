import React from 'react'

export default function courseCta() {
    return (

        <section className=" container mx-auto bg-gray-800">
            <div className="flex flex-col items-center px-8 py-20 lg:flex lg:justify-between sm:flex-row sm:gap-4">
                <div className="">
                    <h3 className="text-3xl font-bold text-gray-100">
                        Tailwind CSS CTA Section
                    </h3>
                    <p className="mt-2 text-gray-100 text-md">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
                        repellat sequi ex necessitatibus assumenda quasi, quos modi ducimus,
                        quod, vitae possimus?
                    </p>
                </div>
                <div className='flex flex-col gap-4 items-center sm:flex-row'>

                    <input className='z-50 mt-6 p-2 h-12 ring-2 ring-indigo-700 focus:ring-3 w-48 rounded-lg mx-3 sm:w-56 md:w-64' type="email" placeholder='abc@gmail.com' />
                    <button
                        className="z-50 block px-8 py-2  text-lg font-medium text-center text-white bg-indigo-800 rounded "
                        href="#"
                    >Get In Touch
                    </button>
                </div>

            </div>
        </section>

    )
}
