import React from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import IntershihfillButton from "../../../../components/intershipfillform";

function page() {
  return (
    <div className="w-full flex justify-center p-3">
      <div className="flex flex-col gap-5 max-w-4xl p-4 border rounded-md">
        <div className="py-5">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-700">
            Freelance trainer for S&S
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-gray-700">The Role</h2>
          <p className="text-sm ">
            We are seeking a highly skilled and motivated Freelance Trainer to
            join our team. As a Freelance Trainer, you will be responsible for
            delivering high-quality training sessions to our students, focusing
            on imparting technical knowledge and skills related to products,
            services, or industry.
            <br />
            Your role will involve creating training materials, conducting
            interactive training sessions, and ensuring participants have a
            clear understanding of complex technical concepts you’re asked to.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-gray-700">
            YOUR RESPONSIBILITIES
          </h2>
          {/* <p className="text-sm ">
            For applying for position of Freelance trainer you’d need,
          </p> */}
          <div className="text-sm flex flex-col gap-3 p-3">
            <span className="flex flex-row  gap-2">
              • Training Content Development: Create comprehensive training
              materials and collaborate with experts for accuracy.
            </span>
            <span className="flex flex-row  gap-2">
              • Training Delivery: Conduct dynamic, adaptable training sessions
              in-person and virtually.
            </span>
            <span className="flex flex-row  gap-2">
              • Technical Expertise: Stay current with industry trends and
              master products for effective communication.
            </span>
            <span className="flex flex-row  gap-2">
              • Participant Engagement: Foster interactive environments,
              addressing queries and encouraging active participation.
            </span>
            <span className="flex flex-row  gap-2">
              • Assessment and Feedback: Evaluate understanding through
              assessments and offer valuable improvement feedback.
            </span>
            <span className="flex flex-row  gap-2">
              • Continuous Improvement: Maintain up-to-date materials and
              integrate participant feedback for enhanced training.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-gray-700">JOB REQUIREMENTS</h2>
          <p className="text-sm ">
            For applying for position of Freelance trainer you’d need,
          </p>
          <div className="text-sm flex flex-col gap-3 p-3">
            <span className="flex flex-row  gap-2">
              • Master's degree in a relevant field.
            </span>
            <span className="flex flex-row  gap-2">
              • Some experience as a Trainer or similar role, preferably in a
              freelance capacity.
            </span>
            <span className="flex flex-row  gap-2">
              • Strong command of technical subject matter and the ability to
              translate complex concepts into understandable terms.
            </span>
            <span className="flex flex-row  gap-2">
              • Excellent communication and presentation skills, both verbal and
              written.
            </span>
            <span className="flex flex-row  gap-2">
              • Proficiency in using training tools, platforms, and multimedia
              resources.
            </span>
            <span className="flex flex-row  gap-2">
              • Experience with virtual training delivery tools and platforms.
            </span>
            <span className="flex flex-row  gap-2">
              • Ability to adapt to different learning styles and engage diverse
              audiences.
            </span>
            <span className="flex flex-row  gap-2">
              • Strong organizational skills and attention to detail.
            </span>
            <span className="flex flex-row  gap-2">
              • Self-motivated, adaptable, and able to work independently.
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <IntershihfillButton
            title={"Job details form"}
            tag={"job"}
            ids={"00001"}
            name={undefined}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
