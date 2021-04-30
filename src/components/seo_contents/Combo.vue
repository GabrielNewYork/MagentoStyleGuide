<template>
  <div class="tw-container">
    <div class="tw-flex tw-flex-col md:tw-flex-row">
      <div class="md:tw-w-1/2 lg:tw-w-2/5 md:tw-mr-10">
        <PopularSearches></PopularSearches>
      </div>
      <div class="md:tw-w-1/2 lg:tw-w-3/5">
        <faq></faq>
      </div>
    </div>
  </div>

</template>

<script>
import RenderComponent from "@/components/support/RenderComponent";
import PopularSearches from "@/components/seo_contents/PopularSearches";
import Faq from "@/components/seo_contents/Faq";

export default {
  name: "Combo",
  components: {Faq, PopularSearches, RenderComponent}
}
</script>

<style scoped>

</style>