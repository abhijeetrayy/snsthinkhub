import React from "react";
import img2 from "../public/photos/group2.png";
import img3 from "../public/photos/groupMam.jpg";
import img4 from "../public/photos/interview2.png";
import img5 from "../public/photos/javaCourse.png";
import img6 from "../public/photos/trianer_university.jpg";
import img8 from "../public/img/logo.jpg";
import img7 from "../public/img/header.jpg";
import Image from "next/image";

const styles = {
  font: {
    fontFamily: "Agbalumo",
  },
};
function gallery() {
  return (
    <div className="w-full w-max-[1200px] flex justify-center flex-col">
      <div className="w-full flex justify-center p-6">
        <h1
          className="text-4xl md:text-7xl  text-indigo-500"
          style={styles.font}
        >
          Gallery
        </h1>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-10">
        <div>
          <Image className="" src={img2} alt="Person" />
        </div>
        <div>
          <Image className=" " src={img8} alt="Person" />
        </div>
        <div>
          <Image className="" src={img4} alt="Person" />
        </div>

        <div>
          <Image className="" src={img5} alt="Person" />
        </div>
        <div>
          <Image className="" src={img6} alt="Person" />
        </div>
        <div>
          <Image className="" src={img7} alt="Person" />
        </div>
      </div>
    </div>
  );
}

export default gallery;
