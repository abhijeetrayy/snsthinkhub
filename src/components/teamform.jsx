"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Example() {
  const [formData, setFormData] = useState({
    Name: "",
    Designation: "",
    Quote: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("Name", formData.Name);
    formDataToSend.append("Designation", formData.Designation);
    formDataToSend.append("Quote", formData.Quote);
    formDataToSend.append("image", formData.image);

    const response = await fetch("/api/teamsave", {
      method: "POST",

      body: formDataToSend,
    });
    const data = await response.json();
    console.log(data?.message);
    if (data?.message == "Form data saved successfully.") {
      console.log("fff");
      formData.Name = "";
      formData.Designation = "";
      formData.Quote = "";
      formData.image = null;
      toast(data?.message);
    } else {
      toast("Something went wrong");
      console.log("Failed to submit form:", data);
    }

    // Handle success message or redirect
  };
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="space-y-12 bg-white p-6 rounded-md">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Person Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use proper identity and information
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="Name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder="Nirav Modi"
                  value={formData.Name}
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="HR-Name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Designation
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="Designation"
                  id="Designation"
                  placeholder="Developer / Group Manager"
                  value={formData.Designation}
                  onChange={handleChange}
                  autoComplete="Designation"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="Email"
                  type="email"
                  placeholder="abc@gmail.com"
                  value={formData.Email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

            {/* <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
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
            </div> */}

            <div className="col-span-full">
              <label
                htmlFor="Location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Quote Or Detail
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="Quote"
                  id="Quote"
                  value={formData.Quote}
                  onChange={handleChange}
                  autoComplete="given-name"
                  placeholder="Life is gift to be lived"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="Location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  name="Image"
                  id="Image"
                  value={formData.Image}
                  onChange={handleImageChange}
                  autoComplete="given-name"

                  //   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Additional
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Tag
              </legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Tag Specify the Internship.
              </p>
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
                  <label
                    htmlFor="new"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
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
                  <label
                    htmlFor="featured"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
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
                  <label
                    htmlFor="limited"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    *Limited
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div> */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
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
  );
}
