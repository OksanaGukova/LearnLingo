/* export const selectTeachers = (state) => state.teachers.items || []; */
// Селектор для одного вчителя по ID (якщо потрібно)
export const selectTeacherById = (teacherId) => (state) => 
  state.teachers.items.find(teacher => 
    `${teacher.name}-${teacher.surname}`.toLowerCase() === teacherId.toLowerCase()
  );