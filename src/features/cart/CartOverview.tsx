import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { getTotalCartQty, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

const CartOverview = () => {
  const totalQty = useAppSelector(getTotalCartQty);
  const totalPrice = useAppSelector(getTotalCartPrice);

  if (!totalQty) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalQty} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
