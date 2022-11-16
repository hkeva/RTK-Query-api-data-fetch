import { combineReducers } from "redux"
import storeApiReducer from "./getData/getDataSlice"
import globalStateReducer from "./globalState/globalStateSlice"

const rootReducer = combineReducers({
  storeApi: storeApiReducer,
  globalState: globalStateReducer,
})

export default rootReducer
