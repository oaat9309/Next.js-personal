import Image from "next/image";
import Link from "next/link";

const ProjectPreview = () => {
  const title: string = "Movie Search App";
  const desc: string = "Movie App with React";
  const linkUrl: string = "/Movie_App";

  return (
    <div className="flex gap-4">
      <div className="relative w-24 h-16">
        <Image src={"/movieApp.jpeg"} alt={title} layout="fill" />
      </div>
      <div className="my-auto">
        <Link href={linkUrl}>
          <a className="font-bold underline hover:text-indigo-600">{title}</a>
        </Link>
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default ProjectPreview;
