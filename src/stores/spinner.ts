import { defineStore } from 'pinia';

export const useSpinner = defineStore('spinner', {
  state: () => ({
    isActive: false,
  }),
  actions: {
    toggle(show: boolean) {
      this.isActive = show;
    },
  },
});
