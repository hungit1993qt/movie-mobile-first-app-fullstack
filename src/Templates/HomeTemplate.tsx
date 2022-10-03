//tsrfce
import { Outlet } from "react-router-dom";
import HeaderHome from "Components/HeaderHome/HeaderHome";
import "Assets/CSS/index.css";

function HomeTemplate() {
  return (
    <div>
      <HeaderHome />
      <Outlet />
    </div>
  );
}

export default HomeTemplate;
