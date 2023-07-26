import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 md:items-center justify-center md:text-center`}
    >
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase my-3">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-700 ">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          {props.children}
        </p>
      )}
    </Container>
  );
};

export default SectionTitle;
