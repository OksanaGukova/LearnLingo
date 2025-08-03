import Header from "../Header/Header";
import css from './TeacherCard.module.css'

export default function TeacherCard () {
    return (
        <div className={css.container}>
           <Header activeClass={css.activeLink}/>
        </div>
    )
}