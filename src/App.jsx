import { Menu } from "./components/Menu/Menu";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { GlobalStyle } from "./style/GlobalStyle";

export default function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const eventListener = ({ data }) => {
      if (data) {
        navigate(data.setVisible ? "/ui" : "/")
      }
    };
    window.addEventListener("message", eventListener);
    return () => {
      window.removeEventListener("message", eventListener);
    };
  }, []);
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<></>}/>
        <Route path="/ui" element={<Menu/>}/>
      </Routes>
    </>
  );
}
