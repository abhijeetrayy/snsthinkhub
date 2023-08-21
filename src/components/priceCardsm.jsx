"use client";
import { useState } from "react";

export default function priceCardsm({ data, title }) {
  const [value, setValue] = useState(true);
  const [style, setStyle] = useState("");

  function fullview() {
    if (value == false) {
      setValue(true);
    } else setValue(false);
  }
  return (
    <div className=" w-64 p-4  bg-indigo-500 shadow-lg rounded-2xl dark:bg-gray-800 break-inside-avoid mb-10">
      <div className="flex items-center justify-between text-white">
        <p className="text-gray-900 w-full bg-white rounded-lg p-3 text-xl font-bold">
          {title}
        </p>
      </div>
      <p className="mt-4 text-white text-md">Includes :</p>
      <ul
        className={`w-full mt-6 mb-6 text-sm text-white  ${value
          ? "overflow-visible max-h-full h-full"
          : "overflow-clip h-full max-h-60"
          } `}
      >
        {data.map((item, index) => (
          <li key={index} className="mb-3 flex items-start ">
            <div>
              <svg
                className=" mr-2 w-6"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
            </div>
            <div>{item}</div>
          </li>
        ))}
      </ul>
      <div>
        <p className={` text-xs text-white ${value ? "block" : "hidden"}`}>
          etc.
        </p>
      </div>
      {/* <button
        className={`group text-white ${value ? "hidden" : "block"}`}
        onClick={fullview}
      >
        {" "}
        read more <span className="group-hover:ml-3 duration-300">{"->"}</span>
      </button> */}
      {/* <button
        type="button"
        className="w-full px-3 py-3 text-sm text-indigo-500 bg-white rounded-lg shadow hover:bg-gray-100 "
      >
        Choose plan
      </button> */}
    </div>
  );
}
