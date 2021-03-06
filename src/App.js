import { Route, Routes } from "react-router-dom";
import CharacterContextProvider from "./CharacterContextProvider";
import Layout from "./components/Layout";
import About from "./pages/About";
import Biography from "./pages/Biography";
import Characters from "./pages/Characters";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  return (
    <CharacterContextProvider>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="characters" element={<Characters />} />
          <Route path="characters/:id" element={<Biography />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </CharacterContextProvider>
  );
}

export default App;
