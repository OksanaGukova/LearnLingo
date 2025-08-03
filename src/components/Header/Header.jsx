import css from './Header.module.css'
import { NavLink } from 'react-router-dom'

export default function Header ({
    activeClass,
    loginIcon = "icon-log-in-01",
    loginUkraine = "icon-ukraine"
}) {
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
                     <svg className={css.iconLogin} >
                       <use href={`/svg/icons.svg#${loginIcon}`}></use>
                    </svg>
                        <p className={css.loginText}>Log in</p>
                        <button className={`${css.button} ${activeClass || ""}`}>Registration</button>
                   </div>
                   
        </div>
           </div>           
    )

}