"use client";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { TiTick } from "react-icons/ti";
import DotLoader from "react-spinners/DotLoader";

export default function Home(props) {
  let [loading, setLoading] = useState(false);
  const [color, setColor] = useState(false);
  const [button, setButton] = useState("loading...");

  useEffect(() => {
    const checking = async () => {
      const check = await fetch("/api/checkUserForCourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props),
      });

      const dataToCheck = await check.json();
      console.log(dataToCheck);

      if (
        dataToCheck.message == "User You have already Registered for the Course"
      ) {
        setButton("Registered");
        console.log(button);
      } else {
        setButton("Purchase Now");
        console.log(button);
      }
    };
    checking();
  });

  const handleSubmit = async (dataset) => {
    try {
      const response = await fetch("/api/courseData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataset),
      });
      const resWhichSave = await response.json();
      console.log(resWhichSave);
      if (resWhichSave.message === "Form data saved successfully") {
        setLoading(false);
        toast("Good Wishes, Registration successfull 🎉");
      } else {
        setLoading(false);
        toast(
          "something went worng, please contact and send the requeset on the contact-us page.📞"
        );
      }

      // Handle success message or redirect
    } catch (error) {
      console.log("Failed to submit form:", error);
      // Handle error
    }
  };

  //   function checking() {
  //     if (formData.name == "") {
  //       toast("Please fill the Name");
  //       setLoading(false);
  //     } else {
  //       if (formData.email == "") {
  //         toast("Please fill the Email");
  //         setLoading(false);
  //       } else {
  //         if (formData.Course == "") {
  //           toast("Please fill the Couse");
  //           setLoading(false);
  //         } else {
  //           if (formData.University == "") {
  //             toast("Please fill the Universiy");
  //             setLoading(false);
  //           } else {
  //             if (formData.Phone == "") {
  //               toast("Please fill the Phone");
  //               setLoading(false);
  //             } else {
  //               if (formData.Year == "") {
  //                 toast("Please fill the year of graduation");
  //                 setLoading(false);
  //               } else {
  //                 makePayment();
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  const makePayment = async () => {
    console.log(props.formData);
    setLoading(true);

    console.log("here...");
    const check = await fetch("/api/checkUserForCourse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });

    const dataToCheck = await check.json();
    console.log(dataToCheck);

    if (
      dataToCheck.message == "User You have already Registered for the Course"
    ) {
      toast("You have already Registered for the course");
      setLoading(false);
      return;
    }
    const res = await initializeRazorpay();

    if (!res) {
      alert("Payment Failed to load");
      setLoading(false);
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
        toast("Please wait, registring you to the couse.... 😊");
        const dataset = {
          userdata: props.formData,
          courseId: props.CourseId,
          payData: response,
          price: data.amount / 100,
          name: props.CourseName,
        };
        handleSubmit(dataset);
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
    setColor(true);
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
      onClick={() => {
        if (button == "Purchase Now") {
          makePayment();
        }
        if (button == "Registered") {
          toast("you have been already registered 🎉");
        }
      }}
      className=" transition-all bg-indigo-600 rounded-md w-full py-4 shadow-xl drop-shadow-2xl text-white font-bold hover:bg-indigo-700"
    >
      {loading ? <DotLoader color="#FFFFFF" size={26} /> : button}
    </button>
  );
}
