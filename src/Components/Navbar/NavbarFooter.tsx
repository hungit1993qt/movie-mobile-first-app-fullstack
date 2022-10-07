import styles from "Assets/SCSS/Navbar/NavbarFooter.module.scss";
import stylesuser from "Assets/SCSS/Navbar/NavbarUser.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Information from "./Information";
const NavbarFooter = () => {
  const navigate = useNavigate();
  const [showNavbarUser, setShowNavbarUser] = useState(false);
  const [showPopupInfo, setShowPopupInfo] = useState(false);
  return (
    <>
      <section className={styles["navbar-footer"]}>
        <Information trigger={showPopupInfo} setTrigger={setShowPopupInfo} />
        <i
          onClick={() => {
            setShowNavbarUser(false);
            navigate(-1);
          }}
          className="fa fa-arrow-alt-circle-left"
        ></i>
        <i
          onClick={() => {
            setShowNavbarUser(false);
            navigate("/search");
          }}
          className="fa fa-search"
        ></i>
        <i
          onClick={() => {
            setShowNavbarUser(false);
            navigate("/");
          }}
          className="fa fa-home"
        ></i>
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
        <div className={stylesuser["popup-inner"]}>
          <div className={stylesuser["info-user"]}>
            <img src="images/avatar.jpg" alt="" />
            <div className={stylesuser["info"]}>
              <b>Mr.Hung</b>
              <span>(Client)</span>
            </div>
          </div>
          <div className={stylesuser["btn-func"]}>
            <div onClick={()=>setShowPopupInfo(true)} className={stylesuser["btn-items"]}>
              <i className="fa fa-info-circle"></i>
              <b>Information</b>
            </div>
            <div
              onClick={() => navigate("/list-checkout")}
              className={stylesuser["btn-items"]}
            >
              <i className="fa fa-check-circle"></i>
              <b>List booked</b>
            </div>
            <div className={stylesuser["btn-items"]}>
              <i className="fab fa-facebook-messenger"></i>
              <b>Messages</b>
            </div>
            <div className={stylesuser["btn-items"]}>
              <i className="fa fa-phone-volume"></i>
              <b>Hotline</b>
            </div>
            <div className={stylesuser["btn-items"]}>
              <i className="fa fa-mail-bulk"></i>
              <b>Sent mail</b>
            </div>
            <div className={stylesuser["btn-items"]}>
              <i className="fa fa-cog"></i>
              <b>Settings</b>
            </div>
            <div className={stylesuser["btn-items"]}>
              <i className="fa fa-sign-out-alt"></i>
              <b>Logout</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFooter;
