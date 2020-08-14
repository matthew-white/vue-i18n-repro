<template>
  <div id="app">
    <div>
      <button type="button" @click="toggleLocale">Toggle locale</button>
    </div>
    <div>Locale: <code>{{ $i18n.locale }}</code></div>
    <hello-world/>
  </div>
</template>

<script>
import HelloWorld from './hello-world.vue';

export default {
  name: 'App',
  components: { HelloWorld },
  methods: {
    toggleLocale() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'fr' : 'en';
    }
  }
};
</script>
