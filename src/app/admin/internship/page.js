import React from 'react'
import Form from "../../../components/form"
import CardPageVisits from '../../../components/Admin/Cards/CardPageVisits'
export default function page() {
    return (
        <div className='overflow-x-hidden'>
            <div className='flex flex-col gap-1 mt-4'>
                <sapn className="text-3xl  font-bold text-white underline decoration-dotted" >

                    Manage Internship
                </sapn>
                <br />

                <CardPageVisits title={"Current Active Internship"} />
                <sapn className="text-2xl  font-bold text-gray-600 " >

                    Create Internship
                </sapn>
                <div className='max-w-2xl lg:ml-16 shadow-lg '>

                    <Form />
                </div>
            </div>

        </div>
    )
}
