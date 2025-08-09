import { useNavigate } from 'react-router-dom';
import css from './CardText.module.css'

export default function CardText ({
    title,
    buttonActive,
    img
}) {
     const navigate = useNavigate(); // Ініціалізуємо useNavigate
    const handleButtonClick = () => {
        navigate('/allTeachers'); // Перехід до маршруту allTeachers
    };
    return (
        <div>
             <div className={css.mainText}>
                               <div className={css.headerContainer}>
                                    <div className={css.description}>
                                        <h1 className={css.headerText}>Unlock your potential with the best <span className={`${css.highlight} ${title || ""}`}> language </span> tutors</h1>
                                        <p className={css.text}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                                        <button className={`${css.getStarted} ${buttonActive || ""}`}  onClick={handleButtonClick}>Get started</button>
                                    </div>
                               </div>
                                <div className={css.imgContainer}>
                                    <img src={img} alt="some photo" />
                                </div>
                           </div>
        </div>
    )
}