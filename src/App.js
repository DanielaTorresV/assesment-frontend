import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import { DataProvider } from "./store/DataContext";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/detail" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
      </DataProvider>
  );
}

export default App;
