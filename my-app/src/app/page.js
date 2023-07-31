import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import troybohrer from "../../public/troybohrer.png"
import project from '../../public/IMG_0217.jpg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Troy Bohrer Portfolio</title>
        <meta name="description" content=""></meta>
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
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
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 text-teal-600 font-medium">Troy Bohrer</h2>
            <h3 className="text-2xl py-2">Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">I am a developer and data analyst.</p>
          </div>
          <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={troybohrer} layout="fill" objectFit="cover"/>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-600">Web design, Databases, AWS, Power Bi, Excel</p>
          </div>
          <div>
            <div>
              <Image src={project} width={100} height={100}/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
