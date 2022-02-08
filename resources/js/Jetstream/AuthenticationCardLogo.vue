<template>
  <Link :href="'/'">
    <img class="w-48 h-48 -mb-12" src="/img/logo-black.png" alt="logo" />
  </Link>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
  components: {
    Link,
  },
});
</script>
