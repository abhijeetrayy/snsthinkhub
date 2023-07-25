import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import AboutReason from "../components/aboutReason";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import Team from "../components/team";
import Header from "../components/header";
import Features from "../components/features";
import Card from "../components/card";
import ProgramBuy from "../components/programBuy";
import ContactUs from "../components/contactus";
import Link from "next/link";
import "../css/background.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="w-fll flex  justify-center">
        <div className="max-w-3xl my-3">
          <div className="flex w-full justify-between mb-10">
            <div className="animate-spin-slow hidden md:flex">
              <svg
                width="80px"
                height="80px"
                viewBox="0 0 1024 1024"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M832 384l8 1.6-1.6 8 1.6 3.2-4.8 3.2-44.8 161.6-16-4.8 40-147.2-260.8 144-158.4 284.8-11.2-6.4-6.4 6.4-176-176 11.2-11.2 163.2 163.2 147.2-265.6-294.4-297.6 11.2-11.2v-8h9.6l3.2-3.2 3.2 3.2L664 208l1.6 16-395.2 22.4 278.4 278.4 276.8-153.6 6.4 12.8z"
                  fill="#6366f1"
                />
                <path
                  d="M896 384c0 35.2-28.8 64-64 64s-64-28.8-64-64 28.8-64 64-64 64 28.8 64 64z m-656-32c-62.4 0-112-49.6-112-112s49.6-112 112-112 112 49.6 112 112-49.6 112-112 112z m304 336c-80 0-144-64-144-144s64-144 144-144 144 64 144 144-64 144-144 144z m-224 144c0-35.2 28.8-64 64-64s64 28.8 64 64-28.8 64-64 64-64-28.8-64-64z m-144-176c0-17.6 14.4-32 32-32s32 14.4 32 32-14.4 32-32 32-32-14.4-32-32z m448-440c0-22.4 17.6-40 40-40s40 17.6 40 40-17.6 40-40 40-40-17.6-40-40zM736 560c0-27.2 20.8-48 48-48s48 20.8 48 48-20.8 48-48 48-48-20.8-48-48z"
                  fill="#6366f1"
                />
              </svg>
            </div>
          </div>
          <span
            style={{ fontFamily: `"Nano Sans", sans-serif` }}
            className=" text-xl md:text-2xl font-medium  text-gray-800 text-center flex  "
          >
            " From streamlined practical courses to job-ready certifications,
            high-paying placements and hands-on internships, S&S provides the
            most sought after skills you need to succeed "
          </span>
          <hr className="mt-4 h-[2px] bg-gray-400 rounded-md" />
        </div>
      </div>
      <Card />
      <div className=" w-full flex items-center justify-center">
        <Link
          href={"/courses"}
          className="text-indigo-500 py-3 px-8 border-2 border-gray-600 rounded-md hover:border-indigo-400"
        >
          More courses {"->"}
        </Link>
      </div>
      <Features />
      {/* <ProgramBuy /> */}

      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      ></SectionTitle>
      <Video />
      {/* <AboutReason /> */}
      <Team />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our Student said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <ContactUs />
    </>
  );
};

export default Home;
