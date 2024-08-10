import { useAppDispatch } from "../../hooks";
import { deleteItem } from "./cartSlice";
import Button from "../../ui/Button";

const DeleteItem = ({ pizzaId }: { pizzaId: number }) => {
  const dispatch = useAppDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
};

export default DeleteItem;
