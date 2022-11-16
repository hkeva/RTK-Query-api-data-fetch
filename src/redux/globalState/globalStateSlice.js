import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  error: "",
}

export const globalSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setIsLoading, setError } = globalSlice.actions

export default globalSlice.reducer
