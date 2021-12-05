/* eslint-disable no-loop-func */
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
        articles : [],
        numArticles: 0,
        pending: false,
        error: false
    },
  },
  reducers: {
    updateCarousel: (state, action) => {
        state.carousel = action.payload;
        for (var index in action.payload.articles) {
            if (state.all.articles.filter(article => article.id === action.payload.articles[index].id).length === 0){
                state.all.articles.push(action.payload.articles[index]);
            }
        }
    },
    updateFootball: (state, action) => {
        state.football = action.payload;
        for (var index in action.payload.articles) {
            if (state.all.articles.filter(article => article.id === action.payload.articles[index].id).length === 0){
                state.all.articles.push(action.payload.articles[index]);
            }
        }
    },
    updateBasketball: (state, action) => {
        state.basketball = action.payload;
        for (var index in action.payload.articles) {
            if (state.all.articles.filter(article => article.id === action.payload.articles[index].id).length === 0){
                state.all.articles.push(action.payload.articles[index]);
            }
        }
    },
    updateOther: (state, action) => {
        state.other = action.payload;
        for (var index in action.payload.articles) {
            if (state.all.articles.filter(article => article.id === action.payload.articles[index].id).length === 0){
                state.all.articles.push(action.payload.articles[index]);
            }
        }
    },
    updateLatest: (state, action) => {
        state.latest = action.payload;
        for (var index in action.payload.articles) {
            if (state.all.articles.filter(article => article.id === action.payload.articles[index].id).length === 0){
                state.all.articles.push(action.payload.articles[index]);
            }
        }
    },
    updateSingle: (state, action) => {
        const article = state.all.articles.filter(article => article.id === action.payload.article.id);
        state.all.pending = action.payload.pending;
        state.all.error = action.payload.error;
        if (article.length === 0 ){
            state.all.articles.push(action.payload.article);
        } else {
            state.all.articles[state.all.articles.indexOf(article[0])] = action.payload.article;
        }
    },
    updateAuthor: (state, action) => {
        const authorArticles = state.all.articles.filter(article => action.payload.articles.indexOf(article) !== -1);
        state.all.pending = action.payload.pending;
        state.all.error = action.payload.error;
        for (var index in action.payload.articles) {
            if (state.all.articles.filter(article => article.id === action.payload.articles[index].id).length === 0){
                state.all.articles.push(action.payload.articles[index]);
            }
        }
    },
  },
});

export const { updateCarousel, updateFootball, updateBasketball, updateOther, updateLatest, updateSingle, updateAuthor } = newsSlice.actions;

export const selectCarousel = (state) => state.news.carousel;
export const selectFootball = (state) => state.news.football;
export const selectBasketball = (state) => state.news.basketball;
export const selectOther = (state) => state.news.other;
export const selectLatest = (state) => state.news.latest;

export default newsSlice.reducer;