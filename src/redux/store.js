import { configureStore } from "@reduxjs/toolkit"
import rootReducer, { middleware } from "./rootReducer"

console.log(middleware)
export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
})
