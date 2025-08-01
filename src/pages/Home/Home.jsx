import css from './Home.module.css'

export default function Home() {
    
    return (
        <div>
            <div className={css.container}>
                <div className={css.header}>
                   <div className={css.learn}>
                         <svg className={css.learnSvg} >
                      <use href=''></use>
                    </svg>
                        <p>LearnLingo</p>
                   </div>
                    <div className={css.home}>
                        <p>Home</p>
                        <p>Teachers</p>
                    </div>
                   <div className={css.login}>
                        <p>Log in</p>
                        <button>Registration</button>
                   </div>
                </div>
                <div className={css.description}>
                    <h1>Unlock your potential with the best  language tutors</h1>
                    <p>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                    <button>Get started</button>
                </div>
                <div className={css.imgContainer}>
                    <img src="" alt="" />
                </div>
                <div className={css.statistic}>
                    <div>
                        <p>32,000 +</p>
                        <p>Experienced tutors</p>
                    </div>
                    <div>
                        <p>300,000 +</p>
                        <p>5-star tutor reviews</p>
                    </div>
                    <div>
                        <p>120 +</p>
                        <p>Subjects taught</p>
                    </div>
                    <div>
                        <p>200 +</p>
                        <p>Tutor nationalities</p>
                    </div>
                </div>
            </div>
        </div>
    )
}