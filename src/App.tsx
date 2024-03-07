import { About } from "./components/about";
import { Banner } from "./components/banner";
import { Depositions } from "./components/depositions";
import { PhotoGallery } from "./components/gallery";
import Header from "./components/header";
import { Proposals } from "./components/proposals";
import { SocialMedia } from "./components/socialMedia";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Proposals/>
      <PhotoGallery/>
      <Depositions/>
      <SocialMedia/>
    </>
  );
}

export default App;
