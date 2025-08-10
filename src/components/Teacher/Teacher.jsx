import css from './Teacher.module.css';

export default function Teacher({ teachers }) {
    return (
        <div className={css.container}>
            {teachers.map((teacher, index) => (
                <div key={index} className={css.teacherCard}>
                    <div className={css.avatar}>
                        <img className={css.avatarImg} src={teacher.avatar_url} alt={`${teacher.name}'s avatar`} />
                    </div>
                    <div className={css.textContainer}>
                        <div className={css.header}>
                            <p className={css.languages}>Languages</p>
                             
                           <ul className={css.headerList}>
                             <li className={`${css.headerListItem} ${css.svgItem}`}>
                                <svg>
                             <use href='./svg/icons.svg#icon-book-open-01'></use>
                              </svg>
                               <p className={css.headerText}>Lessons online</p>
                               </li>
                              <li className={css.headerListItem}>  
                                <p className={css.headerText}>Lessons done: {teacher.lessons_done}</p>
                                </li>
                                <li className={`${css.headerListItem} ${css.svgItem}`}>
                                    <svg className={css.iconLogin}>
                                     <use href='./svg/icons.svg#icon-star'></use>
                                      </svg>
                                    <p className={css.headerText}>Rating: {teacher.rating}</p>
                               </li>
                             <li className={css.headerListItem}>   
                                <p className={css.headerText}>Price / 1 hour: ${teacher.price_per_hour}</p>
                                </li>
                               </ul>
                                <svg className={css.iconLogin}>
                                 <use href='./svg/icons.svg#icon-heart'></use>
                                  </svg>
                         
                        </div>
                        <div className={css.description}>
                            <h1>{teacher.name} {teacher.surname}</h1>
                            <p className={css.text}>Speaks: {teacher.languages.join(', ')}</p>
                            <p className={css.text}>Lesson Info: {teacher.lesson_info}</p>
                            <p className={css.text}>Conditions: {teacher.conditions.join(', ')}</p>
                        </div>
                        <div className={css.reviews}>
                            <h3>Reviews:</h3>
                            {teacher.reviews.length > 0 ? (
                                teacher.reviews.map((review, reviewIndex) => (
                                    <div key={reviewIndex} className={css.review}>
                                        <div className={css.revContainer}>
                                            <img 
        src={`../../../public/img/${reviewIndex % 2 === 0 ? 'woman' : 'man'}.png`} 
        alt={review.reviewer_name} 
      />
                                            <p>{review.reviewer_name}</p>
                                            <p>Rating: {review.reviewer_rating}</p>
                                        </div>
                                        <p>{review.comment}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No reviews available.</p>
                            )}
                        </div>
                        <ul>
                            {teacher.levels.map((level, levelIndex) => (
                                <li key={levelIndex}>
                                    <button>{level}</button>
                                </li>
                            ))}
                        </ul>
                        <button>Book trial lesson</button>
                    </div>
                </div>
            ))}
        </div>
    );
}