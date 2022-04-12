import type { NextPage } from "next";
import Profile from "../components/Profile";
import ProjectPreview from "../components/Project_Preview";

const Home: NextPage = () => {
  return (
    <div>
      <Profile />
      <div className="mt-4">
        <ProjectPreview />
      </div>
    </div>
  );
};

export default Home;
