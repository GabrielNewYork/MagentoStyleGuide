<template>
<div>
  <div x-data="{ open: false }">
    <!-- Button -->
    <button x-on:click="open = true" type="button" class="tw-bg-white tw-border tw-border-black tw-px-4 tw-py-2 focus:tw-outline-none focus:tw-ring-4 focus:tw-ring-aqua-400">
      Open dialog
    </button>

    <!-- Modal -->
    <div
        x-show="open"
        x-on:keydown.escape.prevent.stop="open = false"
        role="dialog"
        aria-modal="true"
        x-id="['product-measurement-modal']"
        aria-labelledby="$id('product-measurement-modal')"
        class="tw-fixed tw-inset-0 tw-overflow-y-auto"
    >
      <!-- Overlay -->
      <div x-show="open" x-transition.opacity class="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50"></div>

      <!-- Panel -->
      <div
          x-show="open" x-transition
          x-on:click="open = false"
          class="tw-relative tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-p-4"
      >
        <div
            x-on:click.stop
            x-trap.noscroll.inert="open"
            class="tw-relative tw-max-w-[380px] tw-w-full tw-bg-white tw-rounded tw-p-8 tw-overflow-y-auto"
        >
          <!-- Title -->
          <header class="tw-w-full tw-flex tw-justify-between tw-items-start">
            <h2 class="tw-text-3xl tw-font-medium" id="$id('product-measurement-modal')">[NK][Style] [measurements]</h2>
            <button type="button" x-on:click="open = false" class="tw-bg-white tw-ml-2 tw-py-2 focus:tw-outline-none hover:tw-text-brand-primary focus:tw-ring-4 focus:tw-ring-aqua-400 tw-text-4xl">
              <svg id="svg-close" class="tw-fill-current  tw-w-[20px] tw-h-[20px]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
                <g>
	<g>
		<polygon class="st0" points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357
			357,321.3 214.2,178.5 		"/>
	</g>
</g>
</svg>
            </button>
          </header>
          <!-- Content -->
          <div class="tw-mt-2">
            <ul class="tw-bg-red-700 tw-no-scroll-style tw-flex tw-w-full tw-flex tw-overflow-auto tw-snap-x tw-snap-mandatory tw-scroll-smooth">
              <li class="tw-self-stretch tw-snap-center tw-w-full tw-min-w-full  tw-inline-block">
                <div class="tw-w-full">
                  <img width="300" height="300" class="tw-w-full tw-h-full" src="https://gabrielny.test/pub/static/version1643138078/frontend/GabrielCo/default/en_US/GabrielCo_Catalog/img/diagram/nk-pendant/B-50.webp" alt="Thickness">
                  <span>A = 4.50mm</span>
                </div>
              </li>
              <li class="tw-self-stretch tw-snap-center tw-min-w-full  tw-inline-block">
                <div class="tw-w-full">
                  <img class="tw-w-full tw-h-full" src="https://gabrielny.test/pub/static/version1643138078/frontend/GabrielCo/default/en_US/GabrielCo_Catalog/img/diagram/nk-pendant/D-50.webp" alt="Size">
                  <span>Angle B</span>
                </div>
              </li>
              <li class="tw-self-stretch tw-snap-center tw-min-w-full  tw-inline-block">
                <div class="tw-w-full">
                  <img class="tw-w-full" src="https://gabrielny.test/pub/static/version1643138078/frontend/GabrielCo/default/en_US/GabrielCo_Catalog/img/diagram/nk-pendant/E-50.webp" alt="Drop">
                  <span>Angle E</span>
                </div>
              </li>
            </ul>
          </div>
          <p class="tw-mt-2 tw-text-gray-600">Are you sure you want to learn how to create an awesome modal?</p>
          <!-- Buttons -->
          <div class="tw-mt-8 tw-flex tw-justify-center tw-space-x-2">
            <button type="button" class="tw-bg-white tw-rounded tw-border tw-border-black tw-px-4 tw-py-2 tw-focus:outline-none tw-focus:ring-4 tw-focus:ring-aqua-400 tw-text-rg">A</button>
            <button type="button" x-on:click="open = false" class="tw-bg-white tw-rounded tw-border tw-border-black tw-px-4 tw-py-2 tw-focus:outline-none tw-focus:ring-4 tw-focus:ring-aqua-400">
              Confirm
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ProductMeasurement"
}
</script>

<style scoped>

</style>