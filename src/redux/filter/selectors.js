export const selectLanguageFilter = (state) => state.filters.language;

export const selectFilteredTeachers = (state) => {
  const teachers = state.teachers.items;
  const language = state.filters.language;
  if (!language) return teachers;
  return teachers.filter((teacher) =>
    teacher.languages.includes(language)
  );
};

