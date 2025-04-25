import { Profile } from "../homeSections/Profile";
import { Education } from "../homeSections/Education";
import { Skills } from "../homeSections/Skills";
import { Project } from "../homeSections/Project";

export const Home = () => {
  return (
    <div>
      <Profile />
      <Education />
      <Skills />
      <Project />
    </div>
  );
};
