<template>
  <section class="tw-container">
    <h2 class="tw-uppercase tw-text-2xl tw-text-center">Matching Items</h2>
    <ul class="tw-flex tw-mt-8 tw-w-full tw-flex tw-overflow-auto tw-gap-8 tw-snap-x tw-scroll-smooth">
      <li v-for="n in this.items" :key="n" class="tw-snap-start" :id="getItemId(n)">
        <div class="tw-w-[200px] tw-border tw-overflow-hidden tw-relative tw-shrink tw-p-4">
          <span class="tw-absolute tw-right-4 tw-h-[20px] tw-w-[20px] tw-bg-red-100 tw-text-center">A</span>
          <img class="tw-block tw-w-full" width="178" height="178" src="https://cdn-images.gabrielny.com/is/image/GabrielCo/defaultwp/Uliana---14K-White-Gold-Wide-Band-Round-Diamond-Engagement-Ring~ER15175R4W44JJ-1.jpg" alt="Ring Name">
          <h3 class="tw-text-black tw-text-base tw-line-clamp-2">Uliana - 14K White Gold Wide Band Round Diamond Engagement Ring</h3>
          <div class="tw-flex tw-justify-between tw-mt-4">
            <div class="tw-uppercase tw-text-brand-secondary tw-text-base">ER15175R4W44JJ</div>
            <div class="tw-font-bold tw-text-black tw-text-base">$5,665</div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ProductCarousel",
  props: {
    items: {
      type: Number,
      default: 5
    }
  },
  methods: {
    getItemId(n) {
      return "item-"+n;
    },
    goToItemId(n){
      return "http://localhost:8080#"+this.getItemId(n);
    }
  }
}
</script>

<style scoped>

</style>