import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "XYZ ",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "Rashi R",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, .",
    },
    {
      name: "Ishita",
      description:
        "Lorem Ipsum is simply dummy textrecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "Sejal",
      description:
        "Lorem Ipsum is . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      name: "Rivya",
      description:
        "Lorem Ipsum is simply dummy text of ththey of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "Harshita",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },

    {
      name: "Kavya",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },

    {
      name: "Shaizy",
      description:
        "Lorem Ipsum is simply dummy text y. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "Ishika",
      description:
        "Lorem Ipsum is simply dummy tas been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "Priya",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ];
  return (
    <div>
      <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 p-7">
        {testimonials.map((items) => (
          <div class="relative  border-2 border-gray-300 mb-5 rounded-lg break-inside-avoid">
            <div class=" p-8 relative  flex flex-col">
              <h1 class="test__title text-3xl text-indigo-500 font-bold mb-3">
                {items.name}
              </h1>
              <p class="test__author font-sm font-light">{items.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
