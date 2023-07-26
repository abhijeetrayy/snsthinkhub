import React from "react";
import Link from "next/link";

export default function product() {
  return (
    <>
      <section className="flex items-center bg-gray-200 lg:h-screen font-poppins ">
        <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
            <div className="relative bg-white rounded-2xl">
              <div className="w-full h-56 px-4 pt-4">
                <img
                  src="https://i.postimg.cc/fW3hVdhv/pexels-rodnae-productions-7648047.jpg"
                  alt=""
                  className="object-cover w-full h-full rounded-lg "
                />
              </div>
              <div>
                <div className="p-4">
                  <div className="mb-3">
                    <a href="">
                      <h2 className="text-2xl font-semibold">
                        Lorem ipsum dor amet ispiciousas
                      </h2>
                    </a>
                  </div>
                  <p className="pb-16 text-base font-base text-gray-700">
                    We will take you different places of nepal and will
                    translate japanese to english entertain ...
                  </p>
                </div>
                <div className="flex items-center justify-end ">
                  <a
                    href="#"
                    className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-indigo-600 rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100"
                  >
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            <div className="relative bg-white rounded-2xl">
              <div className="w-full h-56 px-4 pt-4 ">
                <img
                  src="https://i.postimg.cc/s2tvtrPF/first.jpg"
                  alt=""
                  className="object-cover w-full h-full rounded-lg "
                />
              </div>
              <div>
                <div className="p-4">
                  <div className="mb-3">
                    <a href="">
                      <h2 className="text-2xl font-semibold">
                        Lorem ipsum dor amet ispiciousas
                      </h2>
                    </a>
                  </div>
                  <p className="pb-16 text-base font-base text-gray-700">
                    We will take you different places of nepal and will
                    translate japanese to english entertain ...
                  </p>
                </div>
                <div className="flex items-center justify-end ">
                  <a
                    href="#"
                    className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-indigo-600 rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100"
                  >
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            <div className="relative bg-white rounded-2xl">
              <div className="w-full h-56 px-4 pt-4 ">
                <img
                  src="https://i.postimg.cc/Qdhgyp8g/second.jpg"
                  alt=""
                  className="object-cover w-full h-full rounded-lg "
                />
              </div>
              <div>
                <div className="p-4">
                  <div className="mb-3">
                    <a href="">
                      <h2 className="text-2xl font-semibold">
                        Lorem ipsum dor amet ispiciousas
                      </h2>
                    </a>
                  </div>
                  <p className="pb-16 text-base font-base text-gray-700">
                    We will take you different places of nepal and will
                    translate japanese to english entertain ...
                  </p>
                </div>
                <div className="flex items-center justify-end ">
                  <a
                    href="#"
                    className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-indigo-600 rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100"
                  >
                    Find out more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full px-4 mb-4 md:w-96 ">
        <div className="p-6 border border-blue-100 bg-gray-50 md:p-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-700">
            Order Summary
          </h2>
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 ">
            <span className="text-gray-700">Subtotal</span>
            <span className="text-xl font-bold text-gray-700 ">$100</span>
          </div>
          <div className="flex items-center justify-between pb-4 mb-4 ">
            <span className="text-gray-700 ">Shipping</span>
            <span className="text-xl font-bold text-gray-700 ">Free</span>
          </div>
          <div className="flex items-center justify-between pb-4 mb-4 ">
            <span className="text-gray-700">Order Total</span>
            <span className="text-xl font-bold text-gray-700">$99.00</span>
          </div>
          <h2 className="text-lg text-gray-500">We offer:</h2>
          <div className="flex items-center gap-2 mb-4 ">
            <a href="#">
              <img
                src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png"
                alt=""
                className="object-cover h-16 w-26"
              />
            </a>
            <a href="#">
              <img
                src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
                alt=""
                className="object-cover h-16 w-26"
              />
            </a>
            <a href="#">
              <img
                src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
                alt=""
                className="object-cover h-16 w-26"
              />
            </a>
          </div>
          <div className="flex items-center justify-between ">
            <button className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
