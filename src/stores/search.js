import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', {
  state: () => ({
    query: ''
  }),
  actions: {
    updateQuery(newQuery) {
      this.query = newQuery;
    }
  }
});