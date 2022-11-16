import axios from "axios"
import { store } from "../store"
import { setData } from "./getDataReducer"
import { setError, setIsLoading } from "../rootReducer"

export const fetchData = async () => {
  try {
    store.dispatch(setIsLoading(true))

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    )

    store.dispatch(setData(response.data))
    store.dispatch(setIsLoading(false))
  } catch (err) {
    store.dispatch(setData([]))
    store.dispatch(setError("Can't fetch API"))
    store.dispatch(setIsLoading(false))
  }
}
