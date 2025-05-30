import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  totalCount: 0,
  perPage: 0,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProducts: (state, action) => {
      state.items = action.payload.items;
      state.totalCount = action.payload.totalCount;
      state.perPage = action.payload.perPage;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setProducts, setError } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get("/api");
    const { items, count_items, per_page } = response.data;

    dispatch(
      setProducts({
        items,
        totalCount: count_items,
        perPage: per_page,
      })
    );
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default productsSlice.reducer;
