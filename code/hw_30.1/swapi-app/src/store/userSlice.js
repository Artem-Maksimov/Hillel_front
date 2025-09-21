import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://www.swapi.tech/api/";
const initialState = {
  category: "any",
  id: "id",
  info: { info: "some information" },
  status: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      state.category = action.payload.category;
      state.id = action.payload.id;
    },
    clearUserInfo: (state) => {
      state = initialState;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.info = action.payload;
        state.status = "success";
        state.error = null;
      })
      .addCase(fetchUser.pending, (state, action) => {
        state.user = action.payload;
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const fetchUser = createAsyncThunk(
  "user/fetctUser",
  async (urn, { signal, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await fetch(URL + urn, { signal });

      if (!response.ok) {
        return rejectWithValue(response.status);
      }
      const data = await response.json();
      return fulfillWithValue(data.result.properties);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    conditon: (_, getState) => {
      const { status } = getState().data;
      if (status === "success" || status === "loading") return false;
      return true;
    },
  }
);

export const dataUser = userSlice.reducer;
export const { addUserInfo, clearUserInfo } = userSlice.actions;
