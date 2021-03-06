import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import projectImage from "../public/React_Movie_App.jpeg";

const MovieApp: NextPage = () => {
  return (
    <div>
      <h1 className="text-xl text-indigo-600 mb-4 font-bold">
        React Movie App
      </h1>
      <Image src={projectImage} alt="" />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="mt-4">
        <Link href="/">
          <a className="font-bold underline hover:text-indigo-600">Back</a>
        </Link>
      </div>
    </div>
  );
};

export default MovieApp;
