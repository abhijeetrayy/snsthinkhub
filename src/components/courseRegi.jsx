'use client'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import PayButton from "./payPage"

export default function Example() {
    const [open, setOpen] = useState(false)
     let [loading, setLoading] = useState(false);
    

    const cancelButtonRef = useRef(null)
    const [formData, setFormData] = useState({
       
        Name: '',
        Email: '',
        Phone: '',
        University: '',
        Year: '',
        Course: '',
        CourseId: "#100001"
     
        
    });

    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        

    };

    




    return (
        <>
            <button className='bg-indigo-600 rounded-md w-full py-4 shadow-xl drop-shadow-2xl text-white font-bold hover:bg-indigo-700' onClick={() => setOpen(true)}>Enrol Now</button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="z-50 relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="z-50 fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="z-50 fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full  justify-center p-4 text-center items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="z-50  relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full sm:max-w-[777px]">
                                    <div className="z-50 bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className=" flex flex-col gap-2">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                                </svg>

                                            </div>
                                            <div className="mt-3 sm:ml-4 sm:mt-0 text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Course / Program Registration
                                                </Dialog.Title>
                                                <div className="mt-2 flex flex-col gap-3">
                                                    
                                                    <div className="">
                                                        <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Name
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="Name"
                                                                name="Name"
                                                                type="Name"
                                                                value={formData.Name}
                                                                onChange={handleChange}
                                                                autoComplete="Name"
                                                                placeholder='Abhijeet Ray'
                                                                className="block w-full rounded-md border-0  pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <label htmlFor="Email" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Email address
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="Email"
                                                                name="Email"
                                                                type="Email"
                                                                value={formData.Email}
                                                                onChange={handleChange}
                                                                autoComplete="Email"
                                                                placeholder='abc@gmail.com'
                                                                className="block w-full rounded-md border-0 pl-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <label htmlFor="Phone" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Phone
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="Phone"
                                                                name="Phone"
                                                                type="Phone"
                                                                value={formData.Phone}
                                                                onChange={handleChange}
                                                                autoComplete="phone"
                                                                placeholder='+91 999911111'
                                                                className="block w-full rounded-md border-0  pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />
                                                        </div>
                                                    </div>
                                                     <div className="">
                                                        <label htmlFor="University" className="block text-sm font-medium leading-6 text-gray-900">
                                                            University
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="University"
                                                                name="University"
                                                                type="University"
                                                                value={formData.University}
                                                                onChange={handleChange}
                                                                autoComplete="University"
                                                                placeholder='Eg. Delhi University'
                                                                className="block w-full rounded-md border-0  pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />
                                                        </div>
                                                    </div>
                                                     <div className="">
                                                        <label htmlFor="Course" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Course
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="Course"
                                                                name="Course"
                                                                type="Course"
                                                                value={formData.Course}
                                                                onChange={handleChange}
                                                                autoComplete="phone"
                                                                placeholder='Eg. Btech CSE'
                                                                className="block w-full rounded-md border-0  pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />
                                                        </div>
                                                    </div>
                                                     <div className="">
                                                        <label htmlFor="Year" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Year
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="Year"
                                                                name="Year"
                                                                type="Year"
                                                                value={formData.Year}
                                                                onChange={handleChange}
                                                                autoComplete="Year"
                                                                placeholder='Eg. 2021-2025'
                                                                className="block w-full rounded-md border-0  pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:justify-between items-center p-4">
                                    <div><span className="text-gray-600 font-bold">Price: 150 Rs</span></div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <div
                                           
                                            className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                            
                                        >
                                            <PayButton formData={formData}/>
                                        </div>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
