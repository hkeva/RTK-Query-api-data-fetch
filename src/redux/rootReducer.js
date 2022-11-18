import { combineReducers } from "redux"
import { getApiData } from "./getApi/getApiSlice"

const rootReducer = combineReducers({
  [getApiData.reducerPath]: getApiData.reducer,
})

export const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(getApiData.middleware)

export default rootReducer
