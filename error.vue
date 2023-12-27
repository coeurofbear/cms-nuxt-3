<template>
  <Header/>
  <Teaser :blok="{headline: error.message}"/>
</template>

<script setup>
const error = useError();
</script>