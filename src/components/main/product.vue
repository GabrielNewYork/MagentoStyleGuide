<template>
    
    <section class="tw-mb-20" id="Product tw-container">
        <h1 class="tw-text-7xl tw-font-normal tw-tracking-wide tw-my-16 tw-font-sans ">Product</h1>

        <h2 class="tw-text-3xl tw-font-bold tw-mb-4">Product Card</h2>
        <ProductCard></ProductCard>

        <h2 class="tw-text-3xl tw-font-bold tw-mb-4">Product Page Infos</h2>
        <ProductPageInfos></ProductPageInfos>

        <h2 class="tw-text-3xl tw-font-bold tw-mb-4">Product Page Bottom</h2>
        <ProductPagebottom></ProductPagebottom>

    </section>

</template>


<script>

import ProductCard from './product/productcard'
import ProductPageInfos from './product/productpage_infos'
import ProductPagebottom from './product/productpage_bottom'

export default {
    name: 'Product',
    components: {
        ProductCard,
        ProductPageInfos,
        ProductPagebottom
  },
}
</script>