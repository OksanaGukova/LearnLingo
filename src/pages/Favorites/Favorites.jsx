import { useEffect, useState } from "react";
import css from "./Favorites.module.css";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  if (favorites.length === 0) {
    return <p className={css.empty}>У вас ще немає обраних викладачів.</p>;
  }

  return (
    <div className={css.container}>
      {favorites.map((teacher) => (
        <div key={teacher.id} className={css.teacherCard}>
          <div className={css.avatar}>
            <img
              className={css.avatarImg}
              src={teacher.avatar_url}
              alt={`${teacher.name}'s avatar`}
            />
          </div>
          <div className={css.textContainer}>
            <h1 className={css.teacherName}>
              {teacher.name} {teacher.surname}
            </h1>
            <p className={css.info}>Lessons done: {teacher.lessons_done}</p>
            <p className={css.info}>Rating: {teacher.rating}</p>
            <p className={css.info}>Price / 1 hour: ${teacher.price_per_hour}</p>
            <p className={css.info}>
              Speaks: {teacher.languages.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
