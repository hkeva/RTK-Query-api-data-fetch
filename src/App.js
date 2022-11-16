import { useSelector } from "react-redux"
import { fetchData } from "./redux/getData/getDataActions"
import { RotatingLines } from "react-loader-spinner"
import "./App.css"

function App() {
  const { data } = useSelector((state) => state.storeApi)
  const { isLoading, error } = useSelector((state) => state.globalState)

  return (
    <>
      <button
        style={{ margin: "30px", padding: "30px", fontSize: "18px" }}
        onClick={() => {
          fetchData()
        }}
      >
        Generate data
      </button>

      {data.length === 0 && isLoading && (
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

      {data &&
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
