import { About } from "./components/about";
import { Banner } from "./components/banner";
import { Depositions } from "./components/depositions";
import { Dictionary } from "./components/dictionary";
import { Footer } from "../../components/footer";
import { PhotoGallery } from "./components/gallery";
import Header from "./components/header";
// import { Proposals } from "./components/proposals";
import { SocialMedia } from "./components/socialMedia";
import { Jingles } from "./components/jingle";

function Home() {
  return (
    <>
        <Header />
        <Banner />
        <Jingles />
        <About />
        {/* <Proposals /> */}
        <PhotoGallery />
        <Depositions />
        <Dictionary />
        <SocialMedia />
        <Footer />
    </>
  );
}

export default Home;
