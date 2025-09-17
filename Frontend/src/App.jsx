import Home from "./pages/Home"
import Header from "./components/Header"


function App() {
  return (
    <>
      <div className="relative">
          <Home />
        <div className="absolute z-10 top-0 right-0 left-0 p-5">
          <Header />
        </div>
      </div>
    </>
  )
}

export default App
