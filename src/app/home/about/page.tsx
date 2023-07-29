import React from "react";
import Team from "../../../components/team";
import AboutHeader from "../../../components/aboutHead";
import Workedwith from "../../../components/workedwith";
import Qoute from "../../../components/qoute";
import ContactUs from "../../../components/contactus";
import ProgramToBuy from "../../../components/programBuy";
import AboutReason from "../../../components/aboutReason";
import Mission from "../../../components/mission";
import JoinUs from "../../../components/joinUs";
export default function page() {
  return (
    <>
      <AboutHeader />
      {/* <Workedwith /> */}
      <AboutReason />
      <Mission />
      <Qoute />
      <Team />
      <div className="w-full flex justify-center">
        <hr className="border-2 my-3 px-4 max-w-[999px] border-gray-700 rounded-md" />
      </div>
      <JoinUs />

      <ContactUs />
    </>
  );
}
