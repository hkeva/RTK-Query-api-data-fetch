import { configureStore } from "@reduxjs/toolkit"
import storeApiReducer from "./getData/getDataReducer"
import globalStateReducer from "./globalState/globalStateReducer"

export const store = configureStore({
  reducer: {
    storeApi: storeApiReducer,
    globalState: globalStateReducer,
  },
})
