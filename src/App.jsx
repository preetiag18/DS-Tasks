import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bubblesort from "./components/Bubblesort";
import Layout from "./components/Layout";
import Queue from "./components/Queue";
import Stack from "./components/Stack";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Queue />} />
          <Route path="queue" element={<Queue />} />
          <Route path="stack" element={<Stack />} />
          <Route path="bubblesort" element={<Bubblesort />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
