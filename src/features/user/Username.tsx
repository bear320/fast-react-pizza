import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";

const Username = () => {
  const username = useAppSelector((store: RootState) => store.user.username);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
};

export default Username;
