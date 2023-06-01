import React from 'react'
import img1 from "../public/icon/icon-and-text/02/01.png"

export default function aboutReason() {
    return (
        <section className="p-6">
            <div className="flex">
                <div className="hidden md:flex bg-cover">
                    <img className=' object-cover' src='https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                </div>


                <div className="flex items-center justify-center bg-purple-200">
                    <div className="flex gap-4 flex-col md:w-1/2 m-6">
                        <div className="">
                            <h4 className="text-black text-5xl font-extrabold mb-4">Why chose us</h4>
                            <p className="text-black">87% of people learning for professional
                                development
                                report
                                career benefits</p>
                        </div>

                        <div className="">
                            <ul className="flex flex-col gap-5">

                                <li className="flex flex-row gap-4 items-center">
                                    <div className="">
                                        <img className='max-w-[50px]' src="https://img.icons8.com/?size=512&id=e15fFKUU7Zwv&format=png" alt="" />
                                    </div>
                                    <div className="">
                                        <h4 className="text-gray-600 text-xl font-bold">Our Mission</h4>
                                        <p className="text-gray-600 leading-8">BSB mission is to achieve excellence in
                                            business
                                            through excellent services and new scopes for world-class
                                            education by realizing dreams of our clients within their
                                            capacities.

                                        </p>
                                    </div>
                                </li>
                                <li className="flex flex-row gap-4 items-center">
                                    <div className="">
                                        <img className='max-w-[50px]' src="https://img.icons8.com/?size=512&id=119287&format=png" alt="" />
                                    </div>
                                    <div className="">
                                        <h4 className="text-gray-600 text-xl font-bold">Our Vision</h4>
                                        <p className="text-gray-600 leading-8">Our Vision is to be the leading student
                                            consultancy
                                            and recruiting agency of the world by satisfying our clients in
                                            all aspects.

                                        </p>
                                    </div>
                                </li>
                                <li className="flex flex-row gap-4 items-center">
                                    <div className="">
                                        <img className='max-w-[50px]' src="https://img.icons8.com/?size=512&id=119287&format=png" alt="" />
                                    </div>
                                    <div className="">
                                        <h4 className="text-gray-600 text-xl font-bold">Our Goal</h4>
                                        <p className="text-gray-600 leading-8">Create opportunities of abroad higher study and
                                            improve significantly family & position and national development
                                            and to contribute to achieve Bangladesh as a middle income
                                            country.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
