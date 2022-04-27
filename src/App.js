import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About/About";
import Biography from "./pages/Biography";
import Characters from "./pages/Characters";
import Contacts from "./pages/Contacts";
import Main from "./pages/Main/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        {/* <Route path="bio/:id" element={<Biography />} /> */}
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:id" element={<Biography />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
