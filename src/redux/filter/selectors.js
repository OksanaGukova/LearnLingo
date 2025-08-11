import { createSelector } from '@reduxjs/toolkit';

export const selectLanguageFilter = (state) => state.filters.language;
export const selectLevelFilter = (state) => state.filters.level;
export const selectPriceFilter = (state) => state.filters.price_per_hour;
export const selectTeachers = (state) => state.teachers.items;

export const selectFilteredTeachers = createSelector(
  [selectTeachers, selectLanguageFilter, selectLevelFilter, selectPriceFilter],
  (teachers, language, levels, price) => {
    return teachers.filter((teacher) => {
      // Фільтр по мові
      
      const byLanguage = language ? teacher.languages.includes(language) : true;

      // Фільтр по рівню (масив рівнів)
      const byLevel = levels ? teacher.levels.includes(levels) : true;

      // Фільтр по ціні
      let byPrice = true;
      if (price === "до 10$") byPrice = teacher.price_per_hour <= 10;
      else if (price === "10-20$") byPrice = teacher.price_per_hour > 10 && teacher.price_per_hour <= 20;
      else if (price === "20-30$") byPrice = teacher.price_per_hour > 20 && teacher.price_per_hour <= 30;
      else if (price === "30$+") byPrice = teacher.price_per_hour > 30;

      return byLanguage && byLevel && byPrice;
    });
  }
);

