import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import projectImage from "../public/movieApp.jpeg";

const MovieApp: NextPage = () => {
  return (
    <div>
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
