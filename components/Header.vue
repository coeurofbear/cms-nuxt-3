<template>
  <header class="w-full h-24 bg-[#f7f6fd]">
    <div class="container h-full mx-auto flex items-center justify-between">
      <NuxtLink :to="localePath('/')">
        <h1 class="text-[#50b0ae] text-3xl font-bold">Storyblok Nuxt</h1>
      </NuxtLink>
      <nav v-if="headerMenu">
        <ul class="flex space-x-8 text-lg font-bold">
          <li v-for="blok in headerMenu" :key="blok._uid">
            <NuxtLink :to="blok.link.story ? localePath(`/${blok.link.cached_url}`) : blok.link.cached_url" class="hover:text-[#50b0ae]">
              {{ blok.link.story ? blok.link.story.name : blok.name }}
            </NuxtLink>
          </li>
          <li v-for="lang in availableLocales" :key="lang">
            <NuxtLink :to="switchLocalePath(lang)" class="uppercase">
              {{ lang }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
 
<script setup>
const storyblokApi = useStoryblokApi()
const localePath = useLocalePath()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})
 
const headerMenu = ref(null)
headerMenu.value = data.story.content.header_menu

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>
 
<style scoped>
nav a.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-[#50b0ae];
}
</style>