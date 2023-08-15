"use client";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Example() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          className="text-lg text-gray-600"
          onClick={() => handleOpen(1)}
        >
          Introduction to Object-Oriented Programming (OOP) Concepts
        </AccordionHeader>
        <AccordionBody>
          In this lesson, you will learn the fundamental concepts of Object-Oriented Programming (OOP). We will cover the key principles of OOP, such as classes, objects, encapsulation, inheritance, and polymorphism. By understanding these concepts, you'll be better equipped to design and build modular, maintainable, and efficient software applications.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          className="text-lg text-gray-600"
          onClick={() => handleOpen(2)}
        >
          Java Arrays and Basic Data Structures
        </AccordionHeader>
        <AccordionBody>
          This lesson focuses on Java arrays and introduces you to basic data structures. You'll learn how to declare, initialize, and manipulate arrays in Java. Additionally, we'll explore common data structures like stacks and queues, understanding their use cases and implementation principles.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          className="text-lg text-gray-600"
          onClick={() => handleOpen(3)}
        >
          Exception Handling and Debugging in Java
        </AccordionHeader>
        <AccordionBody>
          Exception Handling and Debugging in Java
          Detail: In this lesson, we'll delve into exception handling and debugging techniques in Java. You'll discover how to handle runtime errors using try-catch blocks, along with best practices for graceful error recovery. We'll also cover debugging tools and strategies to effectively identify and fix issues in your code.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader
          className="text-lg text-gray-600"
          onClick={() => handleOpen(4)}
        >
          Introduction to Spring Framework and Dependency Injection
        </AccordionHeader>
        <AccordionBody>
          This lesson introduces you to the Spring Framework, a powerful tool for building Java applications. We'll focus on the concept of Dependency Injection (DI) and Inversion of Control (IoC), which are central to Spring's architecture. You'll understand how Spring manages object creation and the benefits of decoupling components.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader
          className="text-lg text-gray-600"
          onClick={() => handleOpen(5)}
        >
          Introduction to Angular and Building SPA Components
        </AccordionHeader>
        <AccordionBody>
          In this lesson, we'll explore Angular, a popular front-end framework for building Single Page Applications (SPAs). You'll learn about Angular components, modules, and data binding. We'll also touch on creating forms and routing within an Angular application, allowing you to create dynamic and interactive web experiences.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
