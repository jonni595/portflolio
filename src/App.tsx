import { Routes, Route } from "react-router-dom";
import { IoArrowUp } from "react-icons/io5";
import ScrollToTop from "react-scroll-to-top";
import { AboutScreen, ContactScreen, HomeScreen } from "./screens";
import { Footer, Header } from "./components";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop
        smooth
        top={450}
        component={<IoArrowUp className="icon" />}
        style={{ borderRadius: "50%" }}
      />
      <main>
        <Routes>
          <Route index path="/" element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="contact" element={<ContactScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
