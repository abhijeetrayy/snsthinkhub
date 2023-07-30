import Teaching from "../public/svg/features/teaching.svg";
import Certificates from "../public/svg/features/certificate.svg";
import Job from "../public/svg/features/job.svg";
import Course from "../public/svg/features/couser.svg";
import Campus from "../public/svg/features/campus.svg";
import Expert from "../public/svg/features/expert.svg";
import Image from "next/image";

const features = [
  {
    title: "Personalized courses",
    icon: Course,
    details:
      "Personalized courses designed specifically according to your requirements.",
  },
  {
    title: "Expert educators",
    icon: Expert,
    details:
      "Our educators are leading corporate elites who equip you with all the skills you need to succeed.",
  },
  {
    title: "Certification",
    icon: Certificates,
    details: "Add industry recognized certificates to your resume.",
  },
  {
    title: "Workshops and webinars",
    icon: Teaching,
    details:
      "Engage in our interactive workshops and webinars designed to provide real-industry experience.",
  },
  {
    title: "Campus programs",
    icon: Campus,
    details:
      "With our university wide training programs, elevate your career prospects while studying.",
  },
  {
    title: "Placements and internship",
    icon: Job,
    details:
      "S&S prepares you and provides placements and internships in the world leading companies. ",
  },
];

const Statistic = () => {
  return (
    <div className="px-2 py-3 w-full flex justify-center ">
      <section className="bg-white max-w-6xl">
        <div className="py-8 px-4 mx-auto sm:py- lg:px-6">
          <div className="w-full flex flex-col  md:items-center md:text-center  mb-8 lg:mb-16">
            <div className="max-w-6xl">
              <hr className="border border-r-gray-950" />
              <h2 className="mb-4 mt-6 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-700 ">
                360* career guidence and mentorship
              </h2>
              <p className="text-gray-600 sm:text-sm ">
                What makes S&S different ?
              </p>
            </div>
          </div>
          <div className="max-w-[900px] space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-7 md:space-y-0 justify-center items-center">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col border  h-full border-indigo-400 p-3 rounded-md  "
              >
                <div className="flex mb-4 w-fit rounded-lg bg-primary-100 border  overflow-clip ">
                  <Image
                    className="w-16 h-16 p-2"
                    src={item.icon}
                    width={24}
                    height={24}
                    alt=""
                    style={{ color: "blue" }}
                  />
                </div>

                <h3 className="mb-2 text-lg font-bold text-gray-700 ">
                  {item.title}
                </h3>
                <h4 className="text-gray-500 text-sm ">{item.details}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-indigo-500 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-700 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d5589eeb-3fca-4f01-ac3e-983224745704"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-gray-500">What is</span>
          </span>{" "}
          <span className="">S&SThinkHub</span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We offer a variety of resources to support our students' learning.
          These resources include online learning modules, tutoring, and{" "}
          <span className="text-gray-500 font-bold">career counseling.</span>
        </p>
      </div>
      <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border shadow-xl rounded lg:mb-8 lg:max-w-4xl group hover:shadow-2xl">
        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="relative flex flex-col items-center h-full py-10 duration-300 bg-white rounded-sm transition-color sm:items-stretch sm:flex-row ">
          <div className="flex-1 px-12 py-8 text-center">
            <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
              Best
            </h6>
            <p className="text-center md:text-base">
              Industry elit{" "}
              <span className="text-indigo-500 font-bold">Courses</span> InHouse
              S&SThinkHub.
            </p>
          </div>
          <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-gray-300 group-hover:scale-110 sm:h-auto sm:w-1" />
          <div className="flex-1 px-12 py-8 text-center">
            <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl mb-1">
              Opportunity
            </h6>
            <p className="text-center md:text-base">
              Our student and Team work together and reach potential career and{" "}
              <span className="text-indigo-500 font-bold">Internship</span>.
            </p>
          </div>
        </div>
      </div>
      <p className="mx-auto mb-4 text-gray-600 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">
        In addition to our programs for students, we also offer educational
        solutions for schools. We believe that by working with schools, we can
        help to ensure that all students have access to the high-quality
        education they need to succeed.
      </p> */}
    </div>
  );
};

export default Statistic;
