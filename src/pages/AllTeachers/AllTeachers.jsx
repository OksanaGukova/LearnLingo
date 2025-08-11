import { useDispatch, useSelector } from "react-redux";
import Teacher from "../../components/Teacher/Teacher";
import {
  selectFilteredTeachers,
  selectLanguageFilter,
  selectLevelFilter,
  selectPriceFilter,
} from "../../redux/filter/selectors";
import {
  setLanguageFilter,
  setLevelFilter,
  setPriceFilter,
} from "../../redux/filter/slice";
import teachersData from '../../teachers.json';
import css from './AllTeachers.module.css'

export default function AllTeachers() {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(selectLanguageFilter);
  const selectedLevel = useSelector(selectLevelFilter);
  const selectedPrice = useSelector(selectPriceFilter);
  const filteredTeachers = useSelector(selectFilteredTeachers);

  // Унікальні мови, рівні та ціни з даних
  const languages = Array.from(
    new Set(
      teachersData.flatMap(teacher => teacher.languages)
    )
  );
  const levels = Array.from(
    new Set(
      teachersData.flatMap(teacher => teacher.levels)
    )
  );
/* console.log(languages);

  console.log(levels); */
  
  // Фіксований список для price_per_hour
  const prices = [
    "до 10$",
    "10-20$",
    "20-30$",
    "30$+"
  ];

  // Обробники для зміни фільтрів
  const handleLanguageChange = (e) => {
    dispatch(setLanguageFilter(e.target.value));
  };
  const handleLevelChange = (e) => {
    dispatch(setLevelFilter(e.target.value));
  };
  const handlePriceChange = (e) => {
    dispatch(setPriceFilter(e.target.value));
  };

  return (
    <>
      <ul className={css.container}>
        <li className={css.list}>
          <label className={css.label} htmlFor="language-select">Languages</label>
          <select className={css.select}
            id="language-select"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="">All</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </li>
        <li className={css.list}>
          <label className={css.label}  htmlFor="level-select">Level of knowledge</label>
          <select className={css.select}
      id="level-select"
      value={selectedLevel || ""}
      onChange={handleLevelChange}
    >
      <option value="">All</option>
      {levels.map((level, i) => (
        <option key={`${level}-${i}`} value={level}>
          {level}
        </option>
      ))}
    </select>
        </li>
        <li className={css.list}>
          <label className={css.label} htmlFor="price-select">Price</label>
          <select className={css.select}
            id="price-select"
            value={selectedPrice}
            onChange={handlePriceChange}
          >
            <option value="">All</option>
            {prices.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>
        </li>  
         </ul>
        {(selectedLanguage !== null && selectedLanguage !== undefined) && (
          filteredTeachers.length > 0 
            ? <Teacher teachers={filteredTeachers} />
            : <p>No teachers found</p>
        )}
   
    </>
  );
}
