export default defineNuxtConfig({
  extends: 'content-wind',
  content: {
    highlight: {
      theme: "monokai"
    }
  },
  generate: {
    routes: ['/about']
  }
})
