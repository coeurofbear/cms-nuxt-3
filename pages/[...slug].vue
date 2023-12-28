<script setup>
const { slug } = useRoute().params;
const { locale } = useI18n();
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
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="es">es</option>
      </select>
    </form>
    <p>{{ $t('welcome') }}</p>
  </div>
</template>
