import { configureStore } from "@reduxjs/toolkit"
import rootReducer, { middleware } from "./rootReducer"

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
})
