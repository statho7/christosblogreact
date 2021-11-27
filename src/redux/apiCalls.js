import axios from "axios";
import { updateStart, updateSuccess, updateError } from "./newsSlice"

export const updateCarousel = async (news, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.get("/api/GetCarousel");
        dispatch(updateSuccess(res.data));
    } catch (err) {
        dispatch(updateError());
    }
}

export const updateFootballHome = async (news, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.get("/api/GetCarousel");
        dispatch(updateSuccess(res.data));
    } catch (err) {
        dispatch(updateError());
    }
}

export const updateBasketballHome = async (news, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.get("/api/GetCarousel");
        dispatch(updateSuccess(res.data));
    } catch (err) {
        dispatch(updateError());
    }
}

export const updateOtherHome = async (news, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.get("/api/GetCarousel");
        dispatch(updateSuccess(res.data));
    } catch (err) {
        dispatch(updateError());
    }
}

export const updateLatest = async (news, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.get("/api/GetLatestNews");
        dispatch(updateSuccess(res.data));
    } catch (err) {
        dispatch(updateError());
    }
}

export const updateFootball = async (news, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.get("/api/GetCategoryArticles/Ποδόσφαιρο");
        dispatch(updateSuccess(res.data));
    } catch (err) {
        dispatch(updateError());
    }
}

export const updateBasketball = async (news, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.get("/api/GetCategoryArticles/Καλαθοσφαίριση");
        dispatch(updateSuccess(res.data));
    } catch (err) {
        dispatch(updateError());
    }
}

export const updateOther = async (news, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.get("/api/GetCategoryArticles/Άλλα");
        dispatch(updateSuccess(res.data));
    } catch (err) {
        dispatch(updateError());
    }
}