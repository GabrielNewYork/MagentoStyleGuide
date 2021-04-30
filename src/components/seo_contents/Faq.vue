<template>

      <div class="Faq">
        <header class="tw-mb-12">
            <h3 class="tw-text-black tw-text-2xl tw-text-center md:tw-text-left tw-font-lora">Frequently Asked Questions</h3>
        </header>
        <div class="tw-w-full">
          <template v-for="$index in 3">
            <div :key="$index" class="FaqItem tw-cursor-pointer tw-border tw-border-solid tw-border-gray-light tw-mb-6">
              <header class="tw-p-4 tw-flex tw-items-center">
                <div class="tw-mr-6">
                  <img class="SelectedOptionChevron tw-h-6 tw-w-6 tw-ml-auto tw-transform tw--rotate-90"
                       src="https://gabrielny.test/pub/static/version1619646665/frontend/GabrielCo/default/en_US/images/svg/arrow-black.svg">
                </div>
                <h3 class="tw-font-sans tw-leading-tight tw-text-tiny md:tw-text-slg tw-m-0">How much to spend on an engagement ring</h3>
              </header>
              <div class="tw-p-4 tw-py-6 tw-border-solid tw-border-t tw-border-0 tw-border-gray-light tw-font-sans">
                <p>It’s a bit risky to buy an engagement ring online, which is why we don’t recommend it. Instead, we suggest discovering your preferences by browsing online and then visiting an authorized reseller to view your ring in store before making a purchase. An engagement ring is a big investment, and we always recommend taking the time and effort to do extensive research before making a final decision.</p>
              </div>
            </div>
          </template>
        </div>
      </div>

</template>

<script>
import RenderComponent from "@/components/support/RenderComponent";

export default {
  name: "Faq",
  components: {RenderComponent}
}
</script>

<style scoped>

</style>