import styles from "Assets/SCSS/Navbar/NavbarFooter.module.scss";
import { useNavigate } from "react-router-dom";
const NavbarFooter = () => {
  const navigate = useNavigate();
  return (
    <section className={styles["navbar-footer"]}>
      <i
        onClick={() => navigate(-1)}
        className="fa fa-arrow-alt-circle-left"
      ></i>
      <i onClick={() => navigate("/search")} className="fa fa-search"></i>
      <i onClick={() => navigate("/")} className="fa fa-home"></i>
      <img src="images/avatar.jpg" alt="" />
    </section>
  );
};

export default NavbarFooter;
