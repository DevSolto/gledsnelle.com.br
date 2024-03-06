import { About } from "./components/about";
import { Banner } from "./components/banner";
import { PhotoGallery } from "./components/gallery";
import Header from "./components/header";
import { Proposals } from "./components/proposals";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Proposals/>
      <PhotoGallery/>
    </>
  );
}

export default App;
