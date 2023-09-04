import React from "react";
import Accordion from "./accordian";
import Card from "./card";
import { TiTick } from "react-icons/ti";
import Wave from "../public/img/waves.svg";
import Image from "next/image";
import Team from "./team";
import Review from "./review";
import javaCourseImg from "../public/photos/javaCourse.png";

import Link from "next/link";
import CourseRegistration from "./courseRegistration";
export default function CourseDetail() {
  return (
    <div className="w-full flex justify-center overflow-hidden">
      <div className="max-w-[1324px]">
        <div className="flex flex-col-reverse  mt-6 md:flex-row ">
          <div className="flex flex-col gap-5 md:px-10 px-4">
            <div className="hidden w-full md:flex flex-col gap-5 bg-indigo-600 p-3 rounded-lg">
              <h2 className="text-5xl font-bold text-white">
                Java Full Stack - 2023 Complete Course
              </h2>

              <div>
                <p className="text-md text-gray-200">
                  No prior programming experience? No problem! This
                  comprehensive Java Fullstack online course ensures you acquire
                  all the essential skills to become a successful web developer.
                </p>
              </div>
              <div>
                {/* <span className="text-gray-200 hover:text-gray-300">
                    1652 Rating | 4.3 Reviews
                  </span> */}
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full">
              <h2 className="text-2xl font-bold">What You will Learn</h2>
              <div>
                <p className=" text-gray-500">
                  This comprehensive course is designed to provide you with a
                  strong foundation in Java programming and essential web
                  development concepts.
                </p>
              </div>
              <div>
                <ul className="flex gap-5 flex-col pl-3">
                  <li className="flex flex-row">
                    <TiTick className="text-indigo-500 text-2xl" />{" "}
                    <span className="text-sm text-gray-600">
                      "The Grasp Java essentials: OOPs, Arrays, testing,
                      debugging, exceptions, API, and Collections for robust
                      coding.
                    </span>
                  </li>
                  <li className="flex flex-row">
                    <TiTick className="text-indigo-500 text-2xl" />{" "}
                    <span className="text-sm text-gray-600">
                      30 Free Advanced Java skills: Lambdas, Streams, SQL, JDBC,
                      Hibernate, Spring, Restful services for modern development
                    </span>
                  </li>
                  <li className="flex flex-row">
                    <TiTick className="text-indigo-500 text-2xl" />{" "}
                    <span className="text-sm text-gray-600">
                      Make REAL Web basics: CSS, XML, Servlets, JSP, Spring Boot
                      for dynamic pages and Restful Microservices.
                    </span>
                  </li>
                  <li className="flex flex-row">
                    <TiTick className="text-indigo-500 text-2xl" />{" "}
                    <span className="text-sm text-gray-600">
                      PDF Manuals Database magic: SQL, SQL Joins, Hibernate
                      mapping, advanced queries with Hibernate Query Language.
                    </span>
                  </li>
                  <li className="flex flex-row">
                    <TiTick className="text-indigo-500 text-2xl" />{" "}
                    <span className="text-sm text-gray-600">
                      Massive Q&A Modern web: Angular, TypeScript, Components,
                      Forms, Routing, SPA Framework for interactive interfaces.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-2xl font-bold">Contet</h2>
                <p className=" text-gray-500">5 sections • 80 Hours</p>
              </div>
              <div className="max-w-[700px] p-3 border rounded-lg">
                <Accordion />
              </div>
            </div>
            <div className="max-w-[790px] px-5 py-3 flex flex-col gap-7">
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-bold">Course Description</h2>
                <div>
                  <p className=" text-gray-500">
                    Through a series of carefully structured lessons, you will
                    progressively build your skills and knowledge, starting with
                    fundamental programming concepts and culminating in advanced
                    web development techniques.
                  </p>
                </div>
                <div>
                  <ul className="flex gap-5 flex-col pl-6">
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> "The
                      Object-Oriented Programming (OOP)
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> 30 Free
                      Array Manipulation in Java
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> Make REAL
                      Java Code Quality
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> PDF Java
                      Error Handling & APIs
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> Massive
                      Functional Programming in Java
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> DDatabase
                      Fundamentals & Joins
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> Learn to
                      Data Stream Manipulation
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> JDBC: Java
                      Database Connectivity
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> Java EE
                      Overview
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> Web
                      Development Basics
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> Spring
                      Fundamentals
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> IoC & DI
                      Concepts
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> Spring
                      Bean Understanding
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> Spring
                      Boot for Web Development
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" />
                      Microservices with Spring Boot
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> Spring
                      Boot for Web Development
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" />
                      Hibernate ORM Basics
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" />
                      Hibernate Mapping Techniques
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" />
                      Hibernate Querying
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" />
                      Angular & TypeScript Basics
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" />
                      Angular Component & Module Concepts
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" />
                      Angular Data Binding & Forms
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" />
                      Angular Routing Basics
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" />
                      Angular & TypeScript Basics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div>
              <Review />
            </div> */}
          </div>

          <div className=" flex justify-center  px-6 w-fit">
            <div className="w-full md:shadow-lg  py-2 md:w-[320px]  h-fit">
              <div>
                <Image
                  alt=""
                  width={200}
                  height={100}
                  className="w-full h-64 object-cover rounded-t-lg"
                  src={javaCourseImg}
                  placeholder="blur"
                />
              </div>
              <div className="md:hidden flex flex-col gap-5 p-3 rounded-lg">
                <h2 className="text-3xl font-semibold text-gray-700">
                  Java Full Stack - 2023 Complete Course
                </h2>

                <div>
                  <p className="visible md:hidden text-md text-gray-600">
                    No prior programming experience? No problem! This
                    comprehensive Java Fullstack online course ensures you
                    acquire all the essential skills to become a successful web
                    developer.
                  </p>
                </div>
                <div>
                  <span className="text-gray-600 hover:text-gray-700">
                    1652 Rating | 4.3 Reviews
                  </span>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-around items-center mt-6 mb-2">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">
                        Rs 1500.00
                      </h2>
                    </div>
                    <div>
                      <del className="text-md text-gray-500"> Rs 6999 /-</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center my-5 gap-3 transition-all">
                <CourseRegistration
                  courseId={"100001"}
                  courseName={"Java Full Stack - 2023 Complete Course"}
                />

                {/* <button className="text-white py-4 px-9 rounded-lg  bg-indigo-600 hover:bg-indigo-500 w-56">
                                Buy Now
                            </button> */}
                <p className="text-sm text-gray-500">
                  All Secured with RazorPay India
                </p>
              </div>
              <div className="hidden md:block w-full px-5 mt-7">
                <div className="flex gap-4 flex-col">
                  <h2 className="text-2xl font-bold">Coures Contain</h2>
                  <ul className="flex gap-3 flex-col pl-6">
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" />
                      80 hours
                    </li>
                    {/* <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> 4 articles
                    </li> */}
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> 25
                      Downloadable resources
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" /> Full
                      lifetime access
                    </li>
                    <li className="flex flex-row">
                      <TiTick className="text-indigo-500 text-2xl" />
                      Access on mobile and TV
                    </li>
                  </ul>
                </div>
                <div className="">
                  <Image alt="" className=" p-0 m-0" width={100} src={Wave} />
                </div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">Traning Student</h2>
                  <p className="text-sm text-gray-500">
                    Get You Student the access to tons of Course and Programs,
                    and insure your students Placement.
                  </p>
                  <div className="hidden md:flex justify-center w-full my-3">
                    <Link href={"/home/program"}>
                      <button className="text-white py-4 px-9 rounded-lg  bg-indigo-600 hover:bg-indigo-500 w-56">
                        For Universities
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full px-3 m-auto">
          <Team />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}
