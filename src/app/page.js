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
import "../css/background.css";

const Home = () => {
  return (
    <>
      <Header />
      <Features />
      <Card />
      {/* <ProgramBuy /> */}

      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      ></SectionTitle>
      <Video />
      <AboutReason />
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
