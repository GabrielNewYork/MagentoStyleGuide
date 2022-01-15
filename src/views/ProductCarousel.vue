<template>


  <div class="tw-container">
    <section
        x-data="{
        skip: 1,
        next() {
            this.to((current, offset) => current + (offset * this.skip))
        },
        prev() {
            this.to((current, offset) => current - (offset * this.skip))
        },
        to(strategy) {
            let slider = this.$refs.slider
            let current = slider.scrollLeft
            let offset = slider.firstElementChild.getBoundingClientRect().width
            slider.scrollTo({ left: strategy(current, offset), behavior: 'smooth' })
        },
        focusableWhenVisible: {
            'x-intersect:enter'() {
                this.$el.removeAttribute('tabindex')
            },
            'x-intersect:leave'() {
                this.$el.setAttribute('tabindex', '-1')
            }
        }
    }"
        class="tw-mt-20 tw-bg-purple-800 tw-w-full tw-flex tw-flex-col">
      <h2 class="tw-uppercase tw-text-2xl tw-text-center">Matching Items</h2>
      <div x-on:keydown.right="next"
           x-on:keydown.left="prev"
           tabindex="0"
           role="region"
           class="tw-flex tw-space-x-6 tw-bg-purple-400">
        <button x-on:click="prev" class="tw-text-6xl tw-hidden md:tw-block">
          <span aria-hidden="true" class="tw-text-brand-secondary">❮</span>
          <span class="tw-sr-only" hidden>Skip to previous slide</span>
        </button>

        <ul
            x-ref="slider"
            tabindex="0"
            role="listbox"
            class="tw-flex tw-mt-8 tw-w-full tw-flex tw-overflow-auto tw-gap-8 tw-snap-x tw-snap-mandatory tw-scroll-smooth tw-bg-purple-100 tw-snap-start">
          <li v-for="product in this.items" :key="product.sku" class="tw-snap-center">
            <div class="tw-w-[200px] tw-border tw-overflow-hidden tw-relative tw-shrink tw-p-4 tw-bg-white">
              <span class="tw-absolute tw-right-4 tw-h-[20px] tw-w-[20px] tw-bg-red-100 tw-text-center">A</span>
              <img class="tw-block tw-w-full" width="178" height="178" :src="product.img" :alt="product.title">
              <h3 class="tw-text-black tw-text-base tw-line-clamp-2">{{ product.title }}</h3>
              <div class="tw-flex tw-justify-between tw-mt-4">
                <div class="tw-uppercase tw-text-brand-secondary tw-text-base">{{ product.sku }}</div>
                <div class="tw-font-bold tw-text-black tw-text-base" v-html="product.price"></div>
              </div>
            </div>
          </li>
        </ul>
        <button x-on:click="next" class="tw-text-6xl tw-hidden md:tw-block">
          <span aria-hidden="true" class="tw-text-brand-secondary">❯</span>
          <span class="tw-sr-only" hidden>Skip to next slide</span>
        </button>
      </div>
    </section>
  </div>

</template>

<script>
import {products} from "@/data/products"

export default {
  name: "ProductCarousel",
  data: function () {
    return {
      "items": products
    }
  },
  methods: {
    getItemId(n) {
      return "item-" + n;
    }
  }
}
</script>

<style scoped>

</style>