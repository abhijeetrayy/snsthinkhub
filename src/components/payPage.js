'use client'

import { useSession } from "next-auth/react";
import { useState } from "react";


import toast from 'react-hot-toast';
import { TiTick } from "react-icons/ti"


export default function Home() {
    const [color, setColor] = useState(false)
    const notify = () => toast(<><TiTick className="text-green-400 text-lg" /> Here is your toast.</>);
    const { data: session } = useSession()
    const makePayment = async () => {

        console.log("here...");
        if (!session) {
            toast("Please LogIn First")
            return
        }
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

        <button
            onClick={makePayment}
            className="bg-indigo-600 rounded-md w-full py-4 shadow-xl drop-shadow-2xl text-white font-bold hover:bg-indigo-700"
        >
            Purchase Now
        </button>

    );
}