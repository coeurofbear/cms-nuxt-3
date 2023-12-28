<script setup>
const { slug } = useRoute().params;

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join("/") : "home",
  { version: "draft" }
).catch(() => {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true,
  });
});
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
