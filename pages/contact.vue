<template>
  <the-header></the-header>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
export default {
  name: 'ContactPage',
  components: {
    TheHeader,
  },
  head() {
    return {
      title: 'Contact',
    }
  },
}
</script>