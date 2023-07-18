'use client'
import React from 'react'
import {useState} from "react"
import toast from "react-hot-toast"
import DotLoader from "react-spinners/DotLoader";

export default function courseCta({ title }) {
     let [loading, setLoading] = useState(false);
     const [formData, setFormData] = useState({
       
        
        Email: '',
        fromWhere: title
        
        
    });

    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
         
    };

    const handleSubmit = async () => {
      
        try {
            setLoading(true)
             
              console.log(formData)
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

           
            if(data.message === "Form data saved successfully"){
               
                toast("Good Wishes, successfully send")
            }
            setLoading(false)
            console.log("hell",data);
            // Handle success message or redirect
        } catch (error) {
            console.log('Failed to submit form:', error);
            // Handle error
        }
    };
    return (

        <section className=" mx-auto bg-gray-800">
            <div className="flex flex-col items-center px-8 py-20 lg:flex lg:justify-between sm:flex-row">
                <div className="sm:inline-block sm:pb-9">
                    <h3 className="text-3xl font-bold text-gray-100">
                        Get Notified New {title}
                    </h3>
                    <p className="mt-2 text-gray-100 text-md">
                        We have professional alliance's with leading Universities and Colleges around the World.
                    </p>
                </div>
                <div className='flex flex-col gap-4 items-center sm:flex-row mt-3 md:mt-0'>

                    <input type="email" name="Email" value={formData.Email} onChange={handleChange} className='z-50 p-2 h-12 ring-2 ring-indigo-700 focus:ring-3 w-48 rounded-lg mx-3  sm:w-56 md:w-64  inline-block' placeholder='abc@gmail.com' />
                    <button
                        onClick={()=> handleSubmit()}
                        className="z-50 block px-8 py-2  text-lg font-medium text-center text-white bg-indigo-800 rounded "
                        href="#"
                    >{loading? <DotLoader color="#FFFFFF" size={26}/> : "Send"}
                    </button>
                </div>

                

            </div>
        </section>

    )
}
