import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "../hooks/useNavigate";
export const Menu = () => {
  useEffect(() => {
    const handleKeyDown = ({ keyCode }) => {
      if (keyCode === 27) close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  function close() {
    useFetch("removeFocus").then(response => {
      if (response) useNavigate("/")
    });
  }
  return (
    <main className="">
      
    </main>
  );
};

