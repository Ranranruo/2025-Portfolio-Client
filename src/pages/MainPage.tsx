import AboutMe from "../components/main/about/AboutMe";
import Visual from "../components/main/visual/Visual";
import MainLayout from "../layouts/main/MainLayout";

const MainPage = () => {
  return (
    <MainLayout>
      <Visual />
      <AboutMe />
    </MainLayout>
  );
}

export default MainPage;