import { About } from "./components/about";
import { Banner } from "./components/banner";
import { Depositions } from "./components/depositions";
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
      <Depositions/>
    </>
  );
}

export default App;
