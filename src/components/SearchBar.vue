<template>
  <div class="search-wrapper">
    <input type="text" :value="searchQuery" @input="updateQuery" placeholder="Search title..." />
  </div>
</template>

<script setup>
import { useSearchStore } from '@/stores/search';

const searchStore = useSearchStore();
const searchQuery = searchStore.query;

const updateQuery = (event) => {
  searchStore.updateQuery(event.target.value);
};
</script>

<style scoped>
input{
  margin:1.8rem;
  border:none;
  padding: 0.5rem;
  border-bottom: 1px solid lightblue;
}
</style>