import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./Work";
import Todo from "./Todo";
import Summary from "./Summary";

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Work />} />
      <Route path="/todo" element={<Todo />}/>
      <Route path="/summary" element={<Summary />} />
    </Routes>
  </BrowserRouter>)
}

export default App
