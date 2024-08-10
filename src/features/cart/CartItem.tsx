import { IItem } from "../../types";
import DeleteItem from "./DeleteItem";
import { formatCurrency } from "../../utils/helpers";
import UpdateItemQty from "./UpdateItemQty";
import { useAppSelector } from "../../hooks";
import { getCurrentQtyById } from "./cartSlice";

const CartItem = ({ item }: { item: IItem }) => {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQty = useAppSelector(getCurrentQtyById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQty pizzaId={pizzaId} currentQty={currentQty} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
};

export default CartItem;
