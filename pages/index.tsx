import type { NextPage } from "next";
import Profile from "../components/Profile";
import ProjectPreview, {
  ProjectPreviewInterface,
} from "../components/Project_Preview";

const Home: NextPage = () => {
  const projectMetaDataArray = [];

  projectMetaDataArray.push({
    title: "React_Movie_App",
    desc: "Movie Searching App based on React",
    linkUrl: "/React_Movie_App",
    image: "/React_Movie_App.jpeg",
  });

  projectMetaDataArray.push({
    title: "Zoom Clone Coding",
    desc: "Zoom Clone Coding using WebSocket",
    linkUrl: "/Zoom_Clone",
    image: "/zoom.jpeg",
  });

  const projectPreviewElements = [];
  /* <ProjectPreview {...projectPreviewData} /> */

  for (let i = 0; i < projectMetaDataArray.length; i++) {
    const metaData = projectMetaDataArray[i];
    const element = <ProjectPreview {...metaData} />;
    projectPreviewElements.push(element);
  }

  return (
    <div>
      <Profile />
      <div className="mt-4 flex flex-col gap-4">{projectPreviewElements}</div>
    </div>
  );
};

export default Home;
