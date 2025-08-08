import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from './UserMenu.module.css'
import { logoutUser } from "../../redux/auth/operations";

export default function UserMenu () {
     const dispatch = useDispatch();
  const { name } = useSelector(selectUser);


  return (
    <div className={css.container}>
      <p className={css.text}>Welcome, {name}</p>

      <button
        className={css.LogoutBtn}
        type="button"
        onClick={() => dispatch(logoutUser())}
      >
        Logout
      </button>
    </div>
  );
}