import { BrowserRouter, Routes, Route } from "react-router-dom";

//navbar
import { Navbar } from "./components/Navbar";

//pages
import { About } from "./pages/About";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { SingleCocktail } from "./pages/SingleCocktail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
