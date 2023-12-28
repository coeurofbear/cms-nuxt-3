<template>
  <div v-editable="blok" class="text-center">
    <h1 class="mt-32 mb-4 text-6xl text-[#50b0ae] font-bold">
      {{ blok.headline }}
    </h1>
    <div v-html="resolvedRichText"/>
  </div>
</template>
 
<script setup>
const props = defineProps({ blok: Object })
const resolvedRichText = computed(() => renderRichText(props.blok.text))
</script>
