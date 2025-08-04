import css from './CardText.module.css'

export default function CardText ({
    title,
    buttonActive,
    img
}) {
    return (
        <div>
             <div className={css.mainText}>
                               <div className={css.headerContainer}>
                                    <div className={css.description}>
                                        <h1 className={css.headerText}>Unlock your potential with the best <span className={`${css.highlight} ${title || ""}`}> language </span> tutors</h1>
                                        <p className={css.text}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                                        <button className={`${css.getStarted} ${buttonActive || ""}`}>Get started</button>
                                    </div>
                               </div>
                                <div className={css.imgContainer}>
                                    <img src={img} alt="some photo" />
                                </div>
                           </div>
        </div>
    )
}