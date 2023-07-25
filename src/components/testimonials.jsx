import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "XYZ ",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      programAndCourse: "DSA Placement Bootcamp",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Rashi R",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, .",
      programAndCourse: "DSA Placement Bootcamp",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Ishita",
      description:
        "Lorem Ipsum is simply dummy textrecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      programAndCourse: "DSA Placement Bootcamp",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Sejal",
      description:
        "Lorem Ipsum is . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      programAndCourse: "DSA Placement Bootcamp",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Rivya",
      description:
        "Lorem Ipsum is simply dummy text of ththey of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      programAndCourse: "DSA Placement Bootcamp",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Harshita",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      programAndCourse: "DSA Placement Bootcamp",
      stars: "⭐⭐⭐⭐⭐",
    },

    {
      name: "Kavya",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      programAndCourse: "DSA Placement Bootcamp",
      stars: "⭐⭐⭐⭐⭐",
    },

    {
      name: "Shaizy",
      description:
        "Lorem Ipsum is simply dummy text y. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      programAndCourse: "DSA Placement Bootcamp",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Ishika",
      description:
        "Lorem Ipsum is simply dummy tas been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      programAndCourse: "DSA Placement Bootcamp",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Priya",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      programAndCourse: "DSA Placement Bootcamp",
      stars: "⭐⭐⭐⭐⭐",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center p-3">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="text-sm font-bold tracking-wider text-indigo-600 uppercase leading-10">
            Testimonials
          </p>
        </div>
        <h2 class="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-700 ">
          Here's what our Student says
        </h2>
      </div>
      <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 px-2 md:px-5 max-w-7xl">
        {testimonials.map((items) => (
          <div class="relative  border-2 border-gray-100 mb-5 rounded-lg break-inside-avoid shadow-md md:shadow-lg hover:shadow-xl">
            <div class="p-5 relative  flex flex-col gap-1">
              <div className="flex flex-col mb-3">
                <h1 class="test__title text-xl text-indigo-500 font-bold">
                  {items.name}
                </h1>
                <span className="text-gray-500 text-xs font-normal">
                  {items.programAndCourse}
                </span>
                <span className="text-sm">Raiting: {items.stars}</span>
              </div>
              <p class="test__author text-sm font-light text-gray-700">
                {items.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
