import { useSelector } from 'react-redux';
import css from './Teacher.module.css'
import { selectTeachers } from '../../redux/teacher/selectors';

export default function Teacher () {

     const teachers = useSelector(selectTeachers);

    return (
        <>
        <div className={css.container}>
            <div className={css.avatar}>{teachers.avatar_url}</div>
            <div className={css.textContainer}>
                <div className={css.header}>
                    <p>Languages</p>
                    <p>Lessons online</p>
                    <p>Lessons done:</p>
                    <p>Rating:</p>
                    <p>Price / 1 hour:</p>
                </div>
                <div className={css.description}>
                    <h1>Jane Smith</h1>
                    <p>Speaks:</p>
                    <p>Lesson Info:</p>
                    <p>Conditions:</p>
                    <p></p>
                </div>
                <div className={css.revievs}>
                    <div className={css.reviev}>
                        <div className={css.revContainer}>
                            <img src="" alt="" />
                            <p>Frank</p>
                            <p></p>
                        </div>
                        <p>Jane's lessons were very helpful. I made good progress.</p>
                    </div>
                     <div className={css.reviev}>
                        <div className={css.revContainer}>
                            <img src="" alt="" />
                            <p>Eve</p>
                            <p></p>
                        </div>
                        <p>Jane is an amazing teacher! She is patient and supportive.</p>
                    </div>
                </div>
                <ul>
                    <li><button>#A1 Beginner</button></li>
                    <li><button>#A2 Elementary</button></li>
                    <li><button>#B1 Intermediate</button></li>
                    <li><button>#B2 Upper-Intermediate</button></li>
                </ul>
                <button>Book trial lesson</button>
            </div>
        </div>
        </>
    )
}