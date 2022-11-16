import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: [],
}

export const apiDataSlice = createSlice({
  name: "storeApi",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
  },
})

export const { setData } = apiDataSlice.actions

export default apiDataSlice.reducer
