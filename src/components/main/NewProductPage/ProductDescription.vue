<template>
  <div>
    <section x-data="{
        id: 1,
        get expanded() {
            return this.active === this.id
        },
        set expanded(value) {
            this.active = value ? this.id : null
        },
    }" role="region" class="tw-border tw-mb-12 tw-bg-purple-100">
      <header class="tw-w-full tw-bg-purple-400">
        <h2>
          <button
              x-on:click="expanded = !expanded"
              :aria-expanded="expanded"
              class="tw-flex tw-items-center tw-justify-between tw-w-full tw-font-bold tw-px-6 tw-py-3 tw-bg-gray-100"
          >
            <span class="tw-uppercase tw-font-sans tw-text-lg tw-font-semibold">Title of accordion</span>
            <span x-show="expanded" aria-hidden="true" class="ml-4 tw-text-2xl">&minus;</span>
            <span x-show="!expanded" aria-hidden="true" class="ml-4 tw-text-2xl">&plus;</span>
          </button>
        </h2>
      </header>

      <div x-show="expanded" x-collapse class="lg:tw-bg-yellow-200">
        <div class="tw-pb-3 tw-px-6 tw-bg-gray-100 tw-text-left tw-text-rg">Lorem ipsum dolor sit amet consectetur adipisicing elit. In magnam quod natus deleniti architecto eaque consequuntur ex, illo neque iste repellendus modi, quasi ipsa commodi saepe? Provident ipsa nulla earum.</div>
      </div>
    </section>

    <section class="CTA-ProductPageDescription tw-border-t tw-border-t-2 tw-mb-6">
      <header class="tw-mt-6 tw-mb-6 tw-flex tw-justify-between">
        <h4 class="tw-uppercase tw-font-bold tw-text-black tw-text-rg">Product description</h4>
        <img class="tw---select-icon tw-w-8 tw-h-8 tw-transform tw-fill-current tw-text-brand-secondary" src="https://gabrielny.test/pub/static/version1636747486/frontend/GabrielCo/default/en_US/images/svg/arrow-black-down.svg" alt="Control Icon">
      </header>
      <div class="tw-text-left tw-text-rg">
        The perfect choice for your perfect girl, this 0.49ct diamond engagement ring
        effortlessly flatters the 1ct princess cut center stone of your choosing. Accent
        diamonds glisten throughout the top half of the scalloped shank while petite pavé
        stones garnish the four prong setting. Crafted from 14K white gold, this ring boasts
        a straight silhouette that will age beautifully.
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: "ProductDescription"
}
</script>

<style scoped>

</style>