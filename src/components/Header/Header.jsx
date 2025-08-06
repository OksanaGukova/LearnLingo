import { useState } from 'react';
import css from './Header.module.css'
import { NavLink } from 'react-router-dom'
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import Modal from '../Modal/Modal';



export default function Header ({
    activeClass,
    loginIcon = "icon-log-in-01",
    loginUkraine = "icon-ukraine"
}) {

     const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
    return (
        <div>
              <div className={css.header}>
                   <div className={css.learn}>
                         <svg>
                       <use href={`/svg/icons.svg#${loginUkraine}`}></use>
                    </svg>
                        <p className={css.learnLingo}>LearnLingo</p>
                   </div>
                    <div className={css.home}>
                        <NavLink className={css.homeText} to='/'>Home</NavLink>
                        <NavLink className={css.homeText} to='/teachers'>Teachers</NavLink>
                    </div>
                    <div className={css.login}>
          <div className={css.loginBox} onClick={() => setLoginOpen(true)}>
            <svg className={css.iconLogin}>
              <use href={`/svg/icons.svg#${loginIcon}`}></use>
            </svg>
            <p className={css.loginText}>Log in</p>
          </div>

          <button
            className={`${css.button} ${activeClass || ""}`}
            onClick={() => setRegisterOpen(true)}
          >
            Registration
          </button>
        </div>
      </div>
      {isLoginOpen && (
        <Modal onClose={() => setLoginOpen(false)}>
          <LoginForm />
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