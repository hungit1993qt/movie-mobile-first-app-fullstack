import { Login } from "Interface/Cinema copy";
import axiosClient from "./axiosClient";

const authAPI = {
  postUserLogin: ({ accountUser, passwordUser }: Login) => {
    return axiosClient.post("user/login/", {
      accountUser,
      passwordUser,
    });
  },
  postRegisterUser: (registerValue: any) => {
    return axiosClient.post("QuanLyNguoiDung/DangKy", registerValue);
  },
  getBookedUser: () => {
    return axiosClient.post("QuanLyNguoiDung/ThongTinTaiKhoan");
  },
};

export default authAPI;
