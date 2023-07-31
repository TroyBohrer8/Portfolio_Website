import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

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
        </section>
      </main>
    </div>
  );
}
