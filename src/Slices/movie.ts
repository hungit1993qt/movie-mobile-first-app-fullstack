import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { number } from "yup";
import { Movie } from "../Interface/movie";
import { CinemaBrand } from "../Interface/CinemaBrand";
import movieAPI from "../Services/movieAPI";
interface State {
  movies: Movie[] | null;
  cinemaBrand: CinemaBrand[] | null;
  detailMovie: Movie | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: State = {
  movies: null,
  cinemaBrand: null,
  detailMovie: null,
  isLoading: false,
  error: null,
};
// thunk actions
export const getAllMovie = createAsyncThunk("movie/getAllMovie", async () => {
  try {
    const data = await movieAPI.getAllMovie();
    return data;
  } catch (error) {
    throw error;
  }
});

export const getAllCinemaBrand = createAsyncThunk(
  "movie/getAllCinemaBrand",
  async () => {
    try {
      const data = await movieAPI.getAllCinemaBrand();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const getMovieDetails = createAsyncThunk(
  "movie/getMovieDetails",
  async (slugMovie: string) => {
    try {
      const data = await movieAPI.getMovieDetails(slugMovie);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //getAllMovie
    builder.addCase(getAllMovie.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllMovie.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload;
    });
    builder.addCase(getAllMovie.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error as any;
    });

    //getAllCinemaBrand
    builder.addCase(getAllCinemaBrand.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCinemaBrand.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.cinemaBrand = payload;
    });
    builder.addCase(getAllCinemaBrand.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error as any;
    });

    //getMovieDetail
    builder.addCase(getMovieDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovieDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.detailMovie = payload;
    });
    builder.addCase(getMovieDetails.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error as any;
    });
  },
});
// export actions
// export reducer
export default movieSlice.reducer;
