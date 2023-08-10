import SectionTitle from "../../components/sectionTitle";
import { benefitOne, benefitTwo } from "../../components/data";
import Video from "../../components/video";
import AboutReason from "../../components/aboutReason";
import Testimonials from "../../components/testimonials";
import Faq from "../../components/faq";
import Team from "../../components/team";
import Header from "../../components/header";
import Features from "../../components/features";
import Card from "../../components/card";
import ProgramBuy from "../../components/programBuy";
import ContactUs from "../../components/contactus";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Header />

      <Card />
      <div className=" w-full flex items-center justify-center">
        <Link
          href={"/home/courses"}
          className="group relative text-indigo-500 w-36 h-10 flex items-center justify-center gap-2 text-sm border-2 border-gray-600 rounded-md hover:border-indigo-400"
        >
          <span>More courses</span>
          <span className="object-cover transform duration-500 group-hover:rotate-180">
            {"->"}
          </span>
        </Link>
      </div>
      <Features />
      {/* <ProgramBuy /> */}

      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      ></SectionTitle>
      <Video /> */}
      {/* <AboutReason /> */}
      <Team />
      <div className="w-full xl:flex justify-center px-3">

      <Testimonials />
      </div>
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions" />

      <Faq />
      <ContactUs />
    </>
  );
};

export default Home;
