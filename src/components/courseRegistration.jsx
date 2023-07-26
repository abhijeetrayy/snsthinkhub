"use client";
import { useState } from "react";
import PayButton from "./payPage";
export default function registaration() {
  const [click, setClick] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    University: "",
    Year: "",
    Course: "",
    CourseId: "100001",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  return (
    <>
      <div className="transition delay-100 duration-200 ease-out w-full">
        {click ? (
          <div className="w-full p-3 flex gap-3 flex-col transition delay-200 ease-in-out">
            <div className="">
              <label
                htmlFor="Name"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  value={formData.Name}
                  onChange={handleChange}
                  required="true"
                  autoComplete="Name"
                  placeholder="Abhijeet Ray"
                  className="block w-full rounded-md border-0 pl-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="Email"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="Email"
                  name="Email"
                  type="email"
                  value={formData.Email}
                  onChange={handleChange}
                  required="true"
                  autoComplete="Email"
                  placeholder="abc@gmail.com"
                  className="block w-full rounded-md border-0 pl-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="Phone"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2">
                <input
                  id="Phone"
                  name="Phone"
                  type="number"
                  value={formData.Phone}
                  onChange={handleChange}
                  required="true"
                  autoComplete="Phone"
                  placeholder="+91 9876543211"
                  className="block w-full rounded-md border-0 pl-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="University"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                University
              </label>
              <div className="mt-2">
                <input
                  id="College"
                  name="College"
                  type="text"
                  value={formData.College}
                  onChange={handleChange}
                  required="true"
                  autoComplete="College"
                  placeholder="Delhi University"
                  className="block w-full rounded-md border-0 pl-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="Course"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Course
              </label>
              <div className="mt-2">
                <input
                  id="Course"
                  name="Course"
                  type="text"
                  value={formData.Course}
                  onChange={handleChange}
                  required="true"
                  autoComplete="Course"
                  placeholder="B-tech CSE"
                  className="block w-full rounded-md border-0 pl-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="Year"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Year
              </label>
              <div className="mt-2">
                <input
                  id="Year"
                  name="Year"
                  type="text"
                  value={formData.Year}
                  onChange={handleChange}
                  required="true"
                  autoComplete="Year"
                  placeholder="2025-2029"
                  className="block w-full rounded-md border-0 pl-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="">
              <PayButton formData={formData} />
            </div>
          </div>
        ) : (
          <button
            className=" transition-all bg-indigo-600 rounded-md w-full py-4 shadow-xl drop-shadow-2xl text-white font-bold hover:bg-indigo-700"
            onClick={() => setClick(true)}
          >
            Enrol Now
          </button>
        )}
      </div>
    </>
  );
}
