<template>
  <div x-data="{expanded: true}"
       role="region" class="tw-border tw-mt-12 tw-rounded">
    <h2 class="tw-w-full">
      <button x-on:click="expanded = !expanded"
              :aria-expanded="expanded"
              class="tw-flex tw-items-center tw-justify-between tw-w-full tw-font-bold tw-px-6 tw-py-6">
        <span class="tw-uppercase tw-text-left tw-flex-1 tw-font-sans tw-text-lg tw-font-semibold">Product measurements</span>
        <span x-show="expanded" aria-hidden="true" class="ml-4 tw-text-2xl">&minus;</span>
        <span x-show="!expanded" aria-hidden="true" class="ml-4 tw-text-2xl">&plus;</span>
      </button>
    </h2>

    <div x-show="expanded" x-ref="contentWrapper" x-collapse>
      <div class="tw-pb-3 tw-px-6 tw-text-left tw-text-rg">
        <dl class="tw-grid tw-grid-cols-2 tw-gap-4">
          <dt class="tw-text-left tw-text-brand-secondary tw-text-rg">Thickness</dt>
          <dd class="tw-text-right tw-text-brand-secondary tw-text-rg">2.60 mm</dd>
          <dt class="tw-text-left tw-text-brand-secondary tw-text-rg">Drop</dt>
          <dd class="tw-text-right tw-text-brand-secondary tw-text-rg">49.70 mm</dd>
        </dl>
        <div class="tw-mt-12">
          <div class="tw-grid tw-grid-cols-2 sm:tw-flex md:tw-grid md:tw-grid-cols-2 lg:tw-flex lg:tw-justify-around tw-items-center">
              <img class="tw-w-full sm:tw-w-1/4 md:tw-w-full lg:tw-w-1/4" src="https://gabrielny.test/pub/static/version1642457411/frontend/GabrielCo/default/en_US/GabrielCo_Catalog/img/diagram/eg-drop/B-50.webp" alt="Thickness">
              <img class="tw-w-full sm:tw-w-1/4 md:tw-w-full lg:tw-w-1/4" src="https://gabrielny.test/pub/static/version1642457411/frontend/GabrielCo/default/en_US/GabrielCo_Catalog/img/diagram/eg-drop/E-50.webp" alt="Drop">
          </div>
          <div class="tw-grid tw-grid-cols-2 sm:tw-flex md:tw-grid md:tw-grid-cols-2 lg:tw-flex lg:tw-justify-around lg:tw-grid-cols-4 tw-items-center">
            <img class="tw-w-full sm:tw-w-1/4 md:tw-w-full lg:tw-w-1/4" src="https://gabrielny.test/pub/static/version1642457411/frontend/GabrielCo/default/en_US/GabrielCo_Catalog/img/diagram/eg-drop/B-50.webp" alt="Thickness">
            <img class="tw-w-full sm:tw-w-1/4 md:tw-w-full lg:tw-w-1/4" src="https://gabrielny.test/pub/static/version1642457411/frontend/GabrielCo/default/en_US/GabrielCo_Catalog/img/diagram/eg-drop/E-50.webp" alt="Drop">
            <img class="tw-w-full sm:tw-w-1/4 md:tw-w-full lg:tw-w-1/4" src="https://gabrielny.test/pub/static/version1642457411/frontend/GabrielCo/default/en_US/GabrielCo_Catalog/img/diagram/eg-drop/E-50.webp" alt="Drop">
          </div>
          <div class="tw-grid tw-grid-cols-2 sm:tw-flex md:tw-grid md:tw-grid-cols-2 lg:tw-flex lg:tw-justify-around lg:tw-grid-cols-4 tw-items-center">
            <img class="tw-w-full sm:tw-w-1/4 md:tw-w-full lg:tw-w-1/4" src="https://gabrielny.test/pub/static/version1642457411/frontend/GabrielCo/default/en_US/GabrielCo_Catalog/img/diagram/eg-drop/B-50.webp" alt="Thickness">
            <img class="tw-w-full sm:tw-w-1/4 md:tw-w-full lg:tw-w-1/4" src="https://gabrielny.test/pub/static/version1642457411/frontend/GabrielCo/default/en_US/GabrielCo_Catalog/img/diagram/eg-drop/E-50.webp" alt="Drop">
            <img class="tw-w-full sm:tw-w-1/4 md:tw-w-full lg:tw-w-1/4" src="https://gabrielny.test/pub/static/version1642457411/frontend/GabrielCo/default/en_US/GabrielCo_Catalog/img/diagram/eg-drop/E-50.webp" alt="Drop">
            <img class="tw-w-full sm:tw-w-1/4 md:tw-w-full lg:tw-w-1/4" src="https://gabrielny.test/pub/static/version1642457411/frontend/GabrielCo/default/en_US/GabrielCo_Catalog/img/diagram/eg-drop/E-50.webp" alt="Drop">
          </div>
          <p class="tw-text-left tw-text-rg tw-mt-6">
            * Product weights and dimensions are approximate. Our total diamond weight may have a +/-5% tolerance. All prices on this web site are subject to change without notice. Whilst we make every effort to provide you the most accurate, up-to-date information, occasionally, one or more items on our web site may be mis-priced. In the event a product is listed at an incorrect price due to typographical, photographic, or technical error. Gabriel & Co reserves the right to cancel any orders placed with incorrect price.    </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AttributeMeasurements"
}
</script>

<style scoped>

</style>