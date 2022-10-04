import styles from "Assets/SCSS/Navbar/NavbarFooter.module.scss";
const NavbarFooter = () => {
  return (
    <section className={styles["navbar-footer"]}>
      <i className="fa fa-arrow-alt-circle-left"></i>
      <i className="fa fa-search"></i>
      <i className="fa fa-home"></i>
      <img src="images/avatar.jpg" alt="" />
    </section>
  );
};

export default NavbarFooter;
