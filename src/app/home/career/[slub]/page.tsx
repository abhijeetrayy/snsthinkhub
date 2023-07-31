import React from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import IntershihfillButton from "../../../../components/intershipfillform";

function page() {
  return (
    <div className="w-full flex justify-center p-3">
      <div className="flex flex-col gap-5 max-w-4xl p-4 border rounded-md">
        <div className="py-5">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-700">
            Engineering Manager Developer Experience
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-gray-700">The Role</h2>
          <p className="text-sm ">
            In the world of AI, behavioural predictions are leading the charge
            to better machine learning. There is so much happening in the AI
            space. Advances in the economic sectors have seen automated business
            practices rapidly increasing economic value. While the realm of the
            human sciences has used the power afforded by computational
            capabilities to solve many human based dilemmas. Even the art scene
            has adopted carefully selected ML applications to usher in the
            technological movement. As a Senior Client Engineer, you'll work
            alongside other engineers, designers, and product managers to tackle
            everything from huge company initiatives to modest but important bug
            fixes, from start to finish. You'll also collaborate with your
            product team on discovery, helping to assess the direction and
            feasibility of product changes. And, perhaps most importantly,
            you'll actively contribute to the evolution of the culture and
            processes of a growing engineering team.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-gray-700">About You</h2>
          <p className="text-sm ">
            You love building great software. Your work could be supporting new
            feature development, migrating existing features, and creating other
            mobile and web solutions for customers. You'll have a primary focus
            on frontend development using Javascript. Our client's tech stack is
            JavaScript, primarily using React. A strong understanding of JS core
            (ES2019+) is required, with some exposure in Java as back-end
            technology. We use modern tools, which means you'll have the
            opportunity to work with Webpack, Redux, Apollo, Styled Components,
            and much more. You love learning. Engineering is an ever-evolving
            world. You enjoy playing with new tech and exploring areas that you
            might not have experience with yet. You are self-driven,
            self-learner willing to share knowledge and participate actively in
            your community. Having overlap with your team is critical when
            working in a global remote team. Modus requires all team members to
            overlap with EST morning hours daily. In addition, reliable high
            speed internet is a must.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-gray-700">
            Things You Might Do
          </h2>
          <p className="text-sm ">
            We are a fast-growing, and remote-first company, so you'll likely
            get experience on many different projects across the organization.
            That said, here are some things you'll probably do:
          </p>
          <div className="text-sm flex flex-col gap-3 p-3">
            <span className="flex flex-row  gap-2">
              • Give back to the community via open source and blog posts
            </span>
            <span className="flex flex-row  gap-2">
              • Travel and meet great people- as part of our remote-first
              lifestyle, it's important that we come together as needed to work
              together, meet each other in person and have fun together. Please
              keep that in mind when you apply
            </span>
            <span className="flex flex-row  gap-2">
              • Teach and be taught: Modus creates active teams that work in
              internal and external projects together, giving opportunities to
              stay relevant with the latest technologies and learning from
              experts worldwide
            </span>
            <span className="flex flex-row  gap-2">
              • Interact directly with internal and external clients to
              represent Modus and its values
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <IntershihfillButton title={"Job details form"} tag={"job"} />
        </div>
      </div>
    </div>
  );
}

export default page;
