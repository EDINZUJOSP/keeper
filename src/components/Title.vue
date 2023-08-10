<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>


<template>
  <div class="title">
    <h1 class="gray">{{ msg }}</h1>    
  </div>
</template>

<style scoped>
h1 {
  font-weight: 100;
  font-size: 2rem;
  position: relative;
  margin-bottom: 4rem;
}

.gray{
  color: #757373;
}

@media (min-width: 1024px) {
  .title h1,
  .title h3 {
    text-align: left;
  }
}
</style>
