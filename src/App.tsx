import { Routes, Route } from "react-router-dom";
import { AboutScreen, ContactScreen, HomeScreen } from "./screens";
import { Footer, Header } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index path="/" element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="contact" element={<ContactScreen />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
