import { Routes, Route } from "react-router-dom";
import { AboutScreen, ContactScreen, HomeScreen } from "./screens";
import { Header } from "./components";

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="content">
        <main>
          <Routes>
            <Route index path="/" element={<HomeScreen />} />
            <Route path="about" element={<AboutScreen />} />
            <Route path="contact" element={<ContactScreen />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
