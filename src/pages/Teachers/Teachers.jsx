import css from './Teachers.module.css'
import TeacherCard from "../../components/teacherCard/teacherCard";
import img1 from "../../../public/img/yellow-min.png";
import img2 from "../../../public/img/grey-min.png";
import img3 from "../../../public/img/blye-min.png";
import img4 from "../../../public/img/red-min.png";
import img5 from "../../../public/img/orange-min.png";

export default function Teachers () {
         return (
    <div className={css.cardsWrapper}>
      <TeacherCard 
        title={css.wordYellow} 
        buttonActive={css.btnYellow} 
        img={img1} 
        border={css.borderOrange}
  loginIcon='icon-log-in-01'
      />
      <TeacherCard 
        title={css.wordGreen} 
        buttonActive={css.btnGreen} 
        img={img2} 
        border={css.borderGreen}
        loginIcon='icon-log-in-01'
      />
      <TeacherCard 
        title={css.wordBlue} 
        buttonActive={css.btnBlue} 
        img={img3} 
        border={css.borderBlue}
        loginIcon='icon-log-in-01'
      />
      <TeacherCard 
        title={css.wordRed} 
        buttonActive={css.btnRed} 
        img={img4} 
        border={css.borderRed}
        loginIcon='icon-log-in-01'
      />
      <TeacherCard 
        title={css.wordOrange} 
        buttonActive={css.btnOrange} 
        img={img5} 
        border={css.borderOrange}
        loginIcon='icon-log-in-01'
      />
    </div>
  )
 
}