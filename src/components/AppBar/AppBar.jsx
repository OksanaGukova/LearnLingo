import { useSelector } from "react-redux";
import css from './AppBar.module.css'
import { selectIsLoggedIn } from "../../redux/auth/selectors";
/* import AuthNav from "../AuthNav/AuthNav"; */
import UserMenu from "../UserMenu/UserMenu";


export default function AppBar () {
     const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      {isLoggedIn ? <UserMenu /> : ''}
     
    </header>
    
  );
}