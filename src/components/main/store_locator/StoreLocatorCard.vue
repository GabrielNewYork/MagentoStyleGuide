<style>
.card-item:hover .card-viewsimilar {
  display: block;
}
</style>

<template>
  <section class="tw-mb-20" id="StoreLocatorCard">
    <div class="tw-border tw-border-gray-400 tw-border-solid tw-p-10">

      <div class="StoreLocatorCardGrid tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-12">
      <template v-for="i in 3">
        <div :key="i" class="StoreLocatorCard md:tw-bg-blue-100 tw-border tw-border-gray-lightest tw-border-solid tw-p-12 tw-rounded">
          <h2 class="StoreLocatorCardName tw-text-4xl tw-m-0 tw-leading-none tw-font-lora tw-mb-6">W. Kodak
            Jewelers</h2>
          <a href="#view-profile" class="tw-text-base tw-mb-3 tw-inline-block hover:tw-text-scarlet">View Profile</a>
          <div class="StoreLocatorCardAddress tw-font-sans">
            <span class="tw-text-base tw-mb-2 tw-block">60 Newark ST</span>
            <span class="tw-text-base">Hoboken, NJ, 07030, US</span>
          </div>
          <div class="StoreLocatorCardDirections"></div>
        </div>
      </template>
      </div>

    </div>
  </section>

</template>


<script>
export default {
  name: 'StoreLocatorCard',
}
</script>