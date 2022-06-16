import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Biography from "./pages/Biography";
import Characters from "./pages/Characters";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { CHARACTER } from "./pages/Main/characters";

export const Context = createContext(null);

function App() {
  const [character, setCharacter] = useState(() => {
    return JSON.parse(localStorage.getItem("character")) || CHARACTER;
  });

  const handleLikeClick = (id) => {
    setCharacter((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, isLike: !item.isLike };
        }
        return item;
      })
    );
  };
  useEffect(() => {
    localStorage.setItem("character", JSON.stringify(character));
  }, [character]);

  return (
    <Context.Provider value={{ character, handleLikeClick }}>
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
    </Context.Provider>
  );
}

export default App;
