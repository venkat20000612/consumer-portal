import { Routes, Route } from "react-router-dom";

import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import IngredientDetails from "./pages/IngredientDetails";
import Forum from "./pages/Forum";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/ingredient/:name" element={<IngredientDetails />} />
      <Route path="/forum" element={<Forum />} />
    </Routes>
  );
}

export default App;
