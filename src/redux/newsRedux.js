import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    blogs: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addBlog: (state, action) => {
      const blog = action.payload;
      blog.date = Date.now();
      state.quantity += 1;
      state.blogs.push(blog);
      state.total += action.payload.price * action.payload.quantity;
    },
    editBlog: (state, action) => {
      console.log(action.payload);
      // state.quantity = action.payload.quantity;
      // state.blogs.push(action.payload.blog);
      // state.total = action.payload.total;
      // state.quantity = 0;
      // state.blogs = [];
      // state.total = 0;
    },
    removeBlog: (state, action) => {
      console.log(action.payload);
      // state.quantity -= 1;
      // state.blogs = state.blogs.filter(blog => blog.date !== action.payload.blog.date);
      // state.total -= action.payload.blog.price * action.payload.blog.quantity;
      // state.quantity = 0;
      // state.blogs = [];
      // state.total = 0;
    },
  },
});

export const { addBlog, editBlog, removeBlog } = newsSlice.actions;

export const selectNews = (state) => state.news.blogs;

export default newsSlice.reducer;