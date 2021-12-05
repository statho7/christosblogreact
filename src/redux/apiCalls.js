import axios from "axios";
import link from '../links.json'
import { updateCarousel, updateFootball, updateBasketball, updateOther, updateLatest, updateSingle } from "./newsSlice"

export const getCarousel = async (dispatch) => {
    dispatch(updateCarousel({
            articles : [],
            numArticles: 0,
            pending: true,
            error: false
        }));
    try {
        const res = await axios.get(link.link + "/api/GetCarousel");
        dispatch(updateCarousel({
            articles : res.data,
            numArticles: res.data.length,
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateCarousel({
            articles : [],
            numArticles: 0,
            pending: false,
            error: true
        }));
    }
}

export const getFootballHome = async (dispatch) => {
    dispatch(updateFootball({
            articles : [],
            numArticles: 0,
            pending: true,
            error: false
        }));
    try {
        const res = await axios.get(link.link + "/api/GetHomePageNews/Ποδόσφαιρο");
        dispatch(updateFootball({
            articles : res.data,
            numArticles: res.data.length,
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateFootball({
            articles : [],
            numArticles: 0,
            pending: false,
            error: true
        }));
    }
}

export const getBasketballHome = async (dispatch) => {
    dispatch(updateBasketball({
            articles : [],
            numArticles: 0,
            pending: true,
            error: false
        }));
    try {
        const res = await axios.get(link.link + "/api/GetHomePageNews/Καλαθοσφαίριση");
        dispatch(updateBasketball({
            articles : res.data,
            numArticles: res.data.length,
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateBasketball({
            articles : [],
            numArticles: 0,
            pending: false,
            error: true
        }));
    }
}

export const getOtherHome = async (dispatch) => {
    dispatch(updateOther({
            articles : [],
            numArticles: 0,
            pending: true,
            error: false
        }));
    try {
        const res = await axios.get(link.link + "/api/GetHomePageNews/Άλλα");
        dispatch(updateOther({
            articles : res.data,
            numArticles: res.data.length,
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateOther({
            articles : [],
            numArticles: 0,
            pending: false,
            error: true
        }));
    }
}

export const getLatest = async (dispatch) => {
    dispatch(updateLatest({
            articles : [],
            numArticles: 0,
            pending: true,
            error: false
        }));
    try {
        const res = await axios.get(link.link + "/api/GetLatestNews");
        dispatch(updateLatest({
            articles : res.data,
            numArticles: res.data.length,
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateLatest({
            articles : [],
            numArticles: 0,
            pending: false,
            error: true
        }));
    }
}

export const getFootball = async (dispatch) => {
    dispatch(updateFootball({
            articles : [],
            numArticles: 0,
            pending: true,
            error: false
        }));
    try {
        const res = await axios.get(link.link + "/api/GetCategoryArticles/Ποδόσφαιρο");
        dispatch(updateFootball({
            articles : res.data,
            numArticles: res.data.length,
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateFootball({
            articles : [],
            numArticles: 0,
            pending: false,
            error: true
        }));
    }
}

export const getBasketball = async (dispatch) => {
    dispatch(updateBasketball({
            articles : [],
            numArticles: 0,
            pending: true,
            error: false
        }));
    try {
        const res = await axios.get(link.link + "/api/GetCategoryArticles/Καλαθοσφαίριση");
        dispatch(updateBasketball({
            articles : res.data,
            numArticles: res.data.length,
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateBasketball({
            articles : [],
            numArticles: 0,
            pending: false,
            error: true
        }));
    }
}

export const getOther = async (dispatch) => {
    dispatch(updateOther({
            articles : [],
            numArticles: 0,
            pending: true,
            error: false
        }));
    try {
        const res = await axios.get(link.link + "/api/GetCategoryArticles/Άλλα");
        dispatch(updateOther({
            articles : res.data,
            numArticles: res.data.length,
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateOther({
            articles : [],
            numArticles: 0,
            pending: false,
            error: true
        }));
    }
}

export const getSingleArticle = async (dispatch, id) => {
    dispatch(updateSingle({
        article : {},
        pending: true,
        error: false
    }));
    try {
        const res = await axios.get(link.link + "/api/GetSingleArticle/" + id);
        dispatch(updateSingle({
            article : res.data[0],
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateSingle({
            article : {},
            pending: false,
            error: true
        }));
    }
}