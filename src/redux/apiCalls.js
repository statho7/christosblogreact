import axios from "axios";
import link from '../links.json'
import { updateCarousel, updateFootball, updateBasketball, updateOther, updateLatest } from "./newsSlice"

export const getCarousel = async (dispatch) => {
    dispatch(updateCarousel({
            articles : [],
            pending: true,
            error: false
        }));
    try {
        const res = await axios.get(link.link + "/api/GetCarousel");
        dispatch(updateCarousel({
            articles : res.data,
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateCarousel({
            articles : [],
            pending: false,
            error: true
        }));
    }
}

export const getFootballHome = async (dispatch) => {
    dispatch(updateFootball({
            articles : [],
            pending: true,
            error: false
        }));
    try {
        const res = await axios.get(link.link + "/api/GetHomePageNews/Ποδόσφαιρο");
        dispatch(updateFootball({
            articles : res.data,
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateFootball({
            articles : [],
            pending: false,
            error: true
        }));
    }
}

export const getBasketballHome = async (dispatch) => {
    dispatch(updateBasketball({
            articles : [],
            pending: true,
            error: false
        }));
    try {
        const res = await axios.get(link.link + "/api/GetHomePageNews/Καλαθοσφαίριση");
        dispatch(updateBasketball({
            articles : res.data,
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateBasketball({
            articles : [],
            pending: false,
            error: true
        }));
    }
}

export const getOtherHome = async (dispatch) => {
    dispatch(updateOther({
            articles : [],
            pending: true,
            error: false
        }));
    try {
        const res = await axios.get(link.link + "/api/GetHomePageNews/Άλλα");
        dispatch(updateOther({
            articles : res.data,
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateOther({
            articles : [],
            pending: false,
            error: true
        }));
    }
}

export const getLatest = async (dispatch) => {
    dispatch(updateLatest({
            articles : [],
            pending: true,
            error: false
        }));
    try {
        const res = await axios.get(link.link + "/api/GetLatestNews");
        dispatch(updateLatest({
            articles : res.data,
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateLatest({
            articles : [],
            pending: false,
            error: true
        }));
    }
}

export const getFootball = async (dispatch) => {
    dispatch(updateFootball({
            articles : [],
            pending: true,
            error: false
        }));
    try {
        const res = await axios.get(link.link + "/api/GetCategoryArticles/Ποδόσφαιρο");
        dispatch(updateFootball({
            articles : res.data,
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateFootball({
            articles : [],
            pending: false,
            error: true
        }));
    }
}

export const getBasketball = async (dispatch) => {
    dispatch(updateBasketball({
            articles : [],
            pending: true,
            error: false
        }));
    try {
        const res = await axios.get(link.link + "/api/GetCategoryArticles/Καλαθοσφαίριση");
        dispatch(updateBasketball({
            articles : res.data,
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateBasketball({
            articles : [],
            pending: false,
            error: true
        }));
    }
}

export const getOther = async (dispatch) => {
    dispatch(updateOther({
            articles : [],
            pending: true,
            error: false
        }));
    try {
        const res = await axios.get(link.link + "/api/GetCategoryArticles/Άλλα");
        dispatch(updateOther({
            articles : res.data,
            pending: false,
            error: false
        }));
    } catch (err) {
        dispatch(updateOther({
            articles : [],
            pending: false,
            error: true
        }));
    }
}