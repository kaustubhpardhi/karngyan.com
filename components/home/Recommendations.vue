<template>
  <div
    class="max-w-7xl mx-auto border-l border-r border-dashed border-gray-700 pt-4 pb-6 px-4"
  >
    <div class="max-w-prose text-center mx-auto pb-4">
      <p
        class="text-xs leading-6 text-indigo-600 font-semibold tracking-wide lowercase"
      >
        {{ $t("recommendations.subtext") }}
      </p>
      <div v-if="$config.social.linkedin">
        <a
          :href="`https://linkedin.com/in/${$config.social.linkedin}`"
          target="_blank"
          rel="noreferrer"
          class="mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500"
          >{{ $t("recommendations.header") }}</a
        >
      </div>
      <div v-else>
        <div
          class="mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500"
        >
          {{ $t("recommendations.header") }}
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <button
        class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        @click="redirectToProjects"
      >
        Checkout my projects
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    redirectToProjects() {
      this.$router.push("/projects");
    }
  }
};
</script>

<style scoped></style>
