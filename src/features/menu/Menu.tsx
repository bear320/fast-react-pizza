import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import { Pizza } from "../../types/pizza";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = useLoaderData() as Pizza[];

  return (
    <ul>
      {menu.map((pizza: Pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

export default Menu;
