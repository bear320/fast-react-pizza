import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/menu/CartOverview";

const AppLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
