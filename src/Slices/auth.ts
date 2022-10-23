import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../Services/authAPI";
import Swal from "sweetalert2";
import { ResultLogin } from "Interface/ResultLogin";
import { Login } from "Interface/Cinema copy";

// const message: string | null = "Hello"
// const number = message as string
interface State {
  auth: ResultLogin | null;
  message: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: State = {
  auth: JSON.parse(localStorage.getItem("account") as string) || null,
  message: null,
  isLoading: false,
  error: null,
};

// Viết actions login và register
export const postUserLogin = createAsyncThunk(
  "auth/login",
  async (values: Login) => {
    try {
      const response = await authAPI.postUserLogin(values);
      const data: ResultLogin = response.data;
      // Lưu thông tin user xuống localStorage
      if (!data) {
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: `${response}!`,
          footer:
            '<a href="register">You dont have an account yet, create now</a>',
        });
      } else {
        localStorage.setItem("user", JSON.stringify(data));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged in successfully!",
          showConfirmButton: false,
          timer: 2000,
        });
      }

      //  chỗ này set lại data đi
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.clear();
      state.auth = null;
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Đăng xuất thành công!",
        showConfirmButton: false,
        timer: 2000,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postUserLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postUserLogin.fulfilled, (state, { payload }) => {
      state.auth = payload;
    });
    builder.addCase(postUserLogin.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error as any;
    });
  },
});
export const { logOut } = authSlice.actions;
export default authSlice.reducer;
