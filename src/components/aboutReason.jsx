import React from 'react'
import img1 from "../public/icon/icon-and-text/02/01.png"

export default function aboutReason() {
    return (
        <section className=" py-2 px-6 md:px-16">
            <div className="flex ">
                <div className="hidden lg:flex bg-cover">
                    <img className=' object-cover' src='https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                </div>


                <div className="flex items-center justify-center bg-purple-200">
                    <div className="flex gap-4 flex-col md:w-1/2 m-6">
                        <div className="">
                            <h4 className="text-black text-5xl font-extrabold mb-4">Why chose us</h4>
                            <p className="text-black">People learning for professional
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
                                        <p className="text-gray-600 leading-8">Our mission is to provide students with the skills and knowledge they need to succeed in the workforce and create a more prosperous future for everyone.

                                        </p>
                                    </div>
                                </li>
                                <li className="flex flex-row gap-4 items-center">
                                    <div className="">
                                        <img className='max-w-[50px]' src="https://img.icons8.com/?size=512&id=XHK06L6pZveA&format=png" alt="" />
                                    </div>
                                    <div className="">
                                        <h4 className="text-gray-600 text-xl font-bold">Our Vision</h4>
                                        <p className="text-gray-600 leading-8">We believe that by working together, we can create a more educated and prosperous world.

                                        </p>
                                    </div>
                                </li>
                                <li className="flex flex-row gap-4 items-center">
                                    <div className="">
                                        <img className='max-w-[50px]' src="https://img.icons8.com/?size=512&id=119287&format=png" alt="" />
                                    </div>
                                    <div className="">
                                        <h4 className="text-gray-600 text-xl font-bold">Our Goal</h4>
                                        <p className="text-gray-600 leading-8">We have impacted the lives of thousands of students and teachers, and we are committed to continuing to make a positive difference in the world.
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
