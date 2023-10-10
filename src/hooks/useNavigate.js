import * as Router from "react-router-dom";


export const useNavigate = (route) => {
  const nav = Router.useNavigate();
  nav(route)
}