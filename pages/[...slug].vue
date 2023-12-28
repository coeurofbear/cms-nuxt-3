<script setup>
const { slug } = useRoute().params

const { locale } = useI18n()
const resolveRelations = ['popular-articles.articles']

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  {
    version: 'draft',
    language: locale.value,
    resolve_relations: resolveRelations,
  },
  {
    resolveRelations,
  }
).catch(() => {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
})
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
