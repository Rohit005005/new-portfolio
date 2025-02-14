"use client";
import {  File, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import DialogCard from "./_components/DialogCard";

export default function Home() {
  return (
    <div className="sm:w-[550px] m-auto selection:text-black selection:bg-white mb-20">
      <div className="flex items-center justify-between m-4 animate-slide300">
        <div>
          <div className="flex items-center group transition-all">
            <h1 className="sm:text-3xl text-2xl font-bold font-mono whitespace-nowrap">
              Hey, I&apos;m Rohit_
            </h1>
            <p className="sm:text-3xl text-2xl group-hover:animate-wave origin-bottom-right">
              &nbsp;👋🏻
            </p>
          </div>
          <div>
            <p className="text-sm py-2 font-mono">
              20-year-old full stack developer from India.
            </p>
            <p className="text-sm w-[90%] font-mono">
              I like building full-stack, explore AI, and occasionally step
              outside to confirm the sun still exists.
            </p>
          </div>
          <div className="flex items-center gap-5 pt-4">
            <button
              className="flex items-center gap-2 rounded-md border px-2 py-1 text-sm font-mono hover:scale-105 transition-all hover:text-black hover:bg-white"
              onClick={() => {
                window.open("Rohit's resume.pdf");
              }}
            >
              <p>Resume</p>
              <File size={15} />
            </button>
            <Linkedin
              size={20}
              className="hover:scale-125 transition-all cursor-pointer"
              onClick={() => {
                window.open("https://www.linkedin.com/in/rohit-dev005/");
              }}
            />
            {/* <Github size={20} className="hover:scale-125 transition-all cursor-pointer" /> */}
            <Mail
              size={20}
              className="hover:scale-125 transition-all cursor-pointer"
              onClick={() => {
                window.open("mailto:romanrohit2005@gmail.com");
              }}
            />
          </div>
        </div>
        <div className="w-[100%] sm:w-[50%] overflow-hidden justify-center items-center flex  rounded-xl">
          <Image
            src="/profile.jpg"
            alt="pic"
            width={120}
            height={90}
            className=" p-1 rounded-xl cursor-pointer hover:scale-150 transition-all"
          />
        </div>
      </div>
      <h1 className="text-2xl m-4 mt-10 font-bold font-mono animate-slide500">
        What I work with
      </h1>
      {/* upper loop */}
      <div className="flex overflow-hidden space-x-16 group mt-5 mx-4 animate-slide500">
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          <div className="flex items-center gap-1">
            <Image src="/nextlogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">NextJs</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/reactlogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">ReactJs</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/nodelogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">NodeJs</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/jslogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">Javascript</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/tcsslogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">Tailwind</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/tslogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">Typescript</p>
          </div>

          <div className="flex items-center gap-1">
            <Image
              src="/prismalogo.svg"
              alt="pic"
              width={25}
              height={30}
              className="bg-white rounded-full"
            />
            <p className="text-xs">Prisma</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/drizzlelogo.png"
              alt="pic"
              width={25}
              height={30}
              className="bg-white rounded-full"
            />
            <p className="text-xs">Drizzle</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/postgrelogo.png" alt="pic" width={30} height={30} />
            <p className="text-xs">PostgreSQL</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/mongologo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">MongoDB</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/gitlogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">Github</p>
          </div>
        </div>
        <div
          className="flex space-x-16 animate-loop-scroll group-hover:paused"
          aria-hidden="true"
        >
          <div className="flex items-center gap-1">
            <Image src="/nextlogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">NextJs</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/reactlogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">ReactJs</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/nodelogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">NodeJs</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/jslogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">Javascript</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/tcsslogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">Tailwind</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/tslogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">Typescript</p>
          </div>

          <div className="flex items-center gap-1">
            <Image
              src="/prismalogo.svg"
              alt="pic"
              width={25}
              height={30}
              className="bg-white rounded-full"
            />
            <p className="text-xs">Prisma</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/drizzlelogo.png"
              alt="pic"
              width={25}
              height={30}
              className="bg-white rounded-full"
            />
            <p className="text-xs">Drizzle</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/postgrelogo.png" alt="pic" width={30} height={30} />
            <p className="text-xs">PostgreSQL</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/mongologo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">MongoDB</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/gitlogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">Github</p>
          </div>
        </div>
      </div>
      {/* lower loop */}
      <div className="flex overflow-hidden space-x-16 group mt-5 mx-4 animate-slide500">
        <div className="flex space-x-16 animate-loop-scroll2 group-hover:paused">
          <div className="flex items-center gap-1">
            <Image src="/nextlogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">NextJs</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/reactlogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">ReactJs</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/nodelogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">NodeJs</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/jslogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">Javascript</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/tcsslogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">Tailwind</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/tslogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">Typescript</p>
          </div>

          <div className="flex items-center gap-1">
            <Image
              src="/prismalogo.svg"
              alt="pic"
              width={25}
              height={30}
              className="bg-white rounded-full"
            />
            <p className="text-xs">Prisma</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/drizzlelogo.png"
              alt="pic"
              width={25}
              height={30}
              className="bg-white rounded-full"
            />
            <p className="text-xs">Drizzle</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/postgrelogo.png" alt="pic" width={30} height={30} />
            <p className="text-xs">PostgreSQL</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/mongologo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">MongoDB</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/gitlogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">Github</p>
          </div>
        </div>
        <div
          className="flex space-x-16 animate-loop-scroll2 group-hover:paused"
          aria-hidden="true"
        >
          <div className="flex items-center gap-1">
            <Image src="/nextlogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">NextJs</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/reactlogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">ReactJs</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/nodelogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">NodeJs</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/jslogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">Javascript</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/tcsslogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">Tailwind</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/tslogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">Typescript</p>
          </div>

          <div className="flex items-center gap-1">
            <Image
              src="/prismalogo.svg"
              alt="pic"
              width={25}
              height={30}
              className="bg-white rounded-full"
            />
            <p className="text-xs">Prisma</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/drizzlelogo.png"
              alt="pic"
              width={25}
              height={30}
              className="bg-white rounded-full"
            />
            <p className="text-xs">Drizzle</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/postgrelogo.png" alt="pic" width={30} height={30} />
            <p className="text-xs">PostgreSQL</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/mongologo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">MongoDB</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/gitlogo.svg" alt="pic" width={30} height={30} />
            <p className="text-xs">Github</p>
          </div>
        </div>
      </div>
      {/* projects */}
      <h1 className="text-2xl font-bold font-mono mt-10 m-4 animate-slide700">
        Personal Projects
      </h1>
      {/* Githive */}
      <div className="m-4 rounded-xl bg-[#141414] group transition-all duration-300 animate-slide700">
        <div className="rounded-xl bg-[url(/githive.png)] group-hover:h-[100px] transition-all duration-300 h-[200px] bg-cover flex items-end"></div>
        <div className=" p-5  font-mono flex items-start justify-between">
          <div>
            <p className=" text-xl">Githive</p>
            <p className="text-xs">Helps understand Github Repositories</p>
          </div>
          <DialogCard project="githive" />
        </div>
        <ul className="list-disc pl-10 pr-5 pb-5 text-xs absolute group-hover:static opacity-0  group-hover:opacity-100 transition-all duration-300 font-mono">
          <li>Get instant, human-friendly explanations of every commit </li>
          <li>
            Understand any file by simply asking AI – no more guesswork!{" "}
          </li>{" "}
          <li>
            Summarize entire repositories in seconds – cut through the clutter!{" "}
          </li>
          <li> Invite your team and share insights seamlessly</li>
        </ul>
      </div>
      {/* formio */}
      <div className="m-4 rounded-xl bg-[#141414] group transition-all duration-300 mt-10 animate-slide900">
        <div className="rounded-xl bg-[url(/formio.png)] group-hover:h-[100px] transition-all duration-300 h-[200px] bg-cover flex items-end"></div>
        <div className=" p-5 font-mono flex items-start justify-between">
          <div className="h-fit">
            <p className=" text-xl">Formio</p>
            <p className="text-xs">Helps in creating Forms</p>
          </div>
          <DialogCard project="formio" />
        </div>
        <ul className="list-disc pl-10 pr-5 pb-5 text-xs absolute group-hover:static opacity-0  group-hover:opacity-100 transition-all duration-300 font-mono">
          <li>
            Generate complete forms instantly with AI using simple text prompts
          </li>
          <li>Customize themes and backgrounds to match your brand</li>{" "}
          <li>Share forms easily with anyone using shareable links</li>
          <li> Export form responses directly to spreadsheets</li>
        </ul>
      </div>
      {/* preppeak */}
      <div className="m-4 rounded-xl bg-[#141414] group transition-all duration-300 mt-10 animate-slide900">
        <div className="rounded-xl bg-[url(/preppeak.png)] group-hover:h-[100px] transition-all duration-300 h-[200px] bg-cover flex items-end"></div>
        <div className=" p-5 font-mono flex items-start justify-between">
          <div className="h-fit">
            <p className=" text-xl">PrepPeak</p>
            <p className="text-xs">Helps in preparing for Interviews</p>
          </div>
          <DialogCard project="preppeak" />
        </div>
        <ul className="list-disc pr-5 pl-10 pb-5 text-xs absolute group-hover:static opacity-0  group-hover:opacity-100 transition-all duration-300 font-mono">
          <li>
            Customized interview questions generated based on your job role,
            tech stack, and experience
          </li>
          <li>
            Real-time interview simulation with video/audio recording
            capabilities
          </li>{" "}
          <li>Comprehensive feedback with ratings for each answer</li>
          <li>
            AI-powered assessment with correct answers and improvement
            suggestions
          </li>
        </ul>
      </div>
      {/* experience */}
      <h1 className="text-2xl font-bold font-mono mt-10 m-4">Experience</h1>
      <div className="m-4 font-mono">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold">DigitalDost</h1>
          <p>|</p>
          <h1 className="text-lg font-semibold">Web Dev Intern</h1>
        </div>
        <p className="text-xs text-gray-400 ">Aug 2024 - Nov 2024</p>
        <p className="text-sm">
          I worked remotely as a Web Development Intern at Digital Dost, a
          digital marketing company, where I contributed to multiple projects by
          building responsive websites, enhancing performance, and implementing
          features using technologies like Next.js, React.js, and Tailwind CSS,
          while ensuring seamless functionality and a user-centric design
          approach.
        </p>
      </div>
      {/* education */}
      <h1 className="text-2xl font-bold font-mono mt-10 m-4">Education</h1>
      <div className="m-4 font-mono">
        <h1 className="text-lg font-semibold">
          BCA (Bachelor of Computer Applications)
        </h1>
        <p className="text-xs text-gray-400 ">
          Institute of Information Technology & Management
        </p>
        <p className="text-xs text-gray-400 ">Sep 2022 - Sep 2025</p>
        {/* <p className="text-sm">
          I worked remotely as a Web Development Intern at Digital Dost, a
          digital marketing company, where I contributed to multiple projects by
          building responsive websites, enhancing performance, and implementing
          features using technologies like Next.js, React.js, and Tailwind CSS,
          while ensuring seamless functionality and a user-centric design
          approach.
        </p> */}
      </div>
    </div>
  );
}
