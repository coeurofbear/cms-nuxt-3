<template>
  <NuxtLayout>
    <Teaser :blok="{ headline: error && error.message }" />
  </NuxtLayout>
</template>

<script setup>
const error = useError()
</script>