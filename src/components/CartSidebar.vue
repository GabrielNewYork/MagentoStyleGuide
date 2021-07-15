<template>
  <ul class="tw-max-w-xl">
    <li class="linkCartProduct-- tw-border-b tw-border-brand-secondary-light last:tw-border-b-0" v-for="n in 4">
      <div class="tw-flex tw-py-8">
        <!-- ko template: 'Magento_Checkout/cart/modal-cart-item' -->
        <div class="imageContainer-- tw-mr-8" style="width: 70px;">
          <img class="wrap__image tw-block tw-w-full" data-bind="attr: {src: product_image.src, alt: product_image.alt}"
               src="https://cdn-images.gabrielny.com/is/image/GabrielCo/tiny/Img-without-name~TB4425W45JJ-1.jpg"
               alt="14K White Gold Diamond Bracelet">
        </div>
        <a data-bind="attr: { href: product_url}" class="tw-cursor-pointer"
           href="https://gabrielny.test/14k-white-gold-diamond-bracelet-tb4425w45jj">
          <div class="tw-text-lg tw-mb-4" data-bind="text: product_name">14K White Gold Diamond Bracelet</div>
          <div class="tw-text-dark03 tw-text-sm tw-mb-4" data-bind="text: product_sku">TB4425W45JJ</div>
          <div class="tw-text-xl" data-bind="html: product_price">
              <span class="price-excluding-tax" data-label="Excl. Tax">
                <span class="minicart-price">
                  <span class="price">$5,305.00</span>
                </span>
              </span>
          </div>
        </a>
        <div>
        <a href="#"
           data-bind="click: $parent.onClickRemoveItem.bind(event,$parent), attr: {'data-cart-item': item_id, title:$t('Remove item')}"
           class="action delete tw-px-8 tw-py-4 tw-text-lg hover:tw-text-brand-primary" data-cart-item="344" title="Remove item">
          x
        </a>
        </div>

        <!-- /ko -->
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CartSidebar"
}
</script>

<style scoped>

</style>