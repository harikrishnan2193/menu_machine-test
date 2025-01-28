import { Route, Routes } from "react-router-dom";
import Menus from "./pages/Menus";
import Footer from "./components/Footer";
import AddItems from "./pages/AddItems";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menus/>} />
        <Route path="addItems" element={<AddItems/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
