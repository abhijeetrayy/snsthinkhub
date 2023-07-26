import SuccessStory from "../../../components/successStory";
export default function page() {
  return (
    <>
      <div className="z-50 w-full bg-cover ">
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#4f46e5"
            fillOpacity="1"
            d="M0,224L34.3,234.7C68.6,245,137,267,206,240C274.3,213,343,139,411,122.7C480,107,549,149,617,149.3C685.7,149,754,107,823,90.7C891.4,75,960,85,1029,117.3C1097.1,149,1166,203,1234,208C1302.9,213,1371,171,1406,149.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>
      <SuccessStory />
    </>
  );
}
