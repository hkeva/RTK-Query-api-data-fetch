import { useState } from "react"
import { RotatingLines } from "react-loader-spinner"
import { useGetAllPostsQuery } from "./redux/getApi/getApiSlice"
import { useGetAllUsersQuery } from "./redux/getUserApi/getUserApiSlice"

function App() {
  const { data, isLoading, error } = useGetAllPostsQuery()
  const [isDisplayed, setIsDisplayed] = useState(false)
  const { data: userData } = useGetAllUsersQuery()

  console.log(userData)

  return (
    <>
      <button
        style={{ margin: "30px", padding: "30px", fontSize: "18px" }}
        onClick={() => {
          setIsDisplayed(true)
        }}
      >
        Generate data
      </button>

      {isDisplayed && isLoading && (
        <div style={{ marginLeft: "30px" }}>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      )}

      {error && (
        <div style={{ marginLeft: "30px", fontSize: "18px", color: "red" }}>
          {error}
        </div>
      )}

      {isDisplayed &&
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
