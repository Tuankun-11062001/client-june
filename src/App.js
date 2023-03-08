import { hooks } from "./store";
import { Route, Routes } from "react-router-dom";
import { Home } from "./user/screens/Home";
import { HomeAdmin } from "./admin/screens/HomeAdmin";
import { Navigation } from "./common/Navigation";
import { NavigationAdmin } from "./common/NavigationAdmin";
import { NotFound } from "./common/NotFound";
import { Login } from "./common/Login";
import { Signup } from "./common/Signup";
import { UserInfo } from "./user/screens/UserInfo";
import { Cart } from "./user/screens/Cart";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<NavigationAdmin />}>
        <Route index element={<HomeAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;
