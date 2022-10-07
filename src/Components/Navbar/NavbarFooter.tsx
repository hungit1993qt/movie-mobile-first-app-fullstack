import styles from "Assets/SCSS/Navbar/NavbarFooter.module.scss";
import stylesuser from "Assets/SCSS/Navbar/NavbarUser.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NavbarFooter = () => {
  const navigate = useNavigate();
  const [showNavbarUser, setShowNavbarUser] = useState(false);
  return (
    <>
      <section className={styles["navbar-footer"]}>
        <i
          onClick={() => navigate(-1)}
          className="fa fa-arrow-alt-circle-left"
        ></i>
        <i onClick={() => navigate("/search")} className="fa fa-search"></i>
        <i onClick={() => navigate("/")} className="fa fa-home"></i>
        <img
          onClick={() => setShowNavbarUser(!showNavbarUser)}
          src="images/avatar.jpg"
          alt=""
        />
      </section>
      <div
        onClick={() => setShowNavbarUser(false)}
        className={
          showNavbarUser
            ? `${stylesuser["navbar-user"]} ${stylesuser["show-navbar-user"]}`
            : stylesuser["navbar-user"]
        }
      >
        <div className={stylesuser["popup-inner"]}></div>
      </div>
    </>
  );
};

export default NavbarFooter;
