import css from './Home.module.css'
/* import sprite from '../../../public/svg/icons.svg' */

export default function Home() {
    
    return (
        <div>        
                <div className={css.header}>
                   <div className={css.learn}>
                         <svg className={css.learnSvg} >
                      <use href="/svg/icons.svg#icon-ukraine"></use>
                    </svg>
                        <p className={css.learnLingo}>LearnLingo</p>
                   </div>
                    <div className={css.home}>
                        <p className={css.homeText}>Home</p>
                        <p className={css.homeText}>Teachers</p>
                    </div>
                   <div className={css.login}>
                     <svg className={css.iconLogin} >
                      <use href="/svg/icons.svg#icon-log-in-01"></use>
                    </svg>
                        <p className={css.loginText}>Log in</p>
                        <button className={css.button}>Registration</button>
                   </div>
                </div>
               <div className={css.mainText}>
                   <div className={css.headerContainer}>
                        <div className={css.description}>
                            <h1 className={css.headerText}>Unlock your potential with the best <span className={css.highlight}> language </span> tutors</h1>
                            <p className={css.text}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                            <button className={css.getStarted}>Get started</button>
                        </div>
                   </div>
                    <div className={css.imgContainer}>
                        <img src="../../../public/img/image-min.png" alt="some photo" />
                    </div>
               </div>
                <div className={css.statistic}>
              {/*      <div className={css.statisticContainer}> */}
                        <div className={css.statisticText}>
                            <p className={css.statisticData}>32,000+</p>
                            <p className={css.statisticDescr}>Experienced tutors</p>
                        </div>
                        <div className={css.statisticText}>
                            <p className={css.statisticData}>300,000+</p>
                            <p className={css.statisticDescr}>5-star tutor reviews</p>
                        </div>
                        <div className={css.statisticText}>
                            <p className={css.statisticData}>120 +</p>
                            <p className={css.statisticDescr}>Subjects taught</p>
                        </div>
                        <div className={css.statisticText}>
                            <p className={css.statisticData}>200 +</p>
                            <p className={css.statisticDescr}>Tutor nationalities</p>
                        </div>
                   </div>
                </div>
 /*            </div> */
    )
}