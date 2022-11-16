import axios from "axios"
import { store } from "../store"
import { setData } from "./getDataReducer"
import { setError, setIsLoading } from "../globalState/globalStateReducer"

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

export const fetchData = async () => {
  try {
    store.dispatch(setIsLoading(true))
    await delay(3000)

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    )

    store.dispatch(setData(response.data))
    store.dispatch(setIsLoading(false))
  } catch (err) {
    store.dispatch(setError("Can't fetch API"))
    store.dispatch(setIsLoading(false))
  }
}
