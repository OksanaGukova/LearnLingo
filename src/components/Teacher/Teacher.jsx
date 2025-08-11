import { useState } from 'react';
import css from './Teacher.module.css';

export default function Teacher({ teachers }) {
      const [hiddenInfo, setHiddenInfo] = useState({});
                // Function to toggle hidden info
                const toggleHiddenInfo = (index) => {
        setHiddenInfo((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle the visibility for the specific teacher
        }));
    };
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
                            <h1 className={css.teacherName}>{teacher.name} {teacher.surname}</h1>
                      
                            <ul className={css.infoList}>
                                  <li className={css.text}>Speaks: 
                                    <span className={`${css.teacherInfo} ${css.underline}`}>{teacher.languages.join(', ')}
                                    </span>
                                    </li>
                                    <li className={css.text}>Lesson Info: 
                                        <span className={css.teacherInfo}>{teacher.lesson_info}
                                            </span>
                                            </li>
                                    <li className={css.text}>Conditions:
                                         <span className={css.teacherInfo}>{teacher.conditions.join(', ')}
                                            </span>
                                            </li>
                            </ul>
                             <div className={css.hidenInfo} style={{ display: hiddenInfo[index] ? 'block' : 'none' }}>
                            <p className={css.experience}>{teacher.experience}</p>
                               <div className={css.reviews}>
                           
                            {teacher.reviews.length > 0 ? (
                                teacher.reviews.map((review, reviewIndex) => (
                                    <div key={reviewIndex} className={css.review}>
                                        <div className={css.revContainer}>
                                            <img 
        src={`../../../public/img/${reviewIndex % 2 === 0 ? 'woman' : 'man'}.png`} 
        alt={review.reviewer_name} 
      />
                                            <div>
                                                <p className={css.reviewerName}>{review.reviewer_name}</p>
                                                <p> {review.reviewer_rating}</p>
                                            </div>
                                        </div>
                                        <p className={css.coment}>{review.comment}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No reviews available.</p>
                            )}
                           
                        </div>
                       </div>
                                        <p className={css.more} onClick={() => toggleHiddenInfo(index)} style={{ cursor: 'pointer' }}>
                                {hiddenInfo[index] ? 'Read less' : 'Read more'}
                            </p>
                        </div>
                     
                        <ul className={css.levels}>
                            {teacher.levels.map((level, levelIndex) => (
                                <li key={levelIndex}>
                                    <button className={css.btnLevel}>{level}</button>
                                </li>
                            ))}
                        </ul>
                     {!hiddenInfo[index] && <button className={css.book}>Book trial lesson</button>}
                    </div>
                </div>
            ))}
        </div>
    );
}