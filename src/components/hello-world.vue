<template>
  <p>{{ $t('hello') }}</p>
</template>

<script>
export default {
  name: 'HelloWorld'
};
</script>

<i18n>
{
  "en": {
    "hello": "Hello World!"
  },
  "fr": {
    "hello": "Salut<br>le Monde!"
  }
}
</i18n>
