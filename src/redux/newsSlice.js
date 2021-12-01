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
    all: {
        articles : []
    },
  },
  reducers: {
    updateCarousel: (state, action) => {
        state.carousel = action.payload;
        state.all.articles.push(action.payload.articles);
    },
    updateFootball: (state, action) => {
        state.football = action.payload;
        state.all.articles.push(action.payload.articles);
    },
    updateBasketball: (state, action) => {
        state.basketball = action.payload;
        state.all.articles.push(action.payload.articles);
    },
    updateOther: (state, action) => {
        state.other = action.payload;
        state.all.articles.push(action.payload.articles);
    },
    updateLatest: (state, action) => {
        state.latest = action.payload;
        state.all.articles.push(action.payload.articles);
    },
    updateSingle: (state, action) => {
        // console.log("api", action.payload[0])
        const article = state.all.articles.filter(article => article.id === action.payload[0].id);
        if (article.length === 0 ){
            state.all.articles.push(action.payload[0]);
        } else {
            state.all.articles[state.all.articles.indexOf(article[0])] = action.payload[0];
        }
    },
  },
});

export const { updateCarousel, updateFootball, updateBasketball, updateOther, updateLatest, updateSingle } = newsSlice.actions;

export const selectCarousel = (state) => state.news.carousel;
export const selectFootball = (state) => state.news.football;
export const selectBasketball = (state) => state.news.basketball;
export const selectOther = (state) => state.news.other;
export const selectLatest = (state) => state.news.latest;

export default newsSlice.reducer;