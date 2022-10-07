import React, { useState } from "react";
import styles from "Assets/SCSS/Navbar/Information.module.scss";
import { useNavigate } from "react-router-dom";
import Change from "./Change";
type Props = {
  trigger: boolean;
  setTrigger: any;
};

const Information = (props: Props) => {
  const [showPopupInfoChange, setShowPopupInfoChange] = useState(false);
  const navigate = useNavigate();
  return props.trigger ? (
    <div className={styles["popup-information"]}>
      <Change trigger={showPopupInfoChange} setTrigger={setShowPopupInfoChange} />
      <div className={styles["popup-inner"]}>
        <button
          onClick={() => props.setTrigger(false)}
          className={styles["close-btn"]}
        >
          <i className="fa fa-times-circle"></i>
        </button>
        <div className={styles["Information"]}>
          <div className={styles["title-info"]}>
            <i className="fa fa-info-circle"></i>
            <b>INFORMATION</b>
          </div>
          <form action="">
            <div>
              <label htmlFor="account">ACCOUNT</label>
              <b>hungit1993qt <i className="fa fa-edit"></i></b>
            </div>
            <div>
              <label htmlFor="account">PASSWORD</label>
              <b>*********** <i onClick={()=>setShowPopupInfoChange(true)} className="fa fa-edit"></i></b>
            </div>
            <div>
              <label htmlFor="account">EMAIL</label>
              <b>hungit1993qt@gmail.com <i className="fa fa-edit"></i></b>
            </div>
            <div>
              <label htmlFor="account">PHONE</label>
              <b>0999999999 <i className="fa fa-edit"></i></b>
            </div>

          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default Information;
