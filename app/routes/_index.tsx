import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="w-full max-w-sm lg:max-w-full lg:flex">
      <div
        className="flex-none h-48 overflow-hidden text-center bg-cover border-b border-l border-r rounded-t rounded-t lg:h-auto lg:w-[30rem] lg:rounded-t-none lg:rounded-l"
        style={{
          borderRadius: "40%",
          backgroundImage: "url('/img/bellaToHero.JPG')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="flex flex-col justify-between p-4 leading-normal border-b border-l border-r border-gray-400 rounded-t rounded-b bg-grey lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
        <div className="mb-8 ">
          <p className="flex items-center text-sm text-white">
            <svg
              className="w-3 h-3 mr-2 text-gray-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <br />
          <div className="mb-2 text-xl font-bold text-white">
            Can Remix make you a better developer? Well...
            <p> 👈🏼 This is me after trying Remix</p>
            <br />
            <p className="text-base text-gray-700">
              This is a remix app with tailwind css and typescript. Below is a
              counter that uses react hooks. Yes, you can use useState right
              away.. Here is how you can start:
              <br />
              <a
                target="_blank"
                href="https://remix.run/docs/en/1.19.3/tutorials/blog"
                rel="noreferrer"
                className="inline-block px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700">
                Quickstart
              </a>
            </p>
            <div className="flex items-center justify-center h-screen mt-[-30%] ">
              <button
                onClick={decrement}
                className="p-2 px-4 mx-2 font-bold text-white bg-red-500 rounded hover:bg-red-500">
                -
              </button>
              <span className="text-xl">{count}</span>
              <button
                onClick={increment}
                className="p-2 px-4 py-2 mx-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="leading-none text-white">Bella L</p>
              <p className="text-gray-600">Dec 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix! Checkout my counter!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <div className="p-2 mx-2">
        <Counter />
      </div>
      ;
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer">
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer">
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
