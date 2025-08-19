import { useState } from 'react';
import css from './Header.module.css'
import { NavLink } from 'react-router-dom'
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Favorite from '../../pages/Favorites/Favorites';
import sprite from '../../../public/svg/icons.svg'



export default function Header ({
    activeClass,
    loginIcon = "icon-log-in-01",
    loginUkraine = "icon-ukraine"
}) {

     const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
   const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <div>
              <div className={css.header}>
                   <div className={css.learn}>
                         <svg>
                       <use href={`${sprite}#${loginUkraine}`}></use>
                    </svg>
                        <p className={css.learnLingo}>LearnLingo</p>
                   </div>
                    <div className={css.home}>
                        <NavLink className={css.homeText} to='/'>Home</NavLink>
                        <NavLink className={css.homeText} to='/teachers'>Teachers</NavLink>
                        {isLoggedIn ? <NavLink className={css.homeText} to='/favorites'>Favorites</NavLink> : ''}
                    </div>
                    <div className={css.login}>
           {!isLoggedIn && ( // Додаємо умову для відображення кнопок входу та реєстрації
                        <>
                            <div className={css.loginBox} onClick={() => setLoginOpen(true)}>
                                <svg className={css.iconLogin}>
                                    <use href={`${sprite}#${loginIcon}`}></use>
                                </svg>
                                <p className={css.loginText}>Log in</p>
                            </div>
                            <button
                                className={`${css.button} ${activeClass || ""}`}
                                onClick={() => setRegisterOpen(true)}
                            >
                                Registration
                            </button>
                        </>
                    )}
        </div>
      </div>
      {isLoginOpen && (
       <Modal onClose={() => setLoginOpen(false)}>
    <LoginForm onClose={() => setLoginOpen(false)} /> {/* 🔥 ось тут */}
  </Modal>
      )}
      {isRegisterOpen && (
        <Modal onClose={() => setRegisterOpen(false)}>
          <RegistrationForm />
        </Modal>
      )}
    </div>
  );

}