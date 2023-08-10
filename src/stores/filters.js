import { defineStore } from 'pinia';

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    activeFilter: 'all',
  }),
  actions: {
    setActiveFilter(value) {
      this.activeFilter = value;
    },
  },
});