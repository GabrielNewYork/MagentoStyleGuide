<template>
  <div class="block filter tw-bg-transparent tw-flex tw-justify-center tw-m-0 active" id="layered-filter-block" data-collapsible="true">

    <div class="filter-content tw-max-w-screen-xl tw-flex tw-m-auto tw-w-full">


      <div class="filter-current tw-w-full">
        <strong class="block-subtitle filter-current-subtitle tw-hidden" role="heading" aria-level="2" data-count="4">Now Shopping by</strong>
        <ol class="items tw-flex">
          <li class="item tw-mr-4">
            <a class="action remove tw-flex tw-items-center tw-border tw-border-brand-primary tw-transition tw-rounded-full tw-px-4 tw-py-2 tw-text-brand-primary tw-text-rg" href="https://gabrielny.test/engagement-rings/all?stone_shape=Round&amp;style%5B1%5D=Split+Shank&amp;style%5B2%5D=Solitaire" title="Remove Style Halo">
              <span class="filter-label tw-hidden">Style</span>
              <span class="filter-value tw-leading-none">Halo</span>
              <span class="tw-flex tw-items-center tw-ml-4 tw-py-2">
                <svg id="svg-close" class="tw-w-4 tw-h-4 tw-fill-current tw-text-brand-primary" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
      <g>
        <g>
          <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5         "></polygon>
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
              </span>
            </a>

          </li>
          <li class="item">
            <span class="filter-label">Style</span>
            <span class="filter-value">Split Shank</span>
            <a class="action remove" href="https://gabrielny.test/engagement-rings/all?stone_shape=Round&amp;style%5B0%5D=Halo&amp;style%5B2%5D=Solitaire" title="Remove Style Split Shank">
              <span>Remove This Item</span>
            </a>
          </li>
          <li class="item">
            <span class="filter-label">Style</span>
            <span class="filter-value">Solitaire</span>
            <a class="action remove" href="https://gabrielny.test/engagement-rings/all?stone_shape=Round&amp;style%5B0%5D=Halo&amp;style%5B1%5D=Split+Shank" title="Remove Style Solitaire">
              <span>Remove This Item</span>
            </a>
          </li>
          <li class="item">
            <span class="filter-label">Stone Shape</span>
            <span class="filter-value">Round</span>
            <a class="action remove" href="https://gabrielny.test/engagement-rings/all?style%5B0%5D=Halo&amp;style%5B1%5D=Split+Shank&amp;style%5B2%5D=Solitaire" title="Remove Stone Shape Round">
              <span>Remove This Item</span>
            </a>
          </li>
        </ol>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "FilterBar"
}
</script>

<style scoped>

</style>