export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  strategy: 'prefix_except_default',
  locales: ['en', 'es'],
  defaultLocale: 'en',
  messages: {
    en: {
      welcome: 'Welcome'
    },
    es: {
      welcome: 'Bienvenido'
    }
  }
}))