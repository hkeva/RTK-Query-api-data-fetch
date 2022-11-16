import { configureStore } from "@reduxjs/toolkit"
import storeApiReducer from "./storeApiData"

export const store = configureStore({
  reducer: {
    storeApi: storeApiReducer,
  },
})
