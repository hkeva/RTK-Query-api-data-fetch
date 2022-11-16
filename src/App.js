import { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setData } from "./redux/storeApiData"

function App() {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.storeApi)

  const [isDisplay, setIsDisplay] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        )

        dispatch(setData(response.data))
      } catch (err) {
        throw new Error(err)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <button
        style={{ margin: "30px", padding: "30px", fontSize: "18px" }}
        onClick={() => {
          setIsDisplay(true)
        }}
      >
        Generate data
      </button>
      {isDisplay &&
        data.map((singleData) => {
          return (
            <div
              style={{
                margin: "30px",
                padding: "30px",
                border: "1px solid gray",
              }}
            >
              <p>ID : {singleData.userId}</p>
              <p>Title : {singleData.title}</p>
              <p>Body : {singleData.body}</p>
            </div>
          )
        })}
    </>
  )
}

export default App
