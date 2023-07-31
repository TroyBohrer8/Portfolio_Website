import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import troybohrer from "../../public/troybohrer.png";
import project from "../../public/IMG_0217.jpg";
// import { useState } from "react";

export default function Home() {
  // const [darkMode, setDarkMode] = useState(false)
  return (
    <div>
      <Head>
        <title>Troy Bohrer Portfolio</title>
        <meta name="description" content=""></meta>
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          {/* Navbar */}
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Troy Bohrer</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-5"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* About Me */}
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl">
              Troy Bohrer
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl">
              I am a developer and data analyst.
            </p>
          </div>
          <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600 max-w-xl">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={troybohrer} layout="fill" objectFit="cover" />
          </div>
        </section>
        {/* Services */}
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-600">
              Web design, Databases, AWS, Power Bi, Excel
            </p>
          </div>
          <div className="lg:flex gap-10">
            {/* Card 1 */}
            <div className="text-center shadow-lg rounded-xl my-10">
              <h3 className="text-lg">Web Design</h3>
              <p>Creating modern and dynamic designs.</p>
              <h4 className="py-4 text-teal-500">Design tools I use</h4>
              <p className="text-gray-800 py-1">Blah</p>
              <p className="text-gray-800 py-1">Blah</p>
              <p className="text-gray-800 py-1">Blah</p>
            </div>
            {/* Card 2 */}
            <div className="text-center shadow-lg rounded-xl my-10">
              <h3 className="text-lg">Data Analytics</h3>
              <p>Transforming data and creating visualizations.</p>
              <h4 className="py-4 text-teal-500">Design tools I use</h4>
              <p className="text-gray-800 py-1">Blah</p>
              <p className="text-gray-800 py-1">Blah</p>
              <p className="text-gray-800 py-1">Blah</p>
            </div>
            {/* Card 3 */}
            <div className="text-center shadow-lg rounded-xl my-10">
              <h3 className="text-lg">Cyber Security</h3>
              <p>Using best practices to secure multiple applications.</p>
              <h4 className="py-4 text-teal-500">Design tools I use</h4>
              <p className="text-gray-800 py-1">Blah</p>
              <p className="text-gray-800 py-1">Blah</p>
              <p className="text-gray-800 py-1">Blah</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3>Projects</h3>
            <p>These are some of my projects I've been working on.</p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={project}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={project}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={project}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={project}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={project}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={project}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
