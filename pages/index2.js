import React, { useContext } from "react";
import LandingLayout from "../components/layouts/LandingLayout";
import Image from "next/image";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { StateContext } from "../pages/_app";

export default function Home() {
  const codeString = `Hi 👋 My name is Peter Parker
=============================

Web Developer
-------------

* 🌍  I'm based in London, England
* 🖥️  See my portfolio at [peterparker.com](http://peterparker.com)
* ✉️  You can contact me at [peter@pparker.com](mailto:peter@pparker.com)
* 🚀  I'm currently working on [peterparker.com](http://peterparker.com)
* 🧠  I'm learning a new JavaScript framework
* 🤝  I'm open to collaborating on interesting JavaScript projects
* ⚡  I moonlight as a super hero`;

  const { state, dispatch } = useContext(StateContext);

  return (
    <>
      {/* First Section */}
      <section className="w-full flex items-center bg-light-100 dark:bg-dark-800 min-h-screen relative">
        <article className="container mx-auto flex flex-col items-center gap-y-4 px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-center leading-tight mb-0">
            Create an amazing
            <br />
            <span className="text-brand">GitHub profile</span> in minutes
          </h1>
          <p className="text-lg text-center">
            Show off your skills, experience and projects. Generate markdown for
            your profile with just a few clicks!
          </p>
          <div className="flex items-center gap-x-4">
            <button className="btn-gray btn-sm sm:btn-md md:btn-lg">
              Visit Repo (Developers)
            </button>
            <button className="btn-brand btn-sm sm:btn-md md:btn-lg">
              Create Profile
            </button>
          </div>
        </article>
      </section>
      {/* Second Section */}
      <section className="z-10 w-full flex items-center bg-light-100 dark:bg-dark-800 h-auto -mt-20">
        <article className="container mx-auto flex flex-col items-center px-6">
          <div className="w-full sm:w-4/5 flex relative">
            <div className="absolute w-full h-full bg-gradient-to-t dark:from-dark-800 from-light-100"></div>

            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/screenshot.png"
              className="overflow-hidden rounded-md shadow-dark-900/5"
              width="100%"
            />
          </div>
        </article>
      </section>
      {/* Third Section */}
      <section className="w-full flex items-center bg-light-100 dark:bg-dark-800 py-24">
        <article className="container mx-auto flex-col flex items-start px-6 sm:px-24">
          <div className="flex flex-col md:flex-row w-full items-center gap-x-8">
            <div className="flex flex-col w-full md:w-1/2 items-center md:items-start gap-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-0">
                Show off your <span className="text-brand">skills</span>
              </h2>
              <p className="text-lg text-center md:text-left">
                Select from over 60 core languages, frameworks, backend
                technologies and web 3 tech.
              </p>
            </div>
            <div className="flex flex-col gap-y-6 w-full md:w-1/2 items-end">
              <div className="grid grid-cols-5 gap-8 md:gap-4">
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-8 md:gap-4">
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-8 md:gap-4">
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored.svg"
                    width="100%"
                    className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-dark.svg"
                    width="100%"
                    className="dark:flex hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-8 md:gap-4">
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flutter-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
                    width="100%"
                    className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-dark.svg"
                    width="100%"
                    className="hidden dark:flex scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-8 md:gap-4">
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/swift-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dart-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/svelte-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-auto md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* Fourth Section */}
      <section className="w-full flex items-center bg-light-100 dark:bg-dark-800 py-24">
        <article className="container mx-auto flex-col flex items-start justify-center px-6 md:px-24 sm:px-12">
          <div className="flex flex-col-reverse md:flex-row w-full items-center gap-x-8 gap-y-8">
            <div className="flex w-full md:w-1/2 flex-col gap-y-6 items-center flex-wrap">
              <div className="flex gap-x-4">
                <div className="w-10 sm:w-14">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/polywork.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-10 sm:w-14">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/facebook.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-10 sm:w-14">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-10 sm:w-14">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/hashnode.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-10 sm:w-14">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/codesandbox.svg"
                    width="100%"
                    className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/codesandbox-dark.svg"
                    width="100%"
                    className="dark:flex hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
                <div className="w-10 sm:w-14">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitch.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
              </div>

              <div className="flex gap-x-4">
                <div className="w-10 sm:w-14">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/stackoverflow.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>

                <div className="w-10 sm:w-14">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/youtube.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>

                <div className="w-10 sm:w-14">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>

                <div className="w-10 sm:w-14">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/dribbble.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
              </div>

              <div className="flex gap-x-4">
                <div className="w-10 sm:w-14">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>

                <div className="w-10 sm:w-14">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/medium.svg"
                    width="100%"
                    className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/medium-dark.svg"
                    width="100%"
                    className="dark:flex hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full md:w-1/2 flex-col md:items-start items-center gap-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-0">
                Share your <span className="text-brand">socials</span>
              </h2>
              <p className="text-lg text-center md:text-left">
                Add links to all of your social profiles and blogs in seconds.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Fourth Section */}
      <section className="w-full flex items-center bg-light-100 dark:bg-dark-800 py-24">
        <article className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-24 sm:px-12">
          <div className="flex w-full md:w-1/2 flex-col items-center md:items-start gap-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-0">
              Add some <span className="text-brand">stats</span>
            </h2>
            <p className="text-lg text-center md:text-left">
              Show visitors some key facts through charts, graphs and badges.
            </p>
          </div>

          <div className="w-full md:w-1/2 block relative">
            <div className="block relative h-48 sm:h-80 overflow-hidden">
              <Image
                src="/stats-illustration.svg"
                layout="fill"
                className="object-fit"
              />
            </div>
          </div>
        </article>
      </section>

      {/* Fourth Section */}
      <section className="w-full flex items-center bg-light-100 dark:bg-dark-800 py-24">
        <article className="container mx-auto flex flex-col items-center justify-center px-6 md:px-48 gap-x-8">
          <div className="flex w-full flex-col items-center gap-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-0">
              Copy your <span className="text-brand">snippet</span>
            </h2>
            <p className="text-lg text-center">
              When you're done, copy your profile code and you're ready to go!
            </p>
          </div>

          <div className="w-full relative">
            <SyntaxHighlighter language="markdown" style={nord} showLineNumbers>
              {codeString}
            </SyntaxHighlighter>
          </div>
        </article>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
