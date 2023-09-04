"use client";

import { useState } from "react";
import programF from "../fetch/programF";

export default function Example() {
  const [formData, setFormData] = useState({
    title: "",
    Details: "",
    Duration: "",
    Faculty: "",
    FacultyName: "",
    contentHour: "",
    contentNo: "",
    wywlDetail: "",
    tag: "",
    Certificate: "",
    Price: "",
    couseDescription: "",
  });
  const [data, setData] = useState([{ input1: "", input2: "" }]);
  const [data1, setData1] = useState([""]);
  const [data2, setData2] = useState([""]);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleAddInputs = () => {
    // Create a copy of the current data array and add two new objects
    const newData = [...data, { input1: "", input2: "" }];
    setData(newData);
  };

  const handleDeleteInputs = (index) => {
    // Create a copy of the current data array and remove the object at the specified index
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleInputChange = (index, inputName, value) => {
    // Create a copy of the current data array
    const newData = [...data];
    // Update the specified input in the specified object
    newData[index][inputName] = value;
    setData(newData);
  };

  const handleAddInput1 = () => {
    // Create a copy of the current data array and add an empty string
    const newData = [...data1, ""];
    setData1(newData);
  };

  const handleDeleteInput1 = (index) => {
    // Create a copy of the current data array and remove the string at the specified index
    const newData = [...data1];
    newData.splice(index, 1);
    setData1(newData);
  };

  const handleInputChange1 = (index, value) => {
    // Create a copy of the current data array
    const newData = [...data1];
    // Update the specified input in the array
    newData[index] = value;
    setData1(newData);
  };

  const handleAddInput2 = () => {
    // Create a copy of the current data array and add an empty string
    const newData = [...data2, ""];
    setData2(newData);
  };

  const handleDeleteInput2 = (index) => {
    // Create a copy of the current data array and remove the string at the specified index
    const newData = [...data2];
    newData.splice(index, 1);
    setData2(newData);
  };

  const handleInputChange2 = (index, value) => {
    // Create a copy of the current data array
    const newData = [...data2];
    // Update the specified input in the array
    newData[index] = value;
    setData2(newData);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // setFormData((prevState) => ({
    //   ...prevState,
    //   obj: content,
    // }));
    const formDatas = {
      formData,
      data,
      data1,
      data2,
    };
    console.log(formDatas);
    try {
      const response = await fetch("/api/programsave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formDatas }),
      });
      const data = await response.json();
      if (data.message == "Form data saved successfully") {
        setFormData({
          title: "",
          Details: "",
          Duration: "",
          Faculty: "",
          FacultyName: "",
          contentHour: "",
          contentNo: "",
          wywlDetail: "",
          tag: "",
          Certificate: "",
          Price: "",
        });

        setData([{ input1: "", input2: "" }]);
        setData1([""]);
        setData2([""]);
      }
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
          <h2 className="text-lg font-semibold leading-7 text-gray-900">
            Course
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            create a course
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
                  <textarea
                    type="text"
                    name="title"
                    id="Title"
                    autoComplete="Designation"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="  Web Developer full course"
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
                concise Details
              </label>
              <div className="mt-2">
                <textarea
                  id="Details"
                  name="Details"
                  rows={3}
                  placeholder="concise details for the course"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  onChange={handleChange}
                  value={formData?.Details}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write course details.
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
                htmlFor="Price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="Price"
                  id="Price"
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
          <h2 className="text-lg font-semibold leading-7 text-gray-900">
            Content - Accordian
          </h2>

          <label
            htmlFor="Content"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            How many section/lesson
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                name="contentNo"
                type="number"
                placeholder="just fill the numbers - No. of section"
                value={formData?.contentNo}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                onChange={handleChange}
              />
            </div>
          </div>
          <label
            htmlFor="Content"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            How many hours of content
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                name="contentHour"
                type="number"
                placeholder="just fill the numbers"
                value={formData?.contentHour}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                onChange={handleChange}
              />
            </div>
          </div>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Content shown in tabular/row form in UI
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {data.map((item, index) => (
              <div className="sm:col-span-4">
                <label
                  htmlFor="Content"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Content Title
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <textarea
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      type="text"
                      placeholder="Input 1"
                      value={item.input1}
                      onChange={(e) =>
                        handleInputChange(index, "input1", e.target.value)
                      }
                    />
                  </div>
                </div>
                <label
                  htmlFor="Content"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Content Detail
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <textarea
                      type="text"
                      placeholder="Input 2"
                      value={item.input2}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      onChange={(e) =>
                        handleInputChange(index, "input2", e.target.value)
                      }
                    />
                  </div>
                </div>
                <button
                  className="py-1 px-2 border-2 rounded-xl m-2 hover:bg-slate-200"
                  type="button"
                  onClick={handleAddInputs}
                >
                  Add More
                </button>{" "}
                <button
                  className="py-1 px-2 border-2 rounded-xl m-2 hover:bg-slate-200"
                  type="button"
                  onClick={() => handleDeleteInputs(index)}
                >
                  Delete
                </button>{" "}
                {/* <button
                  className="py-1 px-2 border-2 rounded-xl m-2 hover:bg-slate-200"
                  type="button"
                  onClick={() => {
                    console.log(data);
                  }}
                >
                  show
                </button> */}
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">
            What you will learn
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Content shown in tabular/row form in UI
          </p>
          <div className="w-full my-3">
            <label
              htmlFor="Content"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              A small detail
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <textarea
                  name="wywlDetail"
                  type="text"
                  placeholder="fill the detail"
                  value={formData?.wywlDetail}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {data1.map((item, index) => (
              <div className="sm:col-span-4">
                <label
                  htmlFor="Content"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Consise detail "these are in points - for refrence please look
                  for course page"
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <textarea
                      type="text"
                      placeholder="Input"
                      value={item}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      onChange={(e) =>
                        handleInputChange1(index, e.target.value)
                      }
                    />
                  </div>
                </div>
                <button
                  className="py-1 px-2 border-2 rounded-xl m-2 hover:bg-slate-200"
                  type="button"
                  onClick={handleAddInput1}
                >
                  Add More
                </button>{" "}
                <button
                  className="py-1 px-2 border-2 rounded-xl m-2 hover:bg-slate-200"
                  type="button"
                  onClick={() => handleDeleteInput1(index)}
                >
                  Delete
                </button>{" "}
                {/* <button
                  className="py-1 px-2 border-2 rounded-xl m-2 hover:bg-slate-200"
                  type="button"
                  onClick={() => {
                    console.log(data);
                  }}
                >
                  show
                </button> */}
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">
            Course Description
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Content shown in tabular/row form in UI
          </p>
          <label
            htmlFor="Content"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            A small detail
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <textarea
                name="couseDescription"
                type="text"
                placeholder="fill the detail"
                value={formData?.couseDescription}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {data2.map((item, index) => (
              <div className="sm:col-span-4">
                <label
                  htmlFor="Content"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Consise detail "these are in points - for refrence please look
                  for course page"
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <textarea
                      type="text"
                      placeholder="Input"
                      value={item}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      onChange={(e) =>
                        handleInputChange2(index, e.target.value)
                      }
                    />
                  </div>
                </div>
                <button
                  className="py-1 px-2 border-2 rounded-xl m-2 hover:bg-slate-200"
                  type="button"
                  onClick={handleAddInput2}
                >
                  Add More
                </button>{" "}
                <button
                  className="py-1 px-2 border-2 rounded-xl m-2 hover:bg-slate-200"
                  type="button"
                  onClick={() => handleDeleteInput2(index)}
                >
                  Delete
                </button>{" "}
                {/* <button
                  className="py-1 px-2 border-2 rounded-xl m-2 hover:bg-slate-200"
                  type="button"
                  onClick={() => {
                    console.log(data);
                  }}
                >
                  show
                </button> */}
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">
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
                Tag Specify on the course head.
              </p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="tag"
                    type="radio"
                    value={"New"}
                    onChange={handleChange}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:border-0 focus:ring-0"
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
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:border-0 focus:ring-0"
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
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:border-0 focus:ring-0"
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
