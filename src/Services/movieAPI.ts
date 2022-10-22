import { Movie } from "../Interface/movie";
import axiosClient from "./axiosClient";

const movieAPI = {
  getAllMovie: () => {
    // Khai báo hàm call API dữ liệu trả về là Movie[]
    return axiosClient.get("movie/all/");
  },
  getAllCinema: () => {
    // Khai báo hàm call API dữ liệu trả về là Movie[]
    return axiosClient.get("cinema/all/");
  },
  getAllCinemaBrand: () => {
    // Khai báo hàm call API dữ liệu trả về là Movie[]
    return axiosClient.get("cinema-brand/all/");
  },
  // get API dữ liệu trả về Movie{}
  getMovieDetails: (slugMovie: string) => {
    return axiosClient.get("movie/detail/", {
      params: {
        slugMovie,
      },
    });
  },
  // get API dữ liệu trả về []
  getMovieShowTime: (maPhim: number) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        maPhim: maPhim,
      },
    });
  },
  getBanner: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },

  //get API dữ liệu trả về []
  getSeatTicket: (maLichChieu: number) => {
    return axiosClient.get("QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        maLichChieu: maLichChieu,
      },
    });
  },

  // Và những còn lại liên quan đến movie...
  addMovie: (movie: any) => {
    // Khi dữ liệu tải lên server có định dạng đặc biệt như File,..., ta cần chuyển thành dạng multipart/form-data bằng cách sử dụng đối tượng FormData
    const formData = new FormData();
    for (let key in movie) {
      formData.append(key, movie[key]);
    }
    formData.append("maNhom", "GP01");

    return axiosClient.post("QuanLyPhim/ThemPhimUploadHinh", formData);
  },
};

export default movieAPI;
