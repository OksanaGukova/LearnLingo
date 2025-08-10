import { useDispatch, useSelector } from "react-redux";
import Teacher from "../../components/Teacher/Teacher";
import { selectFilteredTeachers, selectLanguageFilter } from "../../redux/filter/selectors";
import { setLanguageFilter } from "../../redux/filter/slice";
import teachersData from '../../teachers.json';

export default function AllTeachers() {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(selectLanguageFilter);
  const filteredTeachers = useSelector(selectFilteredTeachers);

const languages = Array.from(
  new Set(
    teachersData.flatMap(teacher => teacher.languages)
  )
);

  const handleLanguageChange = (e) => {
    dispatch(setLanguageFilter(e.target.value));
  };

  return (
    <>
      <div>
        <label htmlFor="language-select">Languages:</label>
        <select
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
      </div>
      {/* Не рендерити поки не вибрано мову (selectedLanguage === undefined або null) */}
      {/* Якщо обрана мова або "All", рендеримо */}
      {(selectedLanguage !== null && selectedLanguage !== undefined) && (
        // Якщо обрана "All", selectedLanguage === ""
        // Якщо обрана конкретна мова, selectedLanguage === "German" і filteredTeachers вже відфільтрований
        filteredTeachers.length > 0 
          ? <Teacher teachers={filteredTeachers} />
          : <p>No teachers found</p>
      )}
    </>
  );
}
