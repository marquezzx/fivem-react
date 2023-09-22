import { useEffect } from "react";
import * as S from "./Styled";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
export const Menu = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const handleKeyDown = ({ keyCode }) => {
      if (keyCode === 27) close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  function close() {
    useFetch("removeFocus").then(response => {
      if (response.data) navigate("/")
    });
  }
  return (
    <S.StyledMain>
    </S.StyledMain>
  );
};

