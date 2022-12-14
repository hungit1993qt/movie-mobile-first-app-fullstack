import React, { useState } from "react";
import styles from "Assets/SCSS/SearchNavbar/SearchNavbar.module.scss";
import { useNavigate } from "react-router-dom";
const SearchNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["search"]}>
      <div className={styles["input-search"]}>
        <i className="fa fa-search"></i>
        <input type="text" placeholder="Search by name movie..." />
        <i className="fa fa-times-circle"></i>
      </div>
      <div className={styles["list-movies"]}>
        <div className={styles["movie-items"]}>
          <img src="images/p1.jpg" alt=" " />
          <div className={styles["movie-content"]}>
            <span className={styles["movie-name"]}>The War 2 Monter </span>
            <span className={styles["movie-description"]}>
              Seat &rsaquo; D3, D4 <br />
              Address &rsaquo; CGV HCM
            </span>
            <span className={styles["movie-description"]}>
              14:30 - 20/09/2022
            </span>
          </div>
        </div>
        <div className={styles["movie-items"]}>
          <img src="images/p2.jpg" alt=" " />
          <div className={styles["movie-content"]}>
            <span className={styles["movie-name"]}>The War 2 Monter </span>
            <span className={styles["movie-description"]}>
              Seat &rsaquo; A1, A2 <br />
              Address &rsaquo; VINCOM HCM
            </span>
            <span className={styles["movie-description"]}>
              10:30 - 25/09/2022
            </span>
          </div>
        </div>
        <div className={styles["movie-items"]}>
          <img src="images/p3.jpg" alt=" " />
          <div className={styles["movie-content"]}>
            <span className={styles["movie-name"]}>A House is perfect</span>
            <span className={styles["movie-description"]}>
              Seat &rsaquo; A1, A2 <br />
              Address &rsaquo; VINCOM HCM
            </span>
            <span className={styles["movie-description"]}>
              10:30 - 25/09/2022
            </span>
          </div>
        </div>
        <div className={styles["movie-items"]}>
          <img src="images/p1.jpg" alt=" " />
          <div className={styles["movie-content"]}>
            <span className={styles["movie-name"]}>The War 2 Monter </span>
            <span className={styles["movie-description"]}>
              Seat &rsaquo; D1, D2, D3, D4, D5 <br />
              Address &rsaquo; CINIMAX H?? N???i
            </span>
            <span className={styles["movie-description"]}>
              10:30 - 25/09/2022
            </span>
          </div>
        </div>
        <div className={styles["movie-items"]}>
          <img src="images/p2.jpg" alt=" " />
          <div className={styles["movie-content"]}>
            <span className={styles["movie-name"]}>The War 2 Monter </span>
            <span className={styles["movie-description"]}>
              Seat &rsaquo; A1, A2 <br />
              Address &rsaquo; VINCOM HCM
            </span>
            <span className={styles["movie-description"]}>
              10:30 - 25/09/2022
            </span>
          </div>
        </div>
        <div className={styles["movie-items"]}>
          <img src="images/p3.jpg" alt=" " />
          <div className={styles["movie-content"]}>
            <span className={styles["movie-name"]}>A House is perfect</span>
            <span className={styles["movie-description"]}>
              Seat &rsaquo; A1, A2 <br />
              Address &rsaquo; VINCOM HCM
            </span>
            <span className={styles["movie-description"]}>
              10:30 - 25/09/2022
            </span>
          </div>
        </div>
        <div className={styles["movie-items"]}>
          <img src="images/p2.jpg" alt=" " />
          <div className={styles["movie-content"]}>
            <span className={styles["movie-name"]}>The War 2 Monter </span>
            <span className={styles["movie-description"]}>
              Seat &rsaquo; A1, A2 <br />
              Address &rsaquo; VINCOM HCM
            </span>
            <span className={styles["movie-description"]}>
              10:30 - 25/09/2022
            </span>
          </div>
        </div>
        <div className={styles["movie-items"]}>
          <img src="images/p3.jpg" alt=" " />
          <div className={styles["movie-content"]}>
            <span className={styles["movie-name"]}>A House is perfect</span>
            <span className={styles["movie-description"]}>
              Seat &rsaquo; A1, A2 <br />
              Address &rsaquo; VINCOM HCM
            </span>
            <span className={styles["movie-description"]}>
              10:30 - 25/09/2022
            </span>
          </div>
        </div>
        <div className={styles["movie-items"]}>
          <img src="images/p2.jpg" alt=" " />
          <div className={styles["movie-content"]}>
            <span className={styles["movie-name"]}>The War 2 Monter </span>
            <span className={styles["movie-description"]}>
              6* &rsaquo; 1h 44m
            </span>
            <span className={styles["movie-description"]}>06-10-2022</span>
          </div>
        </div>
        <div className={styles["movie-items"]}>
          <img src="images/p3.jpg" alt=" " />
          <div className={styles["movie-content"]}>
            <span className={styles["movie-name"]}>A House is perfect</span>
            <span className={styles["movie-description"]}>
              6* &rsaquo; 1h 44m
            </span>
            <span className={styles["movie-description"]}>06-10-2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNavbar;
