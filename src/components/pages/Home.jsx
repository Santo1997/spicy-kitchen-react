import Hero from "../layouts/home/Hero";
import Intro from "../layouts/home/Intro";
import HMenu from "../layouts/home/HMenu";
import GalleryView from "../layouts/home/GalleryView";
import Review from "../layouts/home/Review";
import Visit from "../layouts/home/Visit";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <HMenu />
      <GalleryView />
      <Review />
      <Visit />
    </>
  );
};

export default Home;
