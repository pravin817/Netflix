import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

const NetflixSlice = createSlice({
  name: "netflix",
  initialState,
  extraReducers: (builders) => {},
  // reducers: {
  //     setMovies: (state, action) => {
  //         state.movies = action.payload;
  //     },
  //     setGenres: (state, action) => {
  //         state.genres = action.payload;
  //         state.genresLoaded = true;
  //     },
  // },
});

export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer,
  },
});
