<template>
<section id="Headertop">
  <div class="tw-border tw-border-gray-400 tw-border-solid tw-p-4">

    <!-- Header Top -->
    <section class="tw-header-top tw-flex tw-items-center tw-justify-between tw-bg-black tw-bg-opacity-05 tw-h-16 tw-font-sans tw-text-gray-900 tw-text-sm sm:tw-text-base tw-text-center">
        <span class="tw-w-1/12 tw-hidden sm:tw-block"></span>
        <span class="tw-px-16 sm:tw-px-0 tw-leading-normal">Get a Free Circle of Life: GIFTOFLIFE at checkout. Limited time Only!</span>
        <span class="tw-w-1/12 tw-text-right tw-pr-4 tw-text-lg tw-cursor-pointer tw-hidden sm:tw-block">x</span>
    </section>

  </div>

  <!-- Code BTN -->
  <button v-on:click="open = !open" class="mdl-button mdl-js-button mdl-js-ripple-effect tw-my-4 tw-text-sm focus:tw-outline-none">Show Code</button>
  <!-- Code -->
  <pre v-show="open" class="tw-m-0">
      <code class="html">
      
    &lt;!-- Header Top -->
    &lt;section class="tw-header-top tw-flex tw-items-center tw-justify-between tw-bg-black tw-bg-opacity-05 tw-h-16 tw-font-sans tw-text-gray-900 tw-text-sm sm:tw-text-base tw-text-center">
        &lt;span class="tw-w-1/12 tw-hidden sm:tw-block">&lt;/span>
        &lt;span class="tw-px-16 sm:tw-px-0 tw-leading-normal">Get a Free Circle of Life: GIFTOFLIFE at checkout. Limited time Only!&lt;/span>
        &lt;span class="tw-w-1/12 tw-text-right tw-pr-4 tw-text-lg tw-cursor-pointer tw-hidden sm:tw-block">x&lt;/span>
    &lt;/section>

      </code>
  </pre>

</section>
</template>

<script>
export default {
  name: 'Headertop',
    data () {
      return {
         open: false 
      }
    } 
}
</script>