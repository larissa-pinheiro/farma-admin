import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Categorias from "./pages/categorias/Categorias";
import Home from "./pages/home/Home";
import Produtos from "./pages/produtos/Produtos";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/categorias" element={<Categorias />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App