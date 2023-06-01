'use client'
import { useState } from 'react';



export default function Example() {

    const [formData, setFormData] = useState({
        Designation: '',
        about: '',
        mode: '',
        Certificate: '',
        Duration: '',
        ComapnyName: '',
        HRName: '',
        Email: '',
        Country: '',
        Location: '',
        tag: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/hello', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
            // Handle success message or redirect
        } catch (error) {
            console.log('Failed to submit form:', error);
            // Handle error
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12 bg-white p-6 rounded-md">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        This information will be displayed publicly so be careful what you share.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="Designation" className="block text-sm font-medium leading-6 text-gray-900">
                                Designation
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="Designation"
                                        id="Designation"
                                        autoComplete="Designation"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="  Web Developer"
                                        value={formData.Designation}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                About
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    placeholder='Interview Profile Details'
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                    onChange={handleChange}
                                    value={formData.about}

                                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a Internship Profile details.</p>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="mode" className="block text-sm font-medium leading-6 text-gray-900">
                                Mode of Working
                            </label>
                            <div className="mt-2">
                                <select
                                    id="mode"
                                    name="mode"
                                    autoComplete="mode-name"
                                    value={formData.mode}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={""}>Choose...</option>
                                    <option value={"Remote"}>Remote</option>
                                    <option value={"In Office"}>In Office</option>
                                    <option value={"Remote and In Office flexible"}>Remote and In Office flexible</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="Certificate" className="block text-sm font-medium leading-6 text-gray-900">
                                Certificate
                            </label>
                            <div className="mt-2">
                                <select
                                    id="Certificate"
                                    name="Certificate"
                                    autoComplete="Certificate-name"
                                    value={formData.Certificate}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={""}>Choose</option>
                                    <option value={"Yes"}>Yes</option>
                                    <option value={"No"}>No</option>

                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="Duration" className="block text-sm font-medium leading-6 text-gray-900">
                                Duration
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="Duration"
                                        id="Duration"
                                        autoComplete="Duration"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        value={formData.Duration}
                                        onChange={handleChange}
                                        placeholder="  6"
                                    />
                                    <span className="flex select-none items-center pr-3 text-gray-500 sm:text-sm">Month's</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Company information</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="Comapny-Name" className="block text-sm font-medium leading-6 text-gray-900">
                                Company Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="ComapnyName"
                                    id="Comapny-Name"
                                    placeholder='Amazon pvt Lmt'
                                    value={formData.ComapnyName}
                                    onChange={handleChange}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="HR-Name" className="block text-sm font-medium leading-6 text-gray-900">
                                HR Name / Employer
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="HRName"
                                    id="HR-Name"
                                    placeholder='Haris Kumar'
                                    value={formData.HRName}
                                    onChange={handleChange}
                                    autoComplete="HR-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="Email"
                                    type="email"
                                    placeholder='abc@gmail.com'
                                    value={formData.Email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Country
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="Country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    value={formData.Country}
                                    onChange={handleChange}
                                >
                                    <option value={""}>Choose...</option>
                                    <option value={"India"}>India</option>
                                    <option value={"Canada"}>Canada</option>
                                    <option value={"United States"}>United States</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="Location" className="block text-sm font-medium leading-6 text-gray-900">
                                Location
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="Location"
                                    id="street-address"
                                    value={formData.Location}
                                    onChange={handleChange}
                                    autoComplete="given-name"
                                    placeholder='Dehradun,Uttarakhand'
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>






                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Additional</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        We'll always let you know about important changes, but you pick what else you want to hear about.
                    </p>

                    <div className="mt-10 space-y-10">

                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Tag</legend>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Tag Specify the Internship.</p>
                            <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="push-everything"
                                        name="tag"
                                        type="radio"
                                        value={"New"}
                                        onChange={handleChange}
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="new" className="block text-sm font-medium leading-6 text-gray-900">
                                        *New
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="push-email"
                                        name="tag"
                                        type="radio"
                                        value={"Featured"}
                                        onChange={handleChange}
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="featured" className="block text-sm font-medium leading-6 text-gray-900">
                                        *Featured
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="push-nothing"
                                        name="tag"
                                        type="radio"
                                        value={"Limited"}
                                        onChange={handleChange}
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="limited" className="block text-sm font-medium leading-6 text-gray-900">
                                        *Limited
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </div>

        </form>
    )
}
