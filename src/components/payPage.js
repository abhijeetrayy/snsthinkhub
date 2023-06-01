'use client'

import { useState } from "react";


import toast from 'react-hot-toast';
import { TiTick } from "react-icons/ti"


export default function Home() {
    const [color, setColor] = useState(false)
    const notify = () => toast(<><TiTick className="text-green-400 text-lg" /> Here is your toast.</>);
    const makePayment = async () => {
        setColor(false)
        console.log("here...");
        const res = await initializeRazorpay();

        if (!res) {
            alert("Razorpay SDK Failed to load");
            return;
        }

        // Make API call to the serverless API
        const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
            t.json()
        );

        console.log(data);
        var options = {
            key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
            name: "SNSTHINKHUB",
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            description: "Thankyou",
            image: "",
            handler: function (response) {
                // Validate payment at server - using webhooks is a better idea.
                toast(response.razorpay_payment_id);
                toast(response.razorpay_order_id);
                toast(response.razorpay_signature);
            },
            prefill: {
                name: "SnS THINKHUB",
                email: "snsthinkhub@gmail.com",
                contact: "9879879897",
            },
        };

        const paymentObject = new window.Razorpay(options);
        setColor(true)
        paymentObject.open();
    };
    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            // document.body.appendChild(script);

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };
    return (
        <div>

            <main className="font-Inter h-screen overflow-auto bg-gradient-to-tr from-[#252B30] to-[#191C22]">





                <div className="relative z-10 flex flex-col md:flex-row mt-10 items-center  max-w-6xl justify-evenly mx-auto">
                    <div className="md:w-1/3 mb-20 md:mb-0 mx-10">
                        <h1 className=" text-white font-bold text-5xl mb-10">
                            SnSthinkHub
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                payments
                            </span>{" "}

                        </h1>
                        <p className="text-sm text-gray-300 font-light tracking-wide w-[300px] mb-10">

                        </p>
                        <div className="bg-gradient-to-r from-[#3e4044] to-[#1D2328] p-[1px] rounded-md mb-4">
                            <button
                                onClick={makePayment}
                                className="bg-gradient-to-r from-[#2E3137] to-[#1D2328] rounded-md w-full py-4 shadow-xl drop-shadow-2xl text-gray-300 font-bold"
                            >
                                Purchase Now!
                            </button>
                        </div>
                        <div className="bg-gradient-to-r from-[#3e4044] to-[#1D2328] p-[1px] rounded-md">
                            {color ? <button className="bg-gradient-to-r from-[#1D2328] to-[#1D2328] rounded-md w-full py-4 shadow-sm drop-shadow-sm text-gray-400 font-light">
                                Read Blog
                            </button> : <button className="bg-gradient-to-r from-[#ffffff] to-[#fe0973] rounded-md w-full py-4 shadow-sm drop-shadow-sm text-gray-400 font-light">
                                Read Blog
                            </button>}
                        </div>
                    </div>
                    {/* <div className="w-2/3 bg-white flex-shrink-0  relative"> */}
                    <img
                        className="w-full md:w-[36rem] h-full"
                        alt="stripe payment from undraw"
                        src="/payments.svg"
                    />
                    {/* </div> */}
                </div>

            </main>
        </div>
    );
}