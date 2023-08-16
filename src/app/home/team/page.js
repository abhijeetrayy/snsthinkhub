import img1 from "../../../public/img/user1.jpg";
import img2 from "../../../public/img/team/harshit_munjal.jpg";

import Image from "next/image";
import Contactus from "../../../components/contactus";
import Atoshi from "../../../public/img/team/Atoshi.jpg";

import Sir from "../../../public/img/team/Sir.jpg";
const data = [
  { Name: "Sangita Badoni", Position: "Founder/CEO", Image: img1 , qoute: "Discouragement and failure are two of the surest stepping stones to success."},
  { Name: "Harshit Munjal", Position: "Chief Operating Officer", Image: img2 , qoute: "Triumph grows on the soil of setbacks."},
  { Name: "Atoshi Roy", Position: "SoftSkill Trainer", Image: Atoshi , qoute: "Mistakes fuel victories, and shape your success."},
  { Name: "Sharad Gupta", Position: "Technical Trainer", Image: Sir , qoute: "Fail forward, achieve greatness through setbacks."},

];

export default function page() {
  return (
    <>
      <div className="relative ">
        <div className="z-1 w-full bg-cover absolute top-0">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 690"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,700 C 0,700 0,175 0,175 C 62.77743004418264,155.80228276877762 125.55486008836527,136.60456553755523 181,133 C 236.44513991163473,129.39543446244477 284.55798969072157,141.3840206185567 343,149 C 401.44201030927843,156.6159793814433 470.21318114874816,159.85935198821798 535,171 C 599.7868188512518,182.14064801178202 660.5892857142857,201.17857142857142 720,189 C 779.4107142857143,176.82142857142858 837.429675994109,133.42636229749633 899,133 C 960.570324005891,132.57363770250367 1025.6920103092784,175.1159793814433 1088,198 C 1150.3079896907216,220.8840206185567 1209.8022827687778,224.10972017673046 1268,217 C 1326.1977172312222,209.89027982326954 1383.098858615611,192.44513991163478 1440,175 C 1440,175 1440,700 1440,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#4f46e5"
              fillOpacity="0.4"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
              transform="rotate(-180 720 350)"
            ></path>
            <path
              d="M 0,700 C 0,700 0,350 0,350 C 59.96575846833579,353.659793814433 119.93151693667158,357.319587628866 183,358 C 246.06848306332842,358.680412371134 312.2396907216495,356.3814432989691 372,367 C 431.7603092783505,377.6185567010309 485.10972017673055,401.1546391752577 538,387 C 590.8902798232695,372.8453608247423 643.3214285714284,321 705,302 C 766.6785714285716,283 837.6045655375553,296.8453608247423 900,332 C 962.3954344624447,367.1546391752577 1016.2603092783504,423.6185567010309 1067,413 C 1117.7396907216496,402.3814432989691 1165.3541973490428,324.680412371134 1227,303 C 1288.6458026509572,281.319587628866 1364.3229013254786,315.659793814433 1440,350 C 1440,350 1440,700 1440,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#4f46e5"
              fillOpacity="0.53"
              className="transition-all duration-300 ease-in-out delay-150 path-1"
              transform="rotate(-180 720 350)"
            ></path>
            <path
              d="M 0,700 C 0,700 0,525 0,525 C 42.117820324005876,532.634204712813 84.23564064801175,540.2684094256259 147,540 C 209.76435935198825,539.7315905743741 293.1752577319588,531.5605670103092 367,528 C 440.8247422680412,524.4394329896908 505.06332842415304,525.4893225331369 555,508 C 604.936671575847,490.51067746686306 640.5714285714288,454.48214285714283 703,464 C 765.4285714285712,473.51785714285717 854.6509572901325,528.5821060382916 921,525 C 987.3490427098675,521.4178939617084 1030.8247422680413,459.18943298969066 1083,466 C 1135.1752577319587,472.81056701030934 1196.0500736377026,548.6601620029455 1257,570 C 1317.9499263622974,591.3398379970545 1378.9749631811487,558.1699189985272 1440,525 C 1440,525 1440,700 1440,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#4f46e5"
              fillOpacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-2"
              transform="rotate(-180 720 350)"
            ></path>
          </svg>
        </div>
        <div className="z-20 w-full flex flex-col items-center">
          <div className="z-20 max-w-5xl flex flex-col items-center p-3 mt-16">
            <div className=" w-full p-3 bg-white sm:bg-opacity-0 sm:p-6 flex items-center justify-center rounded-md m-4 sm:text-white shadow-lg">
              <span className=" text-3xl sm:text-5xl font-bold">
                Our team 😎
              </span>
            </div>
            <div className="grid  grid-cols-1 gap-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white group w-full  sm:w-[600px] grid grid-cols-1 sm:grid-cols-6 border-2 border-indigo-50  shadow-lg p-3 rounded-md gap-4"
                >
                  <div className="col-span-1  sm:col-span-2 ">
                    <Image alt=""
                      className=" w-40 h-40 object-cover rounded-md"
                      width={100}
                      height={100}
                      src={item.Image}
                    />
                  </div>
                  <div className="transition ease-in-out delay-200 md:group-hover:translate-x-5 duration-300 col-span-1 sm:col-span-4  sm:border-2 sm:border-l-indigo-800 sm:border-transparent pl-3 flex flex-col gap-2">
                    <div>
                      <h1 className="text-lg font-medium text-indigo-800">
                        {item.Name}
                      </h1>
                      <span className="text-sm text-gray-500">
                        {item.Position}
                      </span>
                    </div>
                    {/* <div className="flex mt-5 space-x-5 text-gray-900">
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        <span className="sr-only">Twitter</span>
                        <Twitter />
                      </a>
                      <a
                        href="https://facebook.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        <span className="sr-only">Facebook</span>
                        <Facebook />
                      </a>
                      <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        <span className="sr-only">Instagram</span>
                        <Instagram />
                      </a>
                      <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        <span className="sr-only">Linkedin</span>
                        <Linkedin />
                      </a>
                    </div> */}
                    <div>
                      <span className="text-sm">
                        {item.qoute}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Contactus />
    </>
  );
}

const Twitter = ({ size = 15 }) => (
  <svg
    className=" hover:text-gray-700"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Facebook = ({ size = 15 }) => (
  <svg
    className=" hover:text-gray-700"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 15 }) => (
  <svg
    className=" hover:text-gray-700"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 15 }) => (
  <svg
    className=" hover:text-gray-700"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);
