import React, { useState } from "react";
import styles from "Assets/SCSS/Navbar/Login.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm, FieldErrors } from "react-hook-form";
import { Login } from "Interface/Cinema copy";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { postUserLogin } from "Slices/auth";

const Change = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    // defaultValues: Khai báo giá trị mặc định cho các input trong form
    defaultValues: {
      accountUser: "",
      passwordUser: "",
    },
    // mode: cách validation được trigger (default là submit)
  });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const onSubmit = (values: Login) => {
    dispatch(postUserLogin(values));
  };
  const { auth } = useSelector((state: RootState) => state.auth);
  
  const onError = (errorF: FieldErrors<Login>) => {
    console.log(errorF);
  };
  return (
    <div className={styles["popup-information"]}>
      <div className={styles["popup-inner"]}>
        <button onClick={() => navigate("/")} className={styles["close-btn"]}>
          <i className="fa fa-times-circle"></i>
        </button>
        <div className={styles["Information"]}>
          <div className={styles["title-info"]}>
            <i className="fa fa-sign-in-alt"></i>
            <b>LOGIN</b>
          </div>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div>
              <label htmlFor="accountUser">ACCOUNT</label>
              <input
                placeholder=""
                type="text"
                {...register("accountUser", {
                  // validations
                  required: {
                    value: true,
                    message: "Account cannot be empty",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9]{5,}$/,
                    message:
                      "Account must include uppercase, lowercase, number and at least 5 characters",
                  },
                })}
                id="accountUser"
              />
              {errors.accountUser && (
                <span className="">{errors.accountUser?.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="passwordUser">PASSWORD</label>
              <input
                type="password"
                placeholder=""
                {...register("passwordUser", {
                  required: {
                    value: true,
                    message: "Password cannot be empty",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message:
                      "Password must be at least one letter, one number and at least 6 characters",
                  },
                })}
                id="passwordUser"
              />
              {errors.passwordUser && (
                <span className="">{errors.passwordUser?.message}</span>
              )}
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Change;
