<template>
  <pre><code :class="`language-${lang}`" v-html="code"></code></pre>
</template>

<script>
export default {
  name: 'Code',
  props: {
    lang: {
      type: String,
      default: 'js'
    },
    code: {
      type: String,
      default: ''
    }
  }
}
</script>
