import { useEffect, useMemo, useState } from 'react';
import css from './Teacher.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import BookModal from '../BookModal/BookModal'
import sprite from '/svg/icons.svg'


export default function Teacher({ teachers }) {
  const [hiddenInfo, setHiddenInfo] = useState({});
  const [favorites, setFavorites] = useState([]);
  const isLoggedIn = useSelector(selectIsLoggedIn);
    const [modalOpen, setModalOpen] = useState(false);
const [selectedTeacher, setSelectedTeacher] = useState(null);
   const normalizedTeachers = useMemo(() => {
    return teachers.map((teacher, index) => ({
      ...teacher,
      id: teacher.id || `teacher-${index}`
    }));
  }, [teachers]);
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Завантажуємо з localStorage список обраних при старті
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleHiddenInfo = (index) => {
    setHiddenInfo((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleFavoriteClick = (teacher) => {

    if (!isLoggedIn) {
      alert('Цей функціонал доступний лише для авторизованих користувачів!');
      return;
    }
    let updatedFavorites;

    if (favorites.some((fav) => fav.id === teacher.id)) {
      // Видаляємо з обраних
      updatedFavorites = favorites.filter((fav) => fav.id !== teacher.id);
    } else {
      // Додаємо в обрані
      updatedFavorites = [...favorites, teacher];
    }


    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

    const isTeacherFavorite = (teacherId) => {
     const isFavorite = favorites.some((fav) => fav.id === teacherId);
  
     return isFavorite;
   };


    const handleBookLesson = (teacher) => {
    setSelectedTeacher(teacher);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };


  return (
    <div className={css.container}>
       {normalizedTeachers.map((teacher, index) => (
        <div key={teacher.id} className={css.teacherCard}>
          <div className={css.avatar}>
            <img
              className={css.avatarImg}
              src={teacher.avatar_url}
              alt={`${teacher.name}'s avatar`}
            />
          </div>
          <div className={css.textContainer}>
            <div className={css.header}>
              <p className={css.languages}>Languages</p>

              <ul className={css.headerList}>
                <li className={`${css.headerListItem} ${css.svgItem}`}>
                  <svg>
                    <use href={`${sprite}#icon-book-open-01`}></use>
                  </svg>
                  <p className={css.headerText}>Lessons online</p>
                </li>
                <li className={css.headerListItem}>
                  <p className={css.headerText}>
                    Lessons done: {teacher.lessons_done}
                  </p>
                </li>
                <li className={`${css.headerListItem} ${css.svgItem}`}>
                  <svg className={css.iconLogin}>
                    <use href={`${sprite}#icon-star`}r></use>
                  </svg>
                  <p className={css.headerText}>Rating: {teacher.rating}</p>
                </li>
                <li className={css.headerListItem}>
                  <p className={css.headerText}>
                    Price / 1 hour: ${teacher.price_per_hour}
                  </p>
                </li>
              </ul>

             <svg
  className={css.iconLogin}
  onClick={() => handleFavoriteClick(teacher)}
  style={{
    fill: isTeacherFavorite(teacher.id) ? '#f4c550' : 'gray',
    fontSize: '20px',
    cursor: 'pointer',
  }}
>
  <use href={`${sprite}#icon-heart`}></use>
</svg>
            </div>

            <div className={css.description}>
              <h1 className={css.teacherName}>
                {teacher.name} {teacher.surname}
              </h1>

              <ul className={css.infoList}>
                <li className={css.text}>
                  Speaks:
                  <span
                    className={`${css.teacherInfo} ${css.underline}`}
                  >
                    {teacher.languages.join(', ')}
                  </span>
                </li>
                <li className={css.text}>
                  Lesson Info:
                  <span className={css.teacherInfo}>
                    {teacher.lesson_info}
                  </span>
                </li>
                <li className={css.text}>
                  Conditions:
                  <span className={css.teacherInfo}>
                    {teacher.conditions.join(', ')}
                  </span>
                </li>
              </ul>

              <div
                className={css.hidenInfo}
                style={{
                  display: hiddenInfo[index] ? 'block' : 'none',
                }}
              >
                <p className={css.experience}>{teacher.experience}</p>
                <div className={css.reviews}>
                  {teacher.reviews.length > 0 ? (
                    teacher.reviews.map((review, reviewIndex) => (
                      <div key={reviewIndex} className={css.review}>
                        <div className={css.revContainer}>
                          <img
                            src={`../../../public/img/${
                              reviewIndex % 2 === 0 ? 'woman' : 'man'
                            }.png`}
                            alt={review.reviewer_name}
                          />
                          <div>
                            <p className={css.reviewerName}>
                              {review.reviewer_name}
                            </p>
                            <p>{review.reviewer_rating}</p>
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

              <p
                className={css.more}
                onClick={() => toggleHiddenInfo(index)}
                style={{ cursor: 'pointer' }}
              >
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

           {!hiddenInfo[index] && (
            <button 
              className={css.book} 
              onClick={() => handleBookLesson(teacher)}
            >
              Book trial lesson
            </button>
            )}
          </div>
        </div>
      ))}

       {modalOpen && (
        <BookModal
          teacher={selectedTeacher}
          onClose={handleCloseModal}
          onSubmit={(formData) => {
            console.log('Form submitted:', {
              ...formData,
              teacherId: selectedTeacher.id
            });
            alert(`Дякуємо за запис на пробний урок до ${selectedTeacher.name} ${selectedTeacher.surname}!`);
            handleCloseModal();
          }}
        />
      )}
    </div>
  );
}
