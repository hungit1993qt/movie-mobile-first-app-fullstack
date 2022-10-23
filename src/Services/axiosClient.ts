import axios, { AxiosError } from "axios";
import store from "configStore";

// Setup cấu hình mặc định cho axios
const axiosClient = axios.create({
  baseURL: "https://hungit1993qt-movie-be.herokuapp.com/",
  headers: {
    token:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzNhZDQ3ZjA4YWI1MGIzMGNhM2EwMSIsImFkbWluIjpmYWxzZSwiaWF0IjoxNj3342Y0MzUyOTgf4LCJlegHAiOjE2Nj312312Y5NDQ5ODh9.3uw9T_ew9cmoMTYbixwMQFS8jPK74Ct8vPQVRBVLv_kds4324g",
  },
});

// Modify type
// axiosClient.get = <T>(url: string, config: AxiosRequestConfig) =>
//   axiosClient.get<any, T>(url, config);

// request interceptor
axiosClient.interceptors.request.use((config) => {
  // config là nội dung của request
  // ta có thể thay đổi nội dung của request trước khi nó được gửi lên server
  if (config.headers) {
    const { accessToken = "" } = (store.getState().auth as any) || {};
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  return config;
});

// response interceptor
axiosClient.interceptors.response.use(
  (reponse) => {
    // request thành công
    // thay đổi format của reponse trước khi trả ra cho nơi gọi request
    return reponse;
  },
  (error: AxiosError<{ content: string }>) => {
    // request thất bại
    // thay đổi format của error trước khi trả ra cho nơi gọi request
    return error.response?.data;
  }
);

export default axiosClient;
