"use client";

import { previewData } from "next/dist/client/components/headers";
import { useState } from "react";
import programF from "../fetch/programF";

export default function Example() {
  const [number, setNumber] = useState([]);
  const [num, setNum] = useState(0);

  const [formData, setFormData] = useState({});
  const [content, setContent] = useState({ title: [], detail: [] });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleContentTitle = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setContent((previewData) => ({
      ...previewData,
      title: { ...previewData.title, [name]: value },
    }));
  };
  const handleContentDetail = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setContent((previewData) => ({
      ...previewData,
      detail: { ...previewData.detail, [name]: value },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      obj: content,
    }));
    console.log(formData);
    try {
      const response = await fetch("/api/programsave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      const data = await response.json();
      console.log(data);
      // Handle success message or redirect
    } catch (error) {
      console.log("Failed to submit form:", error);
      // Handle error
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className=" bg-white p-6 rounded-md">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="Title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="Title"
                    autoComplete="Designation"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="  Web Developer"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="Details"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Details
              </label>
              <div className="mt-2">
                <textarea
                  id="Details"
                  name="Details"
                  rows={3}
                  placeholder="Interview Profile Details"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  onChange={handleChange}
                  value={formData?.Details}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a Program details.
              </p>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="Faculty"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Faculty/Instructor email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  id="Faculty"
                  name="Faculty"
                  autoComplete="Faculty-name"
                  value={formData?.Faculty}
                  placeholder="abc@gmail.com"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="facultyName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Faculty/Instructor Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="FacultyName"
                  id="facultyName"
                  placeholder="Haris Kumar"
                  value={formData?.FacultyName}
                  onChange={handleChange}
                  autoComplete="facultyname"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="Certificate"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                On Completion Certificate
              </label>
              <div className="mt-2">
                <select
                  id="Certificate"
                  name="Certificate"
                  autoComplete="Certificate-name"
                  value={formData?.Certificate}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={""}>Choose</option>
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="Duration"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Duration
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset justify-between ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-fit">
                  <input
                    type="number"
                    name="Duration"
                    id="Duration"
                    autoComplete="Duration"
                    className="md:flex-1 w-full border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={formData?.Duration}
                    onChange={handleChange}
                    placeholder="  6"
                  />
                  <span className="flex w-fit select-none items-center pr-3 text-gray-500 sm:text-sm">
                    Month's
                  </span>
                </div>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="Price"
                  id="price"
                  placeholder="Rs. 1000"
                  value={formData?.Price}
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Prgram Content
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Content shown in tabular form in UI
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="Content"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Content Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="Content"
                    autoComplete="Content"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="  Lesson/Chapter"
                    value={content?.title?.title}
                    onChange={handleContentTitle}
                  />
                </div>
              </div>
              <label
                htmlFor="Content"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title Detail
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="detail"
                    id="Content"
                    autoComplete="Content"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="  Detail"
                    value={content?.detail?.detail}
                    onChange={handleContentDetail}
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setNumber([
                    ...number,
                    {
                      element: num + 1,
                      name: `title${num}`,
                      detail: `detail${num}`,
                    },
                  ]);
                  setNum(num + 1);
                }}
              >
                Add
              </button>{" "}
              <button
                type="button"
                onClick={() => {
                  setFormData((prevState) => ({
                    ...prevState,
                    obj: content,
                  }));
                  console.log(formData);
                  console.log(content);
                  console.log(number);
                }}
              >
                show
              </button>
            </div>
            {number.map((item, index) => {
              const name = item.name;
              const detail = item.detail;
              return (
                <div className="sm:col-span-4" key={item.element}>
                  <label
                    htmlFor="Content"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Content Title
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name={[name]}
                        id="Content"
                        autoComplete="Content"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="  Lesson/Chapter"
                        value={content?.title?.[name]}
                        onChange={handleContentTitle}
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="Content"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Title Detail
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name={[detail]}
                        id="Content"
                        autoComplete="Content"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="  Detail"
                        value={content?.detail?.[detail]}
                        onChange={handleContentDetail}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setNumber([
                        ...number,
                        {
                          element: num + 1,
                          name: `title${num}`,
                          detail: `detail${num}`,
                        },
                      ]);
                      setNum(num + 1);
                    }}
                  >
                    Add
                  </button>{" "}
                  <button
                    type="button"
                    onClick={() => {
                      const update = number.filter(
                        (togone) => togone.element !== item.element
                      );

                      setNumber(update);
                      setContent((prevData) => {
                        const newData = { ...prevData };
                        delete newData.title[name];
                        return newData;
                      });
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
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
        </div>
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
      <button type="button" onClick={programF}>
        Click
      </button>
    </form>
  );
}
