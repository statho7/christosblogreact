import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    carousel: {
        articles : [],
        pending: false,
        error: false
    },
    football: {
        articles : [],
        pending: false,
        error: false
    },
    basketball: {
        articles : [],
        pending: false,
        error: false
    },
    other: {
        articles : [],
        pending: false,
        error: false
    },
    latest: {
        articles : [],
        pending: false,
        error: false
    },
  },
  reducers: {
    updateCarousel: (state, action) => {
        state.carousel.pending = true;
    },
    updateSuccess: (state, action) => {
        state.carousel.pending = false;
        state.carousel.articles = action.payload;
    },
    updateError: (state, action) => {
        state.carousel.error = true;
        state.carousel.pending = false;
    },
  },
});

export const { updateStart, updateSuccess, updateError } = newsSlice.actions;

export const selectCarousel = (state) => state.news.carousel;
export const selectFootball = (state) => state.news.football;
export const selectBasketball = (state) => state.news.basketball;
export const selectOther = (state) => state.news.other;
export const selectLatest = (state) => state.news.latest;

export default newsSlice.reducer;