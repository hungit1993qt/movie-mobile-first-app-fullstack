import axiosClient from "./axiosClient";

const authAPI = {
  postUserLogin: ({ taiKhoan, matKhau }: any) => {
    return axiosClient.post("QuanLyNguoiDung/DangNhap", {
      taiKhoan,
      matKhau,
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
