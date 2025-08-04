import css from './Statistic.module.css'

export default function Statistic ({
    border
}) {
    return (
        <div>
              <div className={`${css.statistic} ${border || ""}`}>
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
    )
}