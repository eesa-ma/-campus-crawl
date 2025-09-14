import Header from "./components/Header"
import Videobanner from "./components/Videobanner"

function App() {
  return (
    <>
      <div className="relative">
        <Videobanner />
        <div className="absolute z-10 top-0 right-0 left-0 p-5">
          <Header />
        </div>
      </div>
    </>
  )
}

export default App
