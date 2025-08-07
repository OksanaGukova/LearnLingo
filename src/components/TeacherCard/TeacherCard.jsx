import Header from "../Header/Header";
import CardText from "../CardText/CardText";
import css from './TeacherCard.module.css'
import Statistic from "../Statistic/Statistic";

export default function TeacherCard ({
  title,
  buttonActive,
  img,
  border,
  loginIcon
}) {
    return (
        <div className={css.container}>
           <Header activeClass={css.activeLink} loginUkraine='icon-ukraineActive' loginIcon={loginIcon} />
           <CardText title={title} buttonActive={buttonActive} img={img}  />
           <Statistic border={border}/> 
        </div>
    )
}