'use client'


import { useState } from "react";


import toast from 'react-hot-toast';
import { TiTick } from "react-icons/ti"
import DotLoader from "react-spinners/DotLoader";


export default function Home({formData}) {
      let [loading, setLoading] = useState(false);
    const [color, setColor] = useState(false)
  
const handleSubmit = async () => {
      
        try {
              
            
            const response = await fetch('/api/courseData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const resWhichSave = await response.json();
            if(resWhichSave.message === "User You have already Registered for the Course"){
                setLoading(false)
                toast("You have already Registered for the course")
            }
            if(resWhichSave.message === "Form data saved successfully"){
                setLoading(false)
                toast("Good Wishes, Registration successfull")
            }
            console.log("hell",resWhichSave);
            // Handle success message or redirect
        } catch (error) {
            console.log('Failed to submit form:', error);
            // Handle error
        }
    };
   
    const makePayment = async () => {
        console.log(formData)
        setLoading(true)

        console.log("here...");
        const check = await fetch('/api/checkUserForCourse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const dataToCheck = await check.json();
            console.log(dataToCheck)
        
        if(dataToCheck.message == "User You have already Registered for the Course"){
            toast("You have already Registered for the course")
            setLoading(false)
            return;
        }
        const res = await initializeRazorpay();

        if (!res) {
            alert("Payment Failed to load");
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
                toast("Please wait, registring you to the couser....")
                handleSubmit()
                // Validate payment at server - using webhooks is a better idea.
                // toast(response.razorpay_payment_id);
                // toast(response.razorpay_order_id);
                // toast(response.razorpay_signature);
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
            className=""
        >
           {loading ? <DotLoader color="#FFFFFF" size={26}/> : "Purchase Now"} 
        </button>

    );
}