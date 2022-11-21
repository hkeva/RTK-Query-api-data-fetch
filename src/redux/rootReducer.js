import { combineReducers } from "redux"
import { getApiData } from "./getApi/getApiSlice"
import { getUserApiData } from "./getUserApi/getUserApiSlice"

const rootReducer = combineReducers({
  [getApiData.reducerPath]: getApiData.reducer,
  [getUserApiData.reducerPath]: getUserApiData.reducer,
})

//for binding API with the store
export const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware()
    .concat(getApiData.middleware)
    .concat(getUserApiData.middleware)

export default rootReducer
