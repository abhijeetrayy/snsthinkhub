
import React from 'react'
import { FiCloudRain } from "react-icons/fi"


export default function loading() {
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className="m-10 text-6xl animate-pulse text-gray-700 flex justify-center items-center">
                <FiCloudRain />
            </div>

        </div>
    )
}
