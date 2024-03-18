import { Home } from "./pages/home/home";
import { MainLayout } from "./layout/main-layout";
import { Route, Routes } from "react-router-dom";
import { Product } from "./pages/product/product";
import { Card } from "./components/card/card";
import { ProductDetail } from "./pages/product-detail/product-detail";
import { CreateProduct } from "./pages/create-product/create-product";
import { Profile } from "./pages/profile/profile";
import { Like } from "./pages/likedItems/like";
import { Register } from "./pages/login/register";
import { Login } from "./pages/login/login";
import { UserLayout } from "./pages/login/user-layout";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/:datakey/:id" element={<ProductDetail />} />
          <Route path="/:datakey" element={<Product />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/like" element={<Like />} />
          <Route path="/users" element={<UserLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
