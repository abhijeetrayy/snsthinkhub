import "../css/background.css"

const AboutHeader = () => {
    return (
        <div class="relative bg3 pt-[120px] pb-[110px] lg:pt-[150px] mb-8">
            <div class="container mx-auto">
                <div class="flex flex-wrap justify-around md:flex-row">
                    <div class="group px-4 max-w-[700px] bg-cover  bg-indigo-600 p-6 rounded-lg shadow-md m-4  ">
                        <div class="hero-content flex justify-center flex-col duration-700 group-hover:px-8">
                            <h1
                                class="text-white mb-6 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]"
                            >
                                About Us - <br />
                                Our
                                Approach
                            </h1>
                            <p class="text-md body-color mb-4 text-lg text-white leading-8">
                                We believe that a holistic approach to education is essential for students to succeed in today's competitive job market. Our programs are designed to provide students with the skills and knowledge they need to be successful in their chosen field, while also developing their critical thinking, problem-solving, and communication skills. </p>


                        </div>
                    </div>
                    {/* <div class="hidden px-4 lg:block lg:w-1/12"></div> */}
                    <div class=" px-4 w-fit">
                        <div class="lg:ml-auto lg:text-right">
                            <div class="relative z-10  pt-11 lg:pt-0">
                                <img
                                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-01.png"
                                    alt="hero"
                                    class="max-w-full lg:ml-auto"
                                />
                                <span class="absolute -left-8 -bottom-8 z-[-1]">
                                    <svg
                                        width="93"
                                        height="93"
                                        viewBox="0 0 93 93"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#000000" />
                                        <circle cx="2.5" cy="24.5" r="2.5" fill="#000000" />
                                        <circle cx="2.5" cy="46.5" r="2.5" fill="#000000" />
                                        <circle cx="2.5" cy="68.5" r="2.5" fill="#000000" />
                                        <circle cx="2.5" cy="90.5" r="2.5" fill="#000000" />
                                        <circle cx="24.5" cy="2.5" r="2.5" fill="#000000" />
                                        <circle cx="24.5" cy="24.5" r="2.5" fill="#000000" />
                                        <circle cx="24.5" cy="46.5" r="2.5" fill="#000000" />
                                        <circle cx="24.5" cy="68.5" r="2.5" fill="#000000" />
                                        <circle cx="24.5" cy="90.5" r="2.5" fill="#000000" />
                                        <circle cx="46.5" cy="2.5" r="2.5" fill="#000000" />
                                        <circle cx="46.5" cy="24.5" r="2.5" fill="#000000" />
                                        <circle cx="46.5" cy="46.5" r="2.5" fill="#000000" />
                                        <circle cx="46.5" cy="68.5" r="2.5" fill="#000000" />
                                        <circle cx="46.5" cy="90.5" r="2.5" fill="#000000" />
                                        <circle cx="68.5" cy="2.5" r="2.5" fill="#000000" />
                                        <circle cx="68.5" cy="24.5" r="2.5" fill="#000000" />
                                        <circle cx="68.5" cy="46.5" r="2.5" fill="#000000" />
                                        <circle cx="68.5" cy="68.5" r="2.5" fill="#000000" />
                                        <circle cx="68.5" cy="90.5" r="2.5" fill="#000000" />
                                        <circle cx="90.5" cy="2.5" r="2.5" fill="#000000" />
                                        <circle cx="90.5" cy="24.5" r="2.5" fill="#000000" />
                                        <circle cx="90.5" cy="46.5" r="2.5" fill="#000000" />
                                        <circle cx="90.5" cy="68.5" r="2.5" fill="#000000" />
                                        <circle cx="90.5" cy="90.5" r="2.5" fill="#000000" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader