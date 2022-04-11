import Image from "next/image";

const ProjectPreview = () => {
  const title: string = "Movie Search App";
  const desc: string = "Movie App with React";
  return (
    <div>
      <div className="relative w-32 h-32">
        <Image src={"/movieApp.jpeg"} alt={title} layout="fill" />
      </div>
      <a href={"/"} className="font-bold underline hover:text-indigo-600">
        {title}
      </a>
      <div>{desc}</div>
    </div>
  );
};

export default ProjectPreview;
