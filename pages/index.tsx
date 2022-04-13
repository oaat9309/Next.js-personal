import type { NextPage } from "next";
import Profile from "../components/Profile";
import ProjectPreview, {
  ProjectPreviewInterface,
} from "../components/Project_Preview";

const Home: NextPage = () => {
  const projectPreviewData: ProjectPreviewInterface = {
    title: "React_Movie_App",
    desc: "Movie Searching App based on React",
    linkUrl: "/React_Movie_App",
    image: "/React_Movie_App.jpeg",
  };

  return (
    <div>
      <Profile />
      <div className="mt-4">
        <ProjectPreview {...projectPreviewData} />
      </div>
    </div>
  );
};

export default Home;
