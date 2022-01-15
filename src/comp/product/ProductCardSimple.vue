<template>
  <div class="tw-w-[200px] tw-border tw-overflow-hidden tw-relative tw-shrink tw-p-4 tw-bg-white">
    <span class="tw-absolute tw-right-4 tw-h-[20px] tw-w-[20px] tw-bg-red-100 tw-text-center">A</span>
    <img class="tw-block tw-w-full" width="178" height="178" src="https://cdn-images.gabrielny.com/is/image/GabrielCo/defaultwp/Uliana---14K-White-Gold-Wide-Band-Round-Diamond-Engagement-Ring~ER15175R4W44JJ-1.jpg" alt="Ring Name">
    <h3 class="tw-text-black tw-text-base tw-line-clamp-2">Uliana - 14K White Gold Wide Band Round Diamond Engagement Ring</h3>
    <div class="tw-flex tw-justify-between tw-mt-4">
      <div class="tw-uppercase tw-text-brand-secondary tw-text-base">ER15175R4W44JJ</div>
      <div class="tw-font-bold tw-text-black tw-text-base">$5,665</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCardSimple",
  props: ["title", "sku", "price"]

}
</script>

<style scoped>

</style>