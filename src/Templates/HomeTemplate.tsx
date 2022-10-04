//tsrfce
import { Outlet } from "react-router-dom";
import HeaderHome from "Components/HeaderHome/HeaderHome";
import "Assets/CSS/index.css";

function HomeTemplate() {
  return (
    <div>
      <HeaderHome />
      <Outlet />
      <div className="fisrt-mobile">
        <img src="images/mobile_application.svg" alt="" />
        <h1>Website only mobile first</h1>
      </div>
    </div>
  );
}

export default HomeTemplate;
