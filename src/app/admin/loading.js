'use client'

import { Bars } from "react-loader-spinner";
import React from 'react'


export default function loading() {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <Bars
                type="Puff"
                color="gray"
                height={100}
                width={100}
                timeout={3000}
            />

        </div>
    )
}
