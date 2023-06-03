import React from "react";

// components

export default function CardPageVisits({ title }) {
  return (
    <>
      <section class="items-center lg:flex bg-white  lg:h-screen font-poppins  ">
        <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div class="pt-4 rounded shadow bg-stone-100 ">
            <div class="flex flex-wrap items-center justify-between px-6 pb-4 border-b ">
              <h2 class="mb-4 text-xl font-bold md:mb-0 ">List of document</h2>
              <div class="flex px-6 py-2 mb-4 border border-gray-600 rounded-md md:mb-0 ">

                <button
                  class="flex items-center text-gray-700  ">
                  <span class="mr-2 text-xs ">Go</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="p-4 overflow-x-auto">
              <table class="w-full table-auto">
                <thead>
                  <tr class="text-sm text-left text-gray-500 ">
                    <th class="flex items-center px-6 pb-3 font-medium ">

                      <span>Name</span>
                    </th>
                    <th class="px-6 pb-3 font-medium ">Owner </th>
                    <th class="px-6 pb-3 font-medium">Created </th>
                    <th class="px-6 pb-3 font-medium">Activity </th>
                    <th class="px-6 pb-3 font-medium"> Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-sm bg-white  ">
                    <td class="flex items-center px-6 py-5 font-medium">

                      <p class="">General Purpose Report</p>
                    </td>
                    <td class="px-6 py-5 font-medium ">Branklin Ferdnaz</td>
                    <td class="px-6 py-5 font-medium ">13 jan 2022</td>
                    <td class="px-6 py-5 font-medium">
                      <span class="text-blue-400 ">General</span>
                    </td>
                    <td class="flex items-center px-6 py-5 ">
                      <a href="#"
                        class="font-medium text-blue-600 hover:text-blue-500  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                          fill="currentColor" class="w-4 h-4 mr-3 bi bi-pencil-square"
                          viewBox="0 0 16 16">
                          <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                      </a>
                      <a href="#"
                        class="font-medium text-red-600 hover:text-red-500  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                          fill="currentColor" class="w-4 h-4 bi bi-trash-fill" viewBox="0 0 16 16">
                          <path
                            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr class="text-sm  ">
                    <td class="flex items-center px-6 py-5 font-medium">

                      <p class="">Monthly Report</p>
                    </td>
                    <td class="px-6 py-5 font-medium ">Kathryn Pearson</td>
                    <td class="px-6 py-5 font-medium ">14 jan 2022</td>
                    <td class="px-6 py-5 font-medium">
                      <span class="text-blue-400 ">Compliance</span>
                    </td>
                    <td class="flex items-center px-6 py-5 ">
                      <a href="#"
                        class="font-medium text-blue-600 hover:text-blue-500  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                          fill="currentColor" class="w-4 h-4 mr-3 bi bi-pencil-square"
                          viewBox="0 0 16 16">
                          <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                      </a>
                      <a href="#"
                        class="font-medium text-red-600 hover:text-red-500  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                          fill="currentColor" class="w-4 h-4 bi bi-trash-fill" viewBox="0 0 16 16">
                          <path
                            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr class="text-sm bg-white  ">
                    <td class="flex items-center px-6 py-5 font-medium">

                      <p class="">Client Status Report</p>
                    </td>
                    <td class="px-6 py-5 font-medium ">Nicole West</td>
                    <td class="px-6 py-5 font-medium ">15 jan 2022</td>
                    <td class="px-6 py-5 font-medium">
                      <span class="text-blue-400 ">Security</span>
                    </td>
                    <td class="flex items-center px-6 py-5 ">
                      <a href="#"
                        class="font-medium text-blue-600 hover:text-blue-500  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                          fill="currentColor" class="w-4 h-4 mr-3 bi bi-pencil-square"
                          viewBox="0 0 16 16">
                          <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                      </a>
                      <a href="#"
                        class="font-medium text-red-600 hover:text-red-500  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                          fill="currentColor" class="w-4 h-4 bi bi-trash-fill" viewBox="0 0 16 16">
                          <path
                            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr class="text-sm  ">
                    <td class="flex items-center px-6 py-5 font-medium">

                      <p class="">Work Flow Management</p>
                    </td>
                    <td class="px-6 py-5 font-medium ">Peter Ferdnaz</td>
                    <td class="px-6 py-5 font-medium ">17 jan 2022</td>
                    <td class="px-6 py-5 font-medium">
                      <span class="text-blue-400 ">Training</span>
                    </td>
                    <td class="flex items-center px-6 py-5 ">
                      <a href="#"
                        class="font-medium text-blue-600 hover:text-blue-500  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                          fill="currentColor" class="w-4 h-4 mr-3 bi bi-pencil-square"
                          viewBox="0 0 16 16">
                          <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                      </a>
                      <a href="#"
                        class="font-medium text-red-600 hover:text-red-500  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                          fill="currentColor" class="w-4 h-4 bi bi-trash-fill" viewBox="0 0 16 16">
                          <path
                            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="flex justify-end pt-4 mt-4 border-t ">
                <nav aria-label="page-navigation">
                  <ul class="flex list-style-none">
                    <li class="page-item disabled ">
                      <a href="#"
                        class="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md  hover:text-gray-100 hover:bg-blue-600">Previous
                      </a>
                    </li>
                    <li class="page-item ">
                      <a href="#"
                        class="relative block px-3 py-1.5 mr-3 text-base hover:text-blue-700 transition-all duration-300 hover:bg-blue-200   rounded-md text-gray-100 bg-blue-600">1
                      </a>
                    </li>
                    <li class="page-item ">
                      <a href="#"
                        class="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300   hover:bg-blue-100 rounded-md mr-3  ">2
                      </a>
                    </li>
                    <li class="page-item ">
                      <a href="#"
                        class="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300   hover:bg-blue-100 rounded-md mr-3 ">3
                      </a>
                    </li>
                    <li class="page-item ">
                      <a href="#"
                        class="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300   hover:bg-blue-100 rounded-md ">Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
