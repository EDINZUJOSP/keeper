<template>
  <div class="filter-wrapper">
    <label><smaller>Role Status:</smaller></label><br>
    <select v-model="activeFilter" @change="updateFilter">
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  </div>
</template>




<script setup>
import { useFiltersStore } from '@/stores/filters';

const filtersStore = useFiltersStore();

const activeFilter = filtersStore.activeFilter;

const updateFilter = (event) => {
  filtersStore.setActiveFilter(event.target.value);
};
</script>

<style scoped>

.filter-wrapper{
  margin-left: 3rem;
}
select {
  border:none;
  padding: 0.5rem;
  border-bottom: 1px solid lightblue;
}

</style>