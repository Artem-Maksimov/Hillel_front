import { configureStore } from "@reduxjs/toolkit";

import { dataUser } from "./userSlice";

export const store = configureStore({
  reducer: {
    user: dataUser,
  },
});
