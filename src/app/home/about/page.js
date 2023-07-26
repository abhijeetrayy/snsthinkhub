import React from "react";
import Team from "../../../components/team";
import AboutHeader from "../../../components/aboutHead";
import Workedwith from "../../../components/workedwith";
import Qoute from "../../../components/qoute";
import ContactUs from "../../../components/contactus";
import ProgramToBuy from "../../../components/programBuy";
import AboutReason from "../../../components/aboutReason";
export default function page() {
  return (
    <>
      <AboutHeader />
      <Workedwith />
      <AboutReason />
      <Qoute />
      <Team />
      <ProgramToBuy />
      <ContactUs />
    </>
  );
}
