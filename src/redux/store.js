import { configureStore } from "@reduxjs/toolkit"
import storeApiReducer from "./getData/getDataReducer"
import globalStateReducer from "./rootReducer"

export const store = configureStore({
  reducer: {
    storeApi: storeApiReducer,
    globalState: globalStateReducer,
  },
})
