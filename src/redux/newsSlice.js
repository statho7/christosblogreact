import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    carousel: {
        articles : [],
        numArticles: 0,
        pending: false,
        error: false
    },
    football: {
        articles : [],
        numArticles: 0,
        pending: false,
        error: false
    },
    basketball: {
        articles : [],
        numArticles: 0,
        pending: false,
        error: false
    },
    other: {
        articles : [],
        numArticles: 0,
        pending: false,
        error: false
    },
    latest: {
        articles : [],
        numArticles: 0,
        pending: false,
        error: false
    },
  },
  reducers: {
    updateCarousel: (state, action) => {
        state.carousel = action.payload;
    },
    updateFootball: (state, action) => {
        state.football = action.payload;
    },
    updateBasketball: (state, action) => {
        state.basketball = action.payload;
    },
    updateOther: (state, action) => {
        state.other = action.payload;
    },
    updateLatest: (state, action) => {
        state.latest = action.payload;
    },
  },
});

export const { updateCarousel, updateFootball, updateBasketball, updateOther, updateLatest } = newsSlice.actions;

export const selectCarousel = (state) => state.news.carousel;
export const selectFootball = (state) => state.news.football;
export const selectBasketball = (state) => state.news.basketball;
export const selectOther = (state) => state.news.other;
export const selectLatest = (state) => state.news.latest;

export default newsSlice.reducer;